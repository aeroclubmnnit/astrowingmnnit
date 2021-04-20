import React, { useEffect, useState } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import "../../css/Event.css";
import Loading from "../../Animations/Loading";
import m from "../../images/utils/Jigyasa_logo.png";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"

export default function Workshop() {
  useEffect(() => {
    document.title = `Jiygasa | ${REACT_APP_BASE_TITLE}`;
  }, [])

  const [workshops, SetWorkshops] = useState([]);

  useEffect(() => {
    fetch(`${REACT_APP_SERVER}/api/workshop`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => SetWorkshops(data));
  }, []);



  return (
    <>
      <Loading time={2} />
      <section className="section1 pagese ">
        <div className="overlaye starbg">
          <div className="containere ">
            <h1 className="titlee">
              <div className="pageTitlee titleBolde">
                Jigyasa
              </div>
            </h1>
            <div className="content-wrapper">
              <div className="img-wrapper">
                <div className="img imgev">
                  <img
                    src={m}
                    alt="jigyasa"
                    srcSet=""
                    style={{ alignItems: "center" }}
                  />
                </div>
              </div>
              <div className="text-wrapper" style={{ border: "2px solid white", borderRadius: "10px", padding: "10px", textAlign: "justify" }}>
                <p className="texte">
                  Jigyasa is the workshop venture of the Technical clubs of
                  MNNIT, namely Robotics, Astrowing and AeroClub, motivated by
                  the desire to supplement education with the present day
                  industry requirements, thus making the participants future
                  ready with a STEM mindset.
                </p>
                <p className="texte">
                  The workshops under Jigyasa will help the students in
                  acknowledging real-life applications of science/engineering,
                  through various projects, activities and interactive sessions.
                  Hence, by emphasizing on innovation and imagination, this
                  workshop will incite in their minds, a profound technical
                  temperament and fascination towards STEM.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      <Jumbotron
        className='mb-5'
        fluid
        style={{
          background: "white",
          width: "100%",
          margin: "auto",
          paddingBottom: "1rem",
        }}>
        <div className="sm:flex items-center max-w-screen-xl p-10 sm:p-16 md:p-24">
          <div className="sm:w-2/3 sm:mr-10">
            <div className="text">
              {/* <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">about us</span> */}
              <h2 className="font-bold text-3xl my-4 sm:text-4xl">
                <span className="text-indigo-600 font-bold cent">About the Event</span>
              </h2>
              <div className="bgBox phonev"
                style={{
                  border: "3px solid rgb(204, 67, 67)",
                  padding: "2px",
                  borderRadius: "8px",
                  margin: "2em",
                  fontSize: "14px"

                }}
              >
                <div style={{ padding: "10px" }}>
                  <p className="text-gray-700 texte" style={{ fontSize: "16px" }}><i>
                    Avishkar is MNNIT's annual techno-management festival and is held either in September or October. Equipped with many technical and managerial events, Avishkar is an excellent platform for students to hone their skills, create outstanding projects, expand their networks, and build a superb CV.</i>
                  </p>


                </div>
              </div>
            </div>
          </div>
        </div>
        <Container id="workshop" onSelect={(e) => SetWorkshops(e)}>

          <div className="d-flex justify-content-start my-3 mx-4">
            <h3 className="">Present Workshops</h3>
          </div>

          {workshops.map(singleNews => (
            <div className="card mb-5 mx-4 workshop_card shadow" data-aos="zoom-in-up"
              data-aos-duration="2000" key={singleNews.id}>
              <div className="row">
                {/* Assigning column for image */}
                <div className="col-md-4 image text-center">

                  <img className="img-fluid" src={singleNews.pic || 'https://lh3.googleusercontent.com/T9bjg12M_QXvpPvs4eYdw3VkmrgX0pGTWzFIyyzqQQ_XO_IUetQVyZBxNE80yTLYP0ft3it_S2_sMiY6p7IN7QZa156zFCVqg2qlhQR99MY0hdh83lfWCO3Ymy_nILhckIJj8LOm=w2400'} />
                </div>
                {/* Details of Workshop */}
                <div className="col-md-8">
                  <div className="card-body">
                    {/* Workshop Title */}
                    <h5 className="card-title">{singleNews.name}</h5>
                    <br />
                    {/* for date */}
                    <span className="object">Target Audience : </span>
                    <span className="value" dangerouslySetInnerHTML={{ __html: singleNews.target }}></span><br />
                    {/* <span className="object">Description :</span> */}
                    <span className="value" dangerouslySetInnerHTML={{ __html: singleNews.description }}></span>
                    <div className="value" dangerouslySetInnerHTML={{ __html: singleNews.about }}></div>
                    {/* <div className="object">
                      <em
                        style={{ fontSize: "small" }}
                      >
                        --  {new Date(
                        singleNews.date
                      ).toLocaleDateString()}
                      </em>
                    </div><br /> */}
                    {/* Link for discription of Workshop */}
                    <a href={singleNews.brochure} download>
                      <p className="card-text">Download Brochure</p>
                    </a>
                    {/* Date of posting */}
                    {/* <div className="row edits">
                      <div className="ml-auto">
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </Jumbotron>
    </>
  );
}
