import React, { useEffect } from "react";
import Loading from "../../Animations/Loading";
import "../../css/Alumni.css";
import f1 from "../../images/alumni/SHREY Dixit.jpg";
import f2 from "../../images/alumni/Soumya Khanna.jpeg";
import f3 from "../../images/alumni/Aman Sharma(1).jpg";
import f4 from "../../images/alumni/Kishan Tiwari.jfif";
import f5 from "../../images/alumni/VivekKumar.jfif";
import { REACT_APP_BASE_TITLE } from "../../grobalVars"

export default function Alumni() {
  useEffect(() => {
    document.title = `Alumni | ${REACT_APP_BASE_TITLE}`;
  }, [])

  const members = [
    {
      name: "Shrey Dixit",
      yearOfGraduation: 2020,
      yourLinkedinId: "linkedin.com/in/shrey-dixit",
      yourContactInformationEmail: "shreydixit99@gmail.com ",
      aPhotoForWebsiteOfYourself: f1,
    },
    {
      emailAddress: "soumyakhanna17997@gmail.com",
      name: "Soumya Khanna",
      yearOfGraduation: 2020,
      presentOrganisation: "Bajaj Auto Limited",
      presentLocation: "Akurdi, Pune",
      yourLinkedinId: "https://www.linkedin.com/in/soumya-khanna-20169040",
      yourContactInformationEmail: "soumyakhanna17997@gmail.com",
      aPhotoForWebsiteOfYourself: f2,
    },
    {
      emailAddress: "sharmaaman0571@gmail.com",
      name: "Aman sharma",
      yearOfGraduation: 2020,
      presentOrganisation: "Hero motocorp",
      presentLocation: "Gurgaon",
      yourContactInformationEmail: "sharmaaman0571@gmail.com",
      yourLinkedinId: "https://www.linkedin.com/in/aman-sharma-910598149",
      aPhotoForWebsiteOfYourself: f3,
    },
    {
      emailAddress: "Kishan@tsaw.tech",
      name: "Kishan Tiwari",
      yearOfGraduation: 2019,
      presentOrganisation: "TSAW Drones",
      presentLocation: "Gurgaon",
      yourLinkedinId: "https://www.linkedin.com/in/kishan-tiwari-poseidon/",
      yourContactInformationEmail: "kishan@tsaw.tech",
      aPhotoForWebsiteOfYourself: f4,
    },
    {
      emailAddress: "Kishan@tsaw.tech",
      name: "Vivek Kumar",
      yearOfGraduation: 2020,
      presentOrganisation: "Graduated Mechanical Engineer, MNNIT Allahabad",
      presentLocation: "Gurgaon",
      yourLinkedinId: "https://www.linkedin.com/in/vivek-kumar-baa735151/",
      aPhotoForWebsiteOfYourself: f5,
    },
  ];

  return (
    <>
      <Loading time={2} />
      <h3 className="my-3 titleBold d-flex justify-content-center topic">
        <p className="" style={{ marginBottom: "0px", textAlign: "center" }}>OUR ALUMNI</p>
      </h3>
      <div
        className="miniSep"
        style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
      ></div>
      <div className="container alumni-container my-5 col-11" style={{ minHeight: '24rem' }}>
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div className="panel panel-default bgrt">
            <div className="panel-heading bgrt">
              <h4 className="panel-title">
                <a
                  className="accordion-toggle"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse2020"
                  aria-expanded="true" aria-controls='collapse2020'
                >
                  Batch 2020
                </a>
              </h4>
            </div>
            <div id="collapse2020" className="panel-collapse collapse show">
              <div className="panel-body">
                <div className="fluid-container">
                  <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
                    {members.map(
                      (member, i) =>
                        member.yearOfGraduation === 2020 && (
                          <div
                            className="card card-item-1 shadow item-alumni"
                            style={{ width: "17rem", minHeight: '33rem', maxHeight: '33rem' }}
                            key={i}
                          >
                            <img
                              className="card-img-top card-alumni"
                              src={`${member.aPhotoForWebsiteOfYourself}`}
                              alt="Card image cap"
                            />
                            <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
                              <h5
                                className="card-title text-center text-uppercase"
                                style={{ minHeight: "3rem" }}
                              >
                                {member.name}
                              </h5>
                              <p
                                className="card-text text-center"
                                style={{ minHeight: "2rem" }}
                              >
                                {member.presentOrganisation
                                  ? member.presentOrganisation
                                  : "Graduated Mechanical Engineer, MNNIT Allahabad"}
                              </p>

                              <div className="d-flex justify-content-center mt-4">
                                <a href={member.yourLinkedinId} target="_blank">
                                  <i className="fab fa-linkedin fa-3x mx-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default bgrt">
            <div className="panel-heading bgrt">
              <h4 className="panel-title">
                <a
                  className="accordion-toggle"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse2019"
                  aria-expanded="false" aria-controls='collapse2019'
                >
                  Batch 2019
                </a>
              </h4>
            </div>
            <div id="collapse2019" className="panel-collapse collapse">
              <div className="panel-body">
                <div
                  className="fluid-container"

                >
                  <div className="d-flex flex-wrap m-auto justify-content-center align-items-center">
                    {members.map(
                      (member, i) =>
                        member.yearOfGraduation === 2019 && (
                          <div
                            className="card card-item-1 shadow item-alumni"
                            style={{ width: "17rem", minHeight: '33rem', maxHeight: '33rem' }}
                            key={i}
                          >
                            <img
                              className="card-img-top card-alumni"
                              src={`${member.aPhotoForWebsiteOfYourself}`}
                              alt="Card image cap"
                            />
                            <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
                              <h5
                                className="card-title text-center text-uppercase"
                                style={{ minHeight: "3rem" }}
                              >
                                {member.name}
                              </h5>
                              <p
                                className="card-text text-center"
                                style={{ minHeight: "2rem" }}
                              >
                                {member.presentOrganisation
                                  ? member.presentOrganisation
                                  : "Graduated Mechanical Engineer, MNNIT Allahabad"}
                              </p>

                              <div className="d-flex justify-content-center mt-4">
                                <a href={member.yourLinkedinId} target="_blank">
                                  <i className="fab fa-linkedin fa-3x mx-2"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <br />
      <br />

    </>
  );
}
