import React, { useState } from "react";
import { toast } from "react-toastify";
import "../../../../css/CreateBlog.css";
import "../../../../css/SingleBlog.css";
import { REACT_APP_SERVER } from "../../../../grobalVars"
import { Button, Container, Jumbotron, OverlayTrigger, Tab, Tabs, Tooltip } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import DashQuill from "../DashQuill";
import { v4 } from 'uuid'

export default function CreateBlog() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [title, setTitle] = useState("");
  const [pic, setPic] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleCreateBlog = () => {
    setLoading(true);
    if (!title || !body) {
      toast.warn("Please specify all the details before submitting !");
      setLoading(false);
      return;
    }

    fetch(`${REACT_APP_SERVER}/api/blogs`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        pic,
        postedBy: user.id,
        publishedAt: Date.now(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTitle('')
        setBody('')
        setPic('')
        document.getElementById('collapsecreateblog').classList.remove('show')
        setLoading(false);
        dispatch({ type: "UPDATE_BLOG", payload: { ...data, _id: data.id } });
        toast.success(
          "Blog has been sent for confirmation...Till then stay tuned !"
        );
      });
  };

  return (
    <div className='container-fluid mb-5'>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <button className="btn btn-primary px-4 btn-lg"
          type="button"
          data-toggle="collapse"
          data-target="#collapsecreateblog"
          aria-expanded="false"
          aria-controls="collapsecreateblog">
          Create Blog
        </button>
      </div>
      <div className="blog container-fluid collapse" id='collapsecreateblog'>
        <div className="mt-4 mx-2">
          <Tabs defaultActiveKey="create" id="uncontrolled-tab-example">
            <Tab eventKey="create" title="Layout">
              <div className="container-fluid bg-light p-4 rounded my-5 mx-auto">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    placeholder="image link ( optional )"
                    value={pic}
                    onChange={(e) => setPic(e.target.value)}
                  />
                </div>
                <DashQuill text={body} setText={setBody} id={v4()} />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  className="create-btn"
                  size='lg'
                  variant="primary"
                  onClick={handleCreateBlog}
                >
                  {loading ? "Loading ..." : "Create"}
                </Button>
              </div>
            </Tab>
            <Tab eventKey="preview" title="Preview">
              <div>
                <div
                  className="pagesp singleblog-pagesp"
                  style={{
                    background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,.4))`,
                  }}
                >
                  <div className="overlayp starbg">
                    <div className="pageTitlep titleBoldp container col-11 pl-0">
                      <div className='blog-title'>
                        {title}
                      </div>
                      <p className="meta">
                        <div className='mt-5 postedBy-info'>
                          <i className="fa fa-user mr-3 ml-1"></i> by{" "}
                          {
                            branch[user?.registration_no[4]] === 'NA' || user?.year === -1 || user?.linkedin_url ===
                              "https://www.linkedin.com/in/username/" ?
                              <>
                                {user?.name}
                              </>
                              :
                              <OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={
                                  <Tooltip>
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
                          {new Date(Date.now()).toLocaleDateString()}
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
                      pic &&
                      <>
                        <hr />
                        <div className="image mx-auto" style={{ maxWidth: '30rem' }}>
                          <img src={pic} alt="img" style={{ width: '100%', height: '100%' }} className='my-3' />
                        </div>
                        <hr />
                      </>
                    }
                    <div dangerouslySetInnerHTML={{ __html: body }} className='my-5 ql-editor'></div>
                    <hr />
                  </Container>
                </Jumbotron>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
