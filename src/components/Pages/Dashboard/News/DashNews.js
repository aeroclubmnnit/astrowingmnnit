import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { Accordion, Card } from 'react-bootstrap';
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../../../grobalVars"

export default function DashNews() {
  const [news, setnews] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`${REACT_APP_SERVER}/api/news/private`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => {
        if (res.status != 200) {
          localStorage.removeItem("jwtToken");
          toast.warn("Error");
          history.push("/user/login");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setnews(data);
      });
  });
  return (
    <div className="container">
      <Accordion className="shadow">
        {news.map((singleNews) => (
          <Card className="rounded" key={singleNews.id}>
            <Card.Header style={{ cursor: "pointer" }}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey={singleNews.id}
                style={{ fontSize: "1.3rem" }}
              >
                <div>
                  {singleNews.title}
                  <em className="float-right font-weight-bold" style={{ fontSize: "small" }}>
                    ~ {new Date(singleNews.publishedAt).toLocaleDateString()}
                  </em>
                </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={singleNews.id}>
              <Card.Body
                className="border"
                dangerouslySetInnerHTML={{ __html: singleNews.body }}
              ></Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
        {news.length === 0 && (
          <h3 className="text-center mt-5">No Updates available...!</h3>
        )}
      </Accordion>
    </div>
  );
}
