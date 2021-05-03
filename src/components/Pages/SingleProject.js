import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../../css/SingleProject.css";
import Loading from "../../Animations/Loading";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars";
import $ from 'jquery'

function SingleProject() {
  const { projectId } = useParams();
  const [project, setProject] = useState(undefined);
  const history = useHistory();

  useEffect(() => {

    $(document).ready(function () {
      $('#collapsebtn').on('click', function () {
        var text = $('#collapsebtn').text();
        if (text === "Read More") {
          $(this).html('Read less');
        } else {
          $(this).text('Read More');
        }
      });
    });

    fetch(`${REACT_APP_SERVER}/api/projects/${projectId}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) history.push("/404");
        else {
          document.title = `${data.title} | ${REACT_APP_BASE_TITLE}`;
          setProject(data);
        }
      });
  }, []);

  return (
    <>
      <Loading time={2} />
      <div className="my-5">
        <div className="mb-4">
          <h4 className='my-3' style={{ marginBottom: "0px", textAlign: "center" }}>{project?.title}</h4>
          <div
            className="miniSep"
            style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
          ></div>
        </div>
        <div className="container">
          <div>
            <h3 className='my-3 subheaders'>Aim</h3>
            <p className="px-5">{project?.objective}</p>
          </div>
          <div>
            <h3 className='my-3 subheaders'>Components and Technologies Used</h3>
            <div className="d-flex px-5 flex-wrap">
              {project?.compTech?.map((x) => (
                <div
                  className="d-inline px-3 py-2 m-1"
                  style={{
                    border: "2px solid #dec3c3",
                    borderRadius: "100px",
                    background: "#fff7f7",
                  }}
                >
                  {x}
                </div>
              ))}
            </div>
          </div>
          <div className='my-5'>
            <h3 className='mb-4 subheaders'>Overview</h3>
            <p
              className="px-5 ql-editor"
              dangerouslySetInnerHTML={{ __html: project?.overview }}
            ></p>
          </div>
          <div>
            <div>
              <h3 className='my-3 subheaders'>Project By: </h3>
              <ul className="px-5">
                {project?.members?.map((member) =>
                  member.accepted ? (
                    <li>
                      {member.user.linkedin_url ? (
                        <a href={member.user.linkedin_url}>{member.user.name}</a>
                      ) : (
                        <span>{member.user.name}</span>
                      )}
                    </li>
                  ) : (
                    <></>
                  )
                )}
              </ul>
            </div>
          </div>
          {project?.ytID ? (
            <div className='d-block iframe-container'>
              <iframe
                width="889px"
                height="500"
                src={`https://www.youtube.com/embed/${project?.ytID}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className='mx-auto d-block responsive-iframe'
              />
            </div>
          ) : (
            <></>
          )}

          <div>
            <div className="d-flex justify-content-center mt-5">
              {project?.description ? (
                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapse11" aria-expanded="false" aria-controls="collapse11" id='collapsebtn'>
                  Read More
                </button>
              ) : (
                <></>
              )}
            </div>
            <div class="collapse collapsews" id="collapse11">
              <div >
                <h3 className='my-3 subheaders'>Description</h3>
                <p
                  className="px-3 ql-editor container"
                  dangerouslySetInnerHTML={{ __html: project?.description }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProject;
