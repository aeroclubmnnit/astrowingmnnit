import React, { useEffect, useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { REACT_APP_SERVER } from "../../../../grobalVars";

export default function DashInvites() {
  const [invites, setInvites] = useState([]);
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
      .then((data) => setInvites(data));
  }, []);

  return (
    <div>
      <div className="container" style={{ minHeight: "60vh" }}>
        <Accordion>
          {invites?.projects?.map((project, index) => {
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
                          {project?.members?.map((member) => {
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
                                      inviteType="project"
                                      index={index}
                                      setInvites={setInvites}
                                      invites={invites}
                                    />
                                    <LoadingButton
                                      projectId={project._id}
                                      type="reject"
                                      inviteType="project"
                                      index={index}
                                      setInvites={setInvites}
                                      invites={invites}
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

          {invites?.photos?.map((project, index) => {
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
                          {project?.members?.map((member) => {
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
                                      inviteType="photo"
                                      index={index}
                                      setInvites={setInvites}
                                      invites={invites}
                                    />
                                    <LoadingButton
                                      projectId={project._id}
                                      type="reject"
                                      inviteType="photo"
                                      index={index}
                                      setInvites={setInvites}
                                      invites={invites}
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

          {invites?.projects?.length === 0 && invites?.photos?.length === 0 ? (
            <p className="text-center">No invites available ...!</p>
          ) : (
            <></>
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
  const { invites, setInvites, index } = props;
  useEffect(() => {
    if (isLoading) {
      fetch(
        `${REACT_APP_SERVER}/api/my/invites/${type}/${props.inviteType}/${props.projectId}`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
          setDone(true);
          if (type === "accept") {
            if (props.inviteType === "project") {
              dispatch({
                type: "ACCEPT_INVITE_PROJECT",
                payload: data.project,
              });
              props.setInvites({
                photos: invites.photos,
                photos: [
                  ...invites.projects.slice(0, index),
                  ...invites.projects.slice(index + 1),
                ],
              });
            } else if (props.inviteType === "photo") {
              dispatch({ type: "ACCEPT_INVITE_PHOTO", payload: data.photo });
              props.setInvites({
                projects: invites.projects,
                photos: [
                  ...invites.photos.slice(0, index),
                  ...invites.photos.slice(index + 1),
                ],
              });
              console.log({
                projects: invites.projects,
                photos: [
                  ...invites.photos.slice(0, index),
                  ...invites.photos.slice(index + 1),
                ],
              });
            }
          } else {
            if (props.inviteType === "project") {
              props.setInvites({
                photos: invites.photos,
                photos: [
                  ...invites.projects.slice(0, index),
                  ...invites.projects.slice(index + 1),
                ],
              });
            } else if (props.inviteType === "photo") {
              props.setInvites({
                projects: invites.projects,
                photos: [
                  ...invites.photos.slice(0, index),
                  ...invites.photos.slice(index + 1),
                ],
              });
            }
          }
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
