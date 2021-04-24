import React, { useEffect, useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../../../grobalVars";

export default function Dashprojects(props) {
  const [projects, setProjects] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    fetch(`${REACT_APP_SERVER}/api/my/invites`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <div className="container" style={{ minHeight: "60vh" }}>
        <Accordion>
          {projects?.map((project) => {
            let badge;
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
              <Card key={project.id}>
                <Card.Header style={{ cursor: "pointer" }}>
                  <Accordion.Toggle as={Card.Header} eventKey={project._id}>
                    <div>
                      {project.title}
                      <em className="float-right">{badge}</em>
                    </div>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={project._id}>
                  <Card.Body>
                    <div className="p-3">
                      <div>
                        <div>Members</div>
                        <ul>
                          {project.members.map((member) => {
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
                              if (member.user._id == user?.id) {
                                badge = (
                                  <span>
                                    <LoadingButton
                                      projectId={project._id}
                                      type="accept"
                                    />
                                    <LoadingButton
                                      projectId={project._id}
                                      type="reject"
                                    />
                                  </span>
                                );
                              } else
                                badge = (
                                  <span class="badge badge-pill badge-warning">
                                    Invited
                                  </span>
                                );
                            }
                            return (
                              <li>
                                {member?.user?.name}
                                <em className="float-right">{badge}</em>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}

          {projects.length === 0 && (
            <p className="text-center">No invites available ...!</p>
          )}
        </Accordion>
      </div>
    </div>
  );
}

function LoadingButton(props) {
  const type = props.type;
  const [isLoading, setLoading] = useState(false);
  const [isdone, setDone] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoading) {
      fetch(`${REACT_APP_SERVER}/api/my/invites/${type}/${props.projectId}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
          setDone(true);
          if (type === "accept")
            dispatch({ type: "ACCEPT_INVITE", payload: data.project });
        });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isdone}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Loading…" : isdone ? type + "ed" : type}
    </Button>
  );
}
