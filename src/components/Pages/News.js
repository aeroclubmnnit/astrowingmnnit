import React, { useEffect, useState } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Loading from "../../Animations/Loading";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"
import "../../css/news.css";

export default function News() {

  const [news, SetNews] = useState([]);

  useEffect(() => {
    document.title = `Updates | ${REACT_APP_BASE_TITLE}`;
    fetch(`${REACT_APP_SERVER}/api/news/public`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => SetNews(data));
  }
    , [news]);

  return (
    <>
      <Loading time={2} />
      <div>
        <div className="pagesg">
          <div className="overlayg starbg">
            <div className="pageTitleg titleBoldg">Updates</div>
          </div>
        </div>
        <Jumbotron
          fluid
          style={{
            background: "white",
            width: "100%",
            margin: "auto",
            paddingBottom: "1rem",
            minHeight: '25rem'
          }}>
          <Container className='col-11 my-5'>
            <div className="panel-group news-container" id="accordion" role="tablist" aria-multiselectable="true"
              style={{ margin: "1.5rem" }}>
              {news.length == 0 && <h4 className='text-center'>No Updates Available ...!</h4>}
              {news.map((singleNews, i) => (
                <div className="panel panel-default" key={singleNews.id}
                  style={{ padding: "0.15rem" }}
                  data-aos="fade-up"
                  data-aos-duration="1000">
                  <div className="panel-heading" role="tab" id={singleNews.id}
                    style={{ fontSize: "1.3rem" }}>
                    <h4 className="panel-title">
                      <a role="button" data-toggle="collapse" data-parent="#accordion" href={`#collapse${singleNews.id}`} aria-expanded={i == 0 ? 'true' : 'false'} aria-controls={`collapse${singleNews.id}`} >
                        {singleNews.title}
                      </a>
                    </h4>
                  </div>
                  <div id={`collapse${singleNews.id}`} className={`panel-collapse collapse in ${i == 0 ? 'show' : null}`} role="tabpanel" aria-labelledby={singleNews.id}>
                    <div className="panel-body my-3 mx-4">
                      <em
                        style={{ fontSize: "small" }}
                      >
                        Published on {new Date(
                        singleNews.publishedAt
                      ).toLocaleDateString()}
                      </em>
                    </div>
                    <div className="panel-body my-5 mx-4 ql-editor" dangerouslySetInnerHTML={{ __html: singleNews.body }}></div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Jumbotron>
      </div>
    </>
  );
}
