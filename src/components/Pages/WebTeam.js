import React, { useEffect } from 'react'
import Loading from '../../Animations/Loading';
import f1 from "../../images/coordinators&Nontech/Abhinav Anand.jpeg";
import f2 from "../../images/coordinators&Nontech/Ishan Gupta.jpeg";
import f3 from "../../images/coordinators&Nontech/Parnab Ghosh.jpeg";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"

export default function WebTeam() {
    useEffect(() => {
        document.title = `Webteam | ${REACT_APP_BASE_TITLE}`
    }, [])


    const members = [
        {
            name: "Abhinav Anand",
            year: "2nd",
            branch: "Information Technology",
            photo: f1,
            linkedinId: "https://www.linkedin.com/in/abhinav-anand-33b7a3204/",
        },
        {
            name: "Ishan Gupta",
            year: "2nd",
            branch: "Computer Science and Engg.",
            photo: f2,
            linkedinId: "https://www.linkedin.com/in/ishan-gupta100/",
        },
        {
            name: "Parnab Ghosh",
            year: "2nd",
            branch: "Electronics and Comm. Engg.",
            photo: f3,
            linkedinId: "https://www.linkedin.com/in/parnab-ghosh-57326118b/",
        },
    ]


    return (
        <>
            <Loading time={2} />
            <h3 className="my-3 titleBold d-flex justify-content-center topic">
                <p className="" style={{ marginBottom: "0px", textAlign: "center" }}>WEB TEAM</p>
            </h3>
            <div
                className="miniSep"
                style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
            ></div>

            <div className="container alumni-container">
                <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
                    {members.map(
                        (member, i) =>
                            <div
                                className="card card-item shadow"
                                style={{ width: "17rem", minHeight: "29rem", height: "35rem" }}
                                key={i}
                            >
                                <img
                                    className="card-img-top card-alumni"
                                    src={`${member.photo}`}
                                    alt="Card image cap"
                                />
                                <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
                                    <h5 className="card-title text-center text-uppercase">
                                        {member.name}
                                    </h5>
                                    <p className="text-center">
                                        {member.branch}

                                    </p>
                                    <p className="card-text text-center">{member.year} year</p>
                                    <div className="d-flex justify-content-center mt-4">
                                        <a href={member.linkedinId} target="_blank">
                                            <i className="fab fa-linkedin fa-3x mx-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                    )}
                </div>
            </div>
        </>
    )
}
