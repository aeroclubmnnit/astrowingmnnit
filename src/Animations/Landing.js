import React from "react";
import "../css/Landing.css";
import m from "../images/utils/astro_logo2.png";

class Landing extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="pagesl">
          <div className="landing d-flex align-items-center justify-content-center">
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <div className="landing-logo mb-3">
                <img src={m} alt="aero" />
              </div>
              <div className="landing-about">
                <h1 className="font-weight-bold text-uppercase">
                  AstroWing MNNIT
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
