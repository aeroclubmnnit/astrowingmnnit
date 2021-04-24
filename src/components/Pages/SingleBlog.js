import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../../css/SingleBlog.css";
import Loading from "../../Animations/Loading";
import "react-quill/dist/quill.core.css";
import { Container, Jumbotron, OverlayTrigger, Tooltip } from "react-bootstrap";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"

function SingleBlog() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(undefined);
  const history = useHistory();

  const year = {
    1: "1st year",
    2: "2nd year",
    3: "3rd year",
    4: "final year",
  };

  const branch = {
    '0': 'Biotechnology',
    '1': 'Civil Engg.',
    '2': 'Electrical Engg.',
    '3': 'Mechanical Engg.',
    '4': 'Computer Science Engg.',
    '5': 'Electronics and Comm. Engg.',
    '6': 'Production and Industrial Engg.',
    '8': 'Information Technology',
    '9': 'Chemical Engg.',
    'x': 'NA'
  }

  useEffect(() => {
    document.title = `Blog-${blogId} | ${REACT_APP_BASE_TITLE}`;
    fetch(`${REACT_APP_SERVER}/api/blogstoUI/${blogId}`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) history.push("/404");
        else setBlog(data);
      });
  }, []);

  return (
    <div>
      <Loading time={2} />
      <div
        className="pagesp singleblog-pagesp"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,.4))`,
        }}
      >
        <div className="overlayp starbg">
          <div className="pageTitlep titleBoldp container col-11 pl-0">
            <div className='blog-title'>
              {blog?.title}
            </div>
            <p className="meta">
              <div className='mt-5 postedBy-info'>
                <i className="fa fa-user mr-3 ml-1"></i> by{" "}
                {
                  branch[blog?.postedBy.registration_no[4]] === 'NA' || blog?.postedBy.year === -1 || blog?.postedBy.linkedin_url ===
                    "https://www.linkedin.com/in/username/" ?
                    <>
                      {blog?.postedBy.name}
                    </>
                    :
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={
                        <Tooltip id={`tooltip-${blog?._id}`}>
                          Branch - {branch[blog?.postedBy.registration_no[4]]} <br />
                          {year[blog?.postedBy.year]}
                        </Tooltip>}
                    >
                      <div className='d-inline'>
                        <a href={blog?.postedBy.linkedin_url} target="_blank" style={{ textDecoration: 'none' }}>
                          {blog?.postedBy.name}
                        </a>
                      </div>
                    </OverlayTrigger>
                }
                <br />
                <i className="fa fa-calendar mr-3 ml-1"></i>
                {new Date(blog?.publishedAt).toLocaleDateString()}
              </div>
            </p>
          </div>
        </div>
      </div>
      <Jumbotron
        fluid
        style={{
          background: "white",
          width: "100%",
        }}
        className="my-4"
      >
        <Container className="col-10 col-md-10 col-lg-11 singleblog-contents">
          {
            blog?.pic &&
            <>
              <hr />
              <div className="image mx-auto" style={{ maxWidth: '30rem' }}>
                <img src={blog?.pic} alt="img" style={{ width: '100%', height: '100%' }} className='my-3' />
              </div>
              <hr />
            </>
          }
          <div dangerouslySetInnerHTML={{ __html: blog?.body }} className='my-5 ql-editor'></div>
          <hr />
        </Container>
      </Jumbotron>
    </div>
  );
}

export default SingleBlog;
