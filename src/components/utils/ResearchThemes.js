import React from "react";
import "../../css/ResearchThemes.css";

const ResearchThemes = () => {
  return (
    <div className="container-fluid starbg" id="restheme">
      <div
        className="pageTitle titleBold headingc white-headingc"
        data-aos="fade-down"
        style={{ marginBottom: "-25px", color: "white" }}
      >
        Research Themes
      </div>
      <div
        className="jumbotron"
        style={{ marginBottom: "0", background: "rgba(0, 0, 0, 0)" }}
      >
        <div
          className="miniSep"
          style={{ marginBottom: "40px", background: "rgb(3, 150, 244)" }}
        ></div>
        <div className="row justify-content-center">
          <div
            className="col-sm-11"
            data-aos="fade-up"
            data-aos-duration="2000"
            style={{ padding: "0 4rem 0 4rem" }}
          >
            {/* <div
              className="card text-center"
              style={{ marginBottom: "1.5rem", width: "auto" }}
            >
              <div
                className="card-header"
                style={{
                  fontSize: "1.5rem",
                  background: "rgb(56, 55, 55)",
                  color: "white",
                  border: "3px solid white",
                }}
              >
                Our Domains
              </div>
              <div className="card-body">
                
                <p className="card-text">
                  <p>Fixed Wing Aircraft </p>
                  <p>Multirotors</p>
                  <p>Space Vehicles </p>
                  <a href="#" className="btn btn-dark">
                    Astronomy
                  </a>
                </p>
              </div>
              
            </div> */}
          </div>
        </div>
        <div className="i-am-centered">
          <div className="row justify-content-center">
            {/* <div className="col-sm-10" data-aos="fade-up">
              <div
                className="card text-center"
                style={{ marginBottom: "0.5rem", width: "auto" }}
              >
                <div
                  className="card-header"
                  style={{
                    fontSize: "1.5rem",
                    background: "rgb(29, 29, 29)",
                    color: "white",
                    // border: "3px solid white",
                  }}
                >
                  Technologies
                </div>
              </div>
            </div> */}
            {/* <div className="row"> */}
            <div
              className="col-sm-4"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div
                className="card cardhgt phoneheight"
                style={{ marginBottom: "1rem", borderRadius: "10px" }}
              >
                <div
                  className="card-body cardbd"
                  style={{ borderRadius: "10px", margin: "2px" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    <i
                      className="fas fa-calculator"
                      style={{ paddingRight: "20px" }}
                    ></i>
                    Computational Skills
                    <hr style={{ background: "white" }}></hr>
                  </h5>
                  {/* <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div> */}
                  <p className="card-text" style={{ color: "white" }}>
                    <ul className="lststyle" style={{ margin: "5px" }}>
                      <li>Orbit Simulation </li>
                      {/* <br /> */}
                      <li>Eclipse prediction</li>
                      {/* <br /> */}
                      <li>3-body problem</li>
                      {/* <br /> */}
                      <li>Image stacking</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-4"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div
                className="card cardhgt phoneheight"
                style={{ marginBottom: "1rem", borderRadius: "10px" }}
              >
                <div
                  className="card-body cardbd"
                  style={{ borderRadius: "10px", margin: "2px" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    <i
                      className="fas fa-laptop-code"
                      style={{ paddingRight: "20px" }}
                    ></i>
                    Data Analysis
                    <hr style={{ background: "white" }}></hr>
                  </h5>
                  {/* <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div> */}
                  <p className="card-text" style={{ color: "white" }}>
                    <ul className="lststyle" style={{ margin: "5px" }}>
                      <li>Crater data analysis</li>
                      {/* <br /> */}
                      <li>ML-based applications</li>
                      {/* <br /> */}
                      <li>Raw data processing</li>
                      {/* <br /> */}
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-sm-4"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div
                className="card cardhgt phoneheight"
                style={{ marginBottom: "1rem", borderRadius: "10px" }}
              >
                <div
                  className="card-body cardbd"
                  style={{ borderRadius: "10px", margin: "2px" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    <i
                      className="fa fa-tools"
                      style={{ paddingRight: "20px" }}
                    ></i>
                    Design and Manufacturing
                    <hr style={{ background: "white" }}></hr>
                  </h5>
                  {/* <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div> */}
                  <p className="card-text" style={{ color: "white" }}>
                    <ul className="lststyle" style={{ margin: "5px" }}>
                      <li>3D Printing</li>
                      {/* <br /> */}
                      <li>CAD Models</li>
                      {/* <br /> */}
                      <li>Dobsonian Telescope</li>
                      <li>German Equatorial Mount -- design and codes</li>
                      <li>Refractor Telescope</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            {/* </div> */}
            <div
              className="col-sm-4"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div
                className="card cardhgt phoneheight"
                style={{ marginBottom: "1rem", borderRadius: "10px" }}
              >
                <div
                  className="card-body cardbd"
                  style={{ borderRadius: "10px", margin: "2px" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    <i
                      className="fas fa-satellite"
                      style={{ paddingRight: "20px" }}
                    ></i>
                    Observational Astronomy
                    <hr style={{ background: "white" }}></hr>
                  </h5>
                  {/* <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div> */}
                  <p className="card-text" style={{ color: "white" }}>
                    <ul className="lststyle" style={{ margin: "5px" }}>
                      <li>Telescope based</li>
                      {/* <br /> */}
                      <li>Radio astronomy</li>
                      {/* <br /> */}
                      <li>Astrophotography (DSLR and Phone cameras)</li>

                      {/* <br /> */}
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-sm-4"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div
                className="card cardhgt phoneheight"
                style={{ marginBottom: "1rem", borderRadius: "10px" }}
              >
                <div
                  className="card-body cardbd"
                  style={{ borderRadius: "10px", margin: "2px" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    <i
                      className="fas fa-atom"
                      style={{ paddingRight: "20px" }}
                    ></i>
                    Quantum Computing
                    <hr style={{ background: "white" }}></hr>
                  </h5>
                  {/* <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div> */}
                  <p className="card-text" style={{ color: "white" }}>
                    <ul className="lststyle" style={{ margin: "5px" }}>
                      <li>Simulator development</li>
                      {/* <br /> */}
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            {/* <div
              className="col-sm-4"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div className="card cardhgt phoneheight" style={{ marginBottom: "1rem", borderRadius: "10px" }}>
                <div
                  className="card-body cardbd"
                  style={{ background: "rgb(48, 88, 113)", borderRadius: "10px", margin: "2px" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                    <i className="fas fa-microchip" style={{ paddingRight: "20px" }}></i>
                  Electronics
                    <hr style={{ background: "white" }}></hr>
                  </h5>

                  <p className="card-text" style={{ color: "white" }}>
                    <ul className="lststyle" style={{ margin: "5px" }}>
                      <li> Sensors and Microcontrollers</li>

                      <li>Embedded systems</li>

                    </ul>
                  </p>
                </div>
              </div>
            </div> */}

            {/* <div
              className="col-sm-5"
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            >
              <div
                className="card"
                style={{ marginBottom: "1rem", borderRadius: "9px" }}
              >
                <div
                  className="card-body"
                  style={{ background: "rgb(204, 67, 67)" }}
                >
                  <h5 className="card-title" style={{ color: "white" }}>
                  <i class="fas fa-bolt"></i>
                    Electronics
                  </h5>
                  <div className="miniSep" style={{width:'auto',height:'2px', background: 'white' }} ></div>
                  <p className="card-text" style={{ color: "white" }}>
                    Sensors and Microcontrollers
                    <br />
                    Embedded systems
                    <br />
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchThemes;
