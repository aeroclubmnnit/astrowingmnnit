import React, { useEffect } from "react";
import Loading from "../../Animations/Loading";
import "../../css/Alumni.css";
import f1 from "../../images/coordinators&Nontech/Amit Gupta.jpg";
import f2 from "../../images/coordinators&Nontech/Abhijeet Pandey.jpg";
import f3 from "../../images/coordinators&Nontech/Harshika Peeyoosh.jpg";
import f4 from "../../images/coordinators&Nontech/Siddharth Tiwari.jpeg";
import f5 from "../../images/coordinators&Nontech/Aditya Gupta.jpeg";
import f6 from "../../images/coordinators&Nontech/Dushyant Mittal.jpeg";
import f7 from "../../images/coordinators&Nontech/Ankur Kumar.jpg";
import f8 from "../../images/coordinators&Nontech/Nilotpal Mukherjee.jpeg";
import f9 from "../../images/coordinators&Nontech/Bhuvan Jhamb.jpg";
import f10 from "../../images/coordinators&Nontech/Ardhya_Kumar.jpg";
import f11 from "../../images/coordinators&Nontech/Apoorva Dinesh Singh.jpg";
import f12 from "../../images/coordinators&Nontech/Archit Chaudhary.jpg";
import { REACT_APP_BASE_TITLE } from "../../grobalVars"

export default function Coordinators() {
  useEffect(() => {
    document.title = `Coordinators | ${REACT_APP_BASE_TITLE}`;
  }, [])

  const members = [
    {
      "emailAddress": "amit758000@gmail.com",
      "name": "Amit Gupta",
      "year": "2nd",
      "linkedinId": "https://www.linkedin.com/in/amit-gupta-0b64991bb",
      "photo": f1,
      "areaOfInterests": "Machine Learning, Quantum Computing"
    },
    {
      "emailAddress": "p.abhijeetp94@gmail.com",
      "name": "Abhijeet Pandey",
      "year": "2nd",
      "linkedinId": "https://www.linkedin.com/in/abhijeetp94/",
      "photo": f2,
      "areaOfInterests": "Astrophysics, quantum computing, programming, cryptography"
    },
    {
      "emailAddress": "harshikapeeyoosh@gmail.com",
      "name": "Harshika Peeyoosh",
      "year": "2nd",
      "linkedinId": "https://www.linkedin.com/in/harshika-peeyoosh-5850b3190",
      "photo": f3,
      "areaOfInterests": "Cosmology, Observational astronomy and Astrophotography"
    },
    {
      "emailAddress": "siddharthtiwari958@gmail.com",
      "name": "Siddharth Tiwari",
      "year": "3rd",
      "linkedinId": "https://www.linkedin.com/in/siddharth-tiwari-12b433181/",
      "photo": f4,
      "areaOfInterests": "Theoretical Astronomy, Galactic and extragalactic objects, Classical physics"
    },
    {
      "emailAddress": "aditya.20192074@mnnit.ac.in",
      "name": "Aditya Gupta",
      "year": "2nd",
      "linkedinId": "https://www.linkedin.com/in/aditya-gupta-916304199",
      "photo": f5,
      "areaOfInterests": "Astrophotography, Cosmology, astrophysics"
    },
    {
      "emailAddress": "dushyant.20186048@mnnit.ac.in",
      "name": "Dushyant Mittal",
      "year": "3rd",
      "linkedinId": "https://www.linkedin.com/in/dushyant-mittal-2b794a166/",
      "photo": f6,
      "areaOfInterests": "Stellar Astronomy"
    },
    {
      "emailAddress": "ankur.20191080@mnnit.ac.in",
      "name": "Ankur Kumar",
      "year": "2nd",
      "linkedinId": "https://www.linkedin.com/in/ankur-kumar-3565721a2/",
      "photo": f7,
      "areaOfInterests": "Astronomy, Cosmoslogy, Astrophysics"
    },
    {
      "emailAddress": "nilotpalmukherjee.909@gmail.com",
      "name": "NILOTPAL MUKHERJEE",
      "year": "3rd",
      "linkedinId": "https://www.linkedin.com/in/nilotpal-mukherjee-579249196",
      "photo": f8,
      "areaOfInterests": "Physics"
    },
    {
      "emailAddress": "bhuvanjhamb29@gmail.com",
      "name": "Bhuvan Jhamb",
      "year": "Final",
      "linkedinId": "www.linkedin.com/in/bhuvanjhamb",
      "photo": f9,
      "areaOfInterests": "Theoretical Physics, Computational Physics, Observational Astronomy."
    },
    {
      "emailAddress": "apoorva011199@gmail.com",
      "name": "Apoorva Dinesh Singh ",
      "year": "Final",
      "linkedinId": "https://www.linkedin.com/in/apoorva-singh-0111",
      "photo": f11,
      "areaOfInterests": "ML, CV"
    },
    {
      "emailAddress": "ardhyakumar55@gmail.com",
      "name": "Ardhya Kumar",
      "year": "Final",
      "linkedinId": "https://www.linkedin.com/in/ardhya/",
      "photo": f10,
      "areaOfInterests": "Observational Astronomy, Astrophysics"
    },
    {
      "emailAddress": "chaudharyarchit2000@gmail.com",
      "name": "ARCHIT CHAUDHARY",
      "year": "Final",
      "linkedinId": "https://www.linkedin.com/in/archit-chaudhary-010a78164/",
      "photo": f12,
      "areaOfInterests": "theoretical physics"
    },
  ];

  return (
    <>
      <Loading time={2} />
      <h3 className="my-3 titleBold d-flex justify-content-center topic">
        <p className="" style={{ marginBottom: "0px", textAlign: "center" }}>COORDINATORS</p>
      </h3>
      <div
        className="miniSep"
        style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
      ></div>

      <div className="pageTitle my-5 titleBold header white-heading padtop">
        Core Coordinators
      </div>
      <div className="fluid-container alumni-container">
        <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
          {members.map(
            (member, i) =>
              member.year === "Final" && (
                <div className="card card-item shadow" style={{ width: "17rem", minHeight: '35rem', maxHeight: '35rem' }} key={i}>
                  <img
                    className="card-img-top card-alumni"
                    src={`${member.photo}`}
                    alt="Card image cap"
                  />
                  <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
                    <h5 className="card-title text-center text-uppercase" style={{ minHeight: "3rem" }}
                    >
                      {member.name}
                    </h5>
                    <p
                      id='style-2'
                      className="card-text text-center scroller"
                      style={{ minHeight: "5rem" }}
                    >
                      <strong>Area of Interest</strong> :{" "}
                      {member.areaOfInterests}
                    </p>
                    <div className="d-flex justify-content-center">
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
        Senior Coordinators
      </div>
      <div className="fluid-container alumni-container">
        <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
          {members.map(
            (member, i) =>
              member.year === "3rd" && (
                <div class="card card-item shadow" style={{ width: "17rem", minHeight: '35rem', maxHeight: '35rem' }} key={i}>
                  <img
                    className="card-img-top card-alumni"
                    src={`${member.photo}`}
                    alt="Card image cap"
                  />
                  <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
                    <h5 className="card-title text-center text-uppercase" style={{ minHeight: "3rem" }}
                    >
                      {member.name}
                    </h5>
                    <p
                      className="card-text text-center"
                      style={{ minHeight: "5rem" }}
                    >
                      <strong>Area of Interest</strong> :{" "}
                      {member.areaOfInterests}
                    </p>
                    <div className="d-flex justify-content-center">
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
        Junior Coordinators
      </div>
      <div className="fluid-container alumni-container">
        <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
          {members.map(
            (member, i) =>
              member.year === "2nd" && (
                <div className="card card-item shadow" style={{ width: "17rem", minHeight: '35rem', maxHeight: '35rem' }} key={i}>
                  <img
                    className="card-img-top card-alumni"
                    src={`${member.photo}`}
                    alt="Card image cap"
                  />
                  <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
                    <h5 className="card-title text-center text-uppercase" style={{ minHeight: "3rem" }}
                    >
                      {member.name}
                    </h5>
                    <p
                      className="card-text text-center"
                      style={{ minHeight: "5rem" }}
                    >
                      <strong>Area of Interest</strong> :{" "}
                      {member.areaOfInterests}
                    </p>
                    <div className="d-flex justify-content-center">
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
