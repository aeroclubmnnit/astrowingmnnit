import React, { useEffect, useState } from "react";
import { Accordion, Card, Button, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import ProjForm from "./ProjForm";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { REACT_APP_SERVER } from "../../../../grobalVars";
import ProjEdit from "./ProjEdit";
import ProjPreview from "./ProjPreview";

export default function Dashprojects() {
  const [modalShow, setModalShow] = React.useState(false);
  const user = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    fetch(`${REACT_APP_SERVER}/api/isSignedIn`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          localStorage.removeItem("jwtToken");
          toast.warn(data.error);
          history.push("/user/login");
        }
      });
  }, []);

  return (
    <div>
      <div className="container" style={{ minHeight: "60vh" }}>
        <Accordion className='mt-2 mb-5'>
          {user?.projects?.map((project) => {
            let badge;
            const leaders = project?.members?.map((m) => {
              if (m.leader) return m.user._id;
            });
            let isCurLeader = leaders?.includes(user.id);
            if (project.status === "Ongoing")
              badge = (
                <span class="badge badge-pill badge-warning">
                  {project.status}
                </span>
              );
            else if (project.status === "Completed")
              badge = (
                <span class="badge badge-pill badge-success">
                  {project.status}
                </span>
              );
            return (
              <Card key={project._id}>
                <Card.Header style={{ cursor: "pointer" }}>
                  <Accordion.Toggle as={Card.Header} eventKey={project._id}>
                    <div>
                      {project.title}
                      <em className="float-right">{badge}</em>
                    </div>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={project._id}>
                  <Card.Body className='border'>
                    <div className="p-3">
                      <div>
                        <div>Members</div>
                        {isCurLeader ? (
                          <Button
                            onClick={() => {
                              setModalShow(true);
                            }}
                          >
                            Invite
                          </Button>
                        ) : (
                          <span></span>
                        )}

                        <ul>
                          {project?.members?.map((member, i) => {
                            let badge;
                            if (member.accepted && member.leader) {
                              badge = <span>👑</span>;
                            } else if (member.accepted) {
                              badge = (
                                <span class="badge badge-pill badge-success">
                                  Member
                                </span>
                              );
                            } else {
                              badge = (
                                <span class="badge badge-pill badge-warning">
                                  Invited
                                </span>
                              );
                            }
                            return (
                              <li key={i}>
                                {member.user?.name}
                                <div className="float-right">{badge}</div>
                              </li>
                            );
                          })}
                        </ul>
                        {isCurLeader && project.status === "Ongoing" && (
                          <ProjEdit project={project} />
                        )}
                        <ProjPreview project={project} />
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  projectId={project._id}
                />
              </Card>
            );
          })}
          {
            user?.projects.length === 0 && <h3 className="text-center mt-5">No Project created...!</h3>
          }
        </Accordion>
        <ProjForm />
      </div>
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const projectId = props.projectId;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter email to invite.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            fetch(`${REACT_APP_SERVER}/api/projects/invite`, {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
              },
              body: JSON.stringify({
                email: email,
                projectId: projectId,
              }),
            }).then((res) => {
              props.onHide();
              if (res.status == 200) {
                toast.success("USER INVITED");
                res.json().then((data) => {
                  dispatch({
                    type: "INVITE_USER",
                    payload: data.updatedProject,
                  });
                });
              } else {
                res.json().then((data) => {
                  toast.error(data.error);
                });
              }
            });
          }}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
