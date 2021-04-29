import React, { useEffect } from "react";
import { REACT_APP_BASE_TITLE } from "../../grobalVars"
import Particles from "react-particles-js";

export default function NotFound() {
  useEffect(() => {
    document.title = `404 | ${REACT_APP_BASE_TITLE}`;
    document.getElementsByClassName('App')[0].classList.remove('bgrt')
    return () => {
      document.getElementsByClassName('App')[0].classList.add('bgrt')
    }
  }, [])

  const particlesOptions = {
    particles: {
      number: {
        value: 300,
        density: {
          enable: true,
          value_area: 1500,
        },
      },
    },
  };

  return (

    <div style={{ height: "100vh" }}>
      <Particles
        params={particlesOptions}
      ></Particles>
      <div
        className="d-flex flex-column justify-content-center align-items-center my-auto"
        style={{
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          color: "black",
        }}
      >
        <h1 className="fw-bold text-center" >404 error ...!</h1>
        <p className="text-center" style={{ fontWeight: "bold" }}>
          The page you are looking for is not found ⚠
        </p>
        <a className="btn btn-primary" style={{ alignItems: "center" }} href="/">
          Back to Home
        </a>
      </div>

    </div>
  );
}
