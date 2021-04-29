import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Loading from "../../../../Animations/Loading";
import CompCard from "./CompCard";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../../../grobalVars"

export default function CompIssue() {

  const [components, setComponents] = useState([]);
  const [types, setTypes] = useState([]);
  const [key, setKey] = useState("Telescope");

  useEffect(() => {
    fetch(`${REACT_APP_SERVER}/api/component/filter`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        setComponents(data);
        setTypes(Object.keys(data));
      });
  }, []);

  return (
    <div className="container">
      <Loading />
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        {types.map((type) => (
          <Tab eventKey={type} title={type.toUpperCase()} key={type}>
            <div className="d-flex flex-wrap">
              {components[type].map((comp, i) => (
                <CompCard comp={comp} key={i} />
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
