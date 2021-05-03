import React, { useEffect } from "react";
import Loading from "../../Animations/Loading";
import "../../css/Alumni.css";
import f1 from "../../images/coordinators&Nontech/Nilotpal Mukherjee.jpeg";
import f2 from "../../images/coordinators&Nontech/Purushotam Kumar Agrawal.jpg";
import f3 from "../../images/coordinators&Nontech/Aditya Gupta.jpeg";
import f4 from "../../images/coordinators&Nontech/Rishank B.jpeg";
import f5 from "../../images/coordinators&Nontech/Rahul Verma.jpg";
import f6 from "../../images/coordinators&Nontech/Saptarshi Roy Chowdhury.jpg";
import f7 from "../../images/coordinators&Nontech/Apanshula Shourie.jpeg";
import f8 from "../../images/coordinators&Nontech/Maaz.jpg";
import f9 from "../../images/coordinators&Nontech/Abhas Raj.jpg";
import f10 from "../../images/coordinators&Nontech/Prakhar jain.jpg";
import f11 from "../../images/coordinators&Nontech/Prasanna Sneha.jpg";
import f12 from "../../images/coordinators&Nontech/Devansh Sethi.jpg";
import f13 from "../../images/coordinators&Nontech/Hamza Siddiqui.jpg";
import f14 from "../../images/coordinators&Nontech/Harsh Kumar Singh.jpg";
import f15 from "../../images/coordinators&Nontech/Ankur Kumar.jpg";
import { REACT_APP_BASE_TITLE } from "../../grobalVars"

export default function Nontech() {
  useEffect(() => {
    document.title = `Non-Tech | ${REACT_APP_BASE_TITLE}`;
  }, [])

  const members = [
    {
      emailAddress: "nilotpalmukherjee.909@gmail.com",
      name: "NILOTPAL MUKHERJEE",
      year: "3rd",
      team: "Design",
      linkedinId: "https://www.linkedin.com/in/nilotpal-mukherjee-579249196",
      profilePicture: f1,
      branch: 'Mechanical Engineering'
    },
    {
      emailAddress: "Agrawalpurushotam@gmail.com",
      name: "Purushotam Kumar Agrawal",
      year: "2nd",
      team: "Outreach",
      ifWebThenRoboOrAero: "Robo",
      linkedinId: "https://www.linkedin.com/in/puru2411",
      profilePicture: f2,
      branch: 'Electrical Engineering'
    },
    {
      emailAddress: "aditya.20192074@mnnit.ac.in",
      name: "Aditya Gupta",
      year: "2nd",
      team: "Design",
      linkedinId: "https://www.linkedin.com/in/aditya-gupta-916304199",
      profilePicture: f3,
      branch: 'Electrical Engineering'
    },
    {
      emailAddress: "rishankb575@gmail.com",
      name: "Rishank Barua",
      year: "2nd",
      team: "Content",
      linkedinId: "https://www.linkedin.com/in/rishank-barua-3413821b9/",
      profilePicture: f4,
      branch: 'Information Technology'
    },
    {
      emailAddress: "rahulvermadbm@gmail.com",
      name: "Rahul Verma",
      year: "2nd",
      team: "Outreach",
      ifWebThenRoboOrAero: "Robo",
      linkedinId: "https://www.linkedin.com/in/rahul-verma-0406021b3",
      profilePicture: f5,
      branch: 'Electonics and Comm. Engg.'
    },
    {
      emailAddress: "saptarshroyc@gmail.com",
      name: "Saptarshi Roy Chowdhury",
      year: "3rd",
      team: "Content",
      linkedinId: "https://www.linkedin.com/in/saptarshi-roy-c-5bb29b92",
      profilePicture: f6,
      branch: 'Electonics and Comm. Engg.'
    },
    {
      emailAddress: "saptarshroyc@gmail.com",
      name: "Saptarshi Roy Chowdhury",
      year: "3rd",
      team: "Outreach",
      linkedinId: "https://www.linkedin.com/in/saptarshi-roy-c-5bb29b92",
      profilePicture: f6,
      branch: 'Electonics and Comm. Engg.'
    },
    {
      emailAddress: "apanshula.20193143@mnnit.ac.in",
      name: "Apanshula Shourie",
      year: "2nd",
      team: "Design",
      linkedinId: "Apanshula Shourie",
      profilePicture: f7,
      branch: 'Mechanical Engineering'
    },
    {
      emailAddress: "maazshuaib18@gmail.com",
      name: "Maaz",
      year: "2nd",
      team: "Content",
      linkedinId: "https://www.linkedin.com/in/maaz-shuaib-baa715206",
      profilePicture: f8,
      branch: 'Civil Engineering'
    },
    {
      emailAddress: "maazshuaib18@gmail.com",
      name: "Maaz",
      year: "2nd",
      team: "Design",
      linkedinId: "https://www.linkedin.com/in/maaz-shuaib-baa715206",
      profilePicture: f8,
      branch: 'Civil Engineering'
    },
    {
      emailAddress: "abhasraj177@gmail.com",
      name: "Abhas Raj",
      year: "3rd",
      team: "Design",
      linkedinId: "https://www.linkedin.com/in/abhas-raj-333360179",
      profilePicture: f9,
      branch: 'Mechanical Engineering'
    },
    {
      emailAddress: "prakhar21102001@gmail.com",
      name: "Prakhar jain",
      year: "2nd",
      team: "Outreach",
      profilePicture: f10,
      branch: 'Mechanical Engineering'
    },
    {
      emailAddress: "prasannasneha1322@gmail.com",
      name: "Prasanna Sneha",
      year: "2nd",
      team: "Content",
      ifWebThenRoboOrAero: "Aero",
      linkedinId: "https://www.linkedin.com/in/prasanna-sneha-2211200013",
      profilePicture: f11,
      branch: 'Mechanical Engineering'
    },
    {
      emailAddress: "devanshsethi77@gmail.com",
      name: "Devansh Sethi",
      year: "2nd",
      team: "Content",
      linkedinId: "https://www.linkedin.com/in/devansh-sethi-2a97721b3",
      profilePicture: f12,
      branch: 'Electonics and Comm. Engg.'
    },
    {
      emailAddress: "hamzasiddqui999@gmail.com",
      name: "Hamza Siddiqui",
      year: "Final",
      team: "Design",
      profilePicture: f13,
      branch: 'Electonics and Comm. Engg.'
    },
    {
      emailAddress: "harshkumarsingh325@gmail.com",
      name: "Harsh Kumar Singh",
      year: "2nd",
      team: "Outreach",
      profilePicture: f14,
      branch: 'Electonics and Comm. Engg.',
      linkedinId: "harshkumarsingh325@gmail.com",
      branch: 'Electrical Engineering'
    },
    {
      emailAddress: "ankur.20191080@mnnit.ac.in",
      name: "Ankur Kumar",
      year: "2nd",
      team: "Design",
      branch: 'Civil Engineering',
      profilePicture: f15,
      linkedinId: "https://www.linkedin.com/in/ankur-kumar-3565721a2/",
    },
  ];

  return (
    <>
      <Loading time={2} />
      <h3 className="my-3 titleBold d-flex justify-content-center topic">
        <p className="" style={{ marginBottom: "0px", textAlign: "center" }}>NON-TECH MEMBERS</p>
      </h3>
      <div
        className="miniSep"
        style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
      ></div>

      <div className="pageTitle my-5 titleBold header white-heading padtop">
        Content Team
      </div>
      <div className="fluid-container alumni-container">
        <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
          {members.map(
            (member, i) =>
              member.team === "Content" && (
                <div
                  className="card card-item shadow"
                  style={{ width: "17rem", minHeight: '35rem', maxHeight: '35rem' }}
                  key={i}
                >
                  <img
                    className="card-img-top card-alumni"
                    src={`${member.profilePicture}`}
                    alt="Card image cap"
                  />
                  <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
                    <h5 className="card-title text-center text-uppercase" style={{ minHeight: "3rem" }}>
                      {member.name}
                    </h5>
                    <p className="card-text text-center" style={{ minHeight: "3rem" }}>{member.year} year <br /> {member.branch}</p>
                    <div className="d-flex justify-content-center mt-4">
                      <a href={member.linkedinId} target="_blank">
                        <i className="fab fa-linkedin fa-3x mx-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <div className="pageTitle my-5 titleBold header white-heading padtop">
        Design Team
      </div>
      <div className="fluid-container alumni-container">
        <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
          {members.map(
            (member, i) =>
              member.team === "Design" && (
                <div
                  className="card card-item shadow"
                  style={{ width: "17rem", minHeight: '35rem', maxHeight: '35rem' }}
                  key={i}
                >
                  <img
                    className="card-img-top card-alumni"
                    src={`${member.profilePicture}`}
                    alt="Card image cap"
                  />
                  <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
                    <h5 className="card-title text-center text-uppercase" style={{ minHeight: "3rem" }}>
                      {member.name}
                    </h5>
                    <p className="card-text text-center" style={{ minHeight: "3rem" }}>{member.year} year <br /> {member.branch}</p>
                    <div className="d-flex justify-content-center mt-4">
                      <a href={member.linkedinId} target="_blank">
                        <i className="fab fa-linkedin fa-3x mx-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <div className="pageTitle my-5 titleBold header white-heading padtop">
        Outreach Team
      </div>
      <div className="fluid-container alumni-container">
        <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
          {members.map(
            (member, i) =>
              member.team === "Outreach" && (
                <div
                  className="card card-item shadow"
                  style={{ width: "17rem", minHeight: '35rem', maxHeight: '35rem' }}
                  key={i}
                >
                  <img
                    className="card-img-top card-alumni"
                    src={`${member.profilePicture}`}
                    alt="Card image cap"
                  />
                  <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
                    <h5 className="card-title text-center text-uppercase" style={{ minHeight: "3rem" }}>
                      {member.name}
                    </h5>
                    <p className="card-text text-center" style={{ minHeight: "3rem" }}>{member.year} year <br /> {member.branch}</p>
                    <div className="d-flex justify-content-center mt-4">
                      <a href={member.linkedinId} target="_blank">
                        <i className="fab fa-linkedin fa-3x mx-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}
