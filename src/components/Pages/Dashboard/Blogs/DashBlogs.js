import React, { useEffect } from "react";
import {
  Accordion,
  Tooltip,
  Badge,
  Button,
  Card,
  Container,
  Jumbotron,
  OverlayTrigger,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import CreateBlog from "./CreateBlog";

export default function DashBlogs() {
  const user = useSelector(state => state.user);
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
    if (!localStorage.getItem("jwtToken")) {
      history.push("/user/login");
      toast.warn("You must be logged in !");
      return;
    }
  }, []);

  return (
    <>
      <div className="container">
        <Accordion className='shadow'>
          {user?.blogs?.map((blog) => (
            <Card className="rounded" key={blog._id}>
              <Card.Header style={{ cursor: "pointer" }}>
                <Accordion.Toggle
                  as={Card.Header}
                  variant="link"
                  eventKey={blog._id}
                >
                  {blog.title}
                  <p className="float-right">
                    <Badge variant={blog.accepted ? "success" : "danger"}>
                      {blog.accepted ? "Accepted" : "Not accepted"}
                    </Badge>
                  </p>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={blog._id}>
                <Card.Body>
                  {blog.accepted ? (
                    <>
                      <p className='my-2'><strong>
                        Accepted By :{" "}
                      </strong>
                        {blog.acceptedBy?.name} ( {blog.acceptedBy?.email} ) </p>
                      <Button
                        variant="primary mt-2"
                        onClick={() => {
                          history.push(`/blogs/${blog._id}`);
                        }}
                      >
                        Go to blog
                  </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="primary"
                        data-toggle="collapse"
                        data-target={`#preview${blog._id}`}
                        aria-expanded="false"
                        aria-controls="preview"
                      >
                        Click to View
                    </Button>
                      <br />
                      <br />
                      <div id={`preview${blog._id}`} className="collapse">
                        <div
                          className="pagesp singleblog-pagesp"
                          style={{
                            background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,.4))`,
                          }}
                        >
                          <div className="overlayp">
                            <div className="pageTitlep titleBoldp container col-11 pl-0">
                              <div className='blog-title'>
                                {blog?.title}
                              </div>
                              <p className="meta">
                                <div className='mt-5 postedBy-info'>
                                  <i className="fa fa-user mr-3 ml-1"></i> by{" "}
                                  {
                                    branch[user.registration_no[4]] === 'NA' || user.year === -1 || user.linkedin_url ===
                                      "https://www.linkedin.com/in/username/" ?
                                      <>
                                        {user.name}
                                      </>
                                      :
                                      <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={
                                          <Tooltip id={`tooltip-${blog?._id}`}>
                                            Branch - {branch[user?.registration_no[4]]} <br />
                                            {year[user?.year]}
                                          </Tooltip>}
                                      >
                                        <div className='d-inline'>
                                          <a href={user?.linkedin_url} target="_blank" style={{ textDecoration: 'none' }}>
                                            {user?.name}
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
                    </>
                  )}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
          {
            user?.blogs.length === 0 && <h3 className="text-center mt-5">No blogs created...!</h3>
          }
        </Accordion>
      </div>
      <CreateBlog />
    </>
  );
}
