import React, { useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../css/Login.css";
import { toast } from "react-toastify";
import m from "../../images/utils/astro_logo4.png";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function Signup() {

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history = useHistory();

  useEffect(() => {
    document.title = `Signup | ${REACT_APP_BASE_TITLE}`;
    if (localStorage.getItem("jwtToken")) history.push("/404");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.current.value !== confirmPassword.current.value) {
      toast.warn("passwords do not match !");
      return;
    }

    fetch(`${REACT_APP_SERVER}/api/signup`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) toast.warn(data.error);
        else {
          toast.success(data.message);
          history.push("/user/login");
          window.location.reload();
        }
      });
  };

  const passwordToggle = () => {
    const eye = document.getElementById('eye')
    if (eye.classList.contains('fa-eye')) {
      eye.classList.remove('fa-eye')
      eye.classList.add('fa-eye-slash')
      document.getElementById('inputPassword').type = 'password'
    }
    else {
      eye.classList.remove('fa-eye-slash')
      eye.classList.add('fa-eye')
      document.getElementById('inputPassword').type = 'text'
    }
  }
  const passwordToggle1 = () => {
    const eye1 = document.getElementById('eye1')
    if (eye1.classList.contains('fa-eye')) {
      eye1.classList.remove('fa-eye')
      eye1.classList.add('fa-eye-slash')
      document.getElementById('inputretypePassword').type = 'password'
    }
    else {
      eye1.classList.remove('fa-eye-slash')
      eye1.classList.add('fa-eye')
      document.getElementById('inputretypePassword').type = 'text'
    }
  }


  return (
    <div className="login">
      <div className="container h-100 d-flex justify-content-center align-items-center">
        {/* <div className="login-logo">
          <img src={m} alt="aeroclub" />
        </div> */}
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin">
            <div className="card-body">
              <h5
                className="card-title text-center l2 font-weight-bold"
              >
                Account Signup
              </h5>
              <p className='text-center'>( Only for MNNIT Students )</p>
              <form className="form-signin">
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputname"
                    className="form-control"
                    placeholder="Name"
                    required
                    autoFocus
                    ref={name}
                  />
                  <label htmlFor="inputname">Name</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Gsuite Email Address"
                    required
                    autoFocus
                    ref={email}
                  />
                  <label htmlFor="inputEmail">Gsuite Email Address</label>
                </div>
                <OverlayTrigger
                  placement="bottom-end"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Tooltip>
                      * password must between 8-25 characters containing at least
                      one lowercase and one uppercase letter, one numeric digit,
                      and one special character
                    </Tooltip>}
                >
                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                      maxLength={25}
                      ref={password}
                    />
                    <label htmlFor="inputPassword" >Password</label>
                    <span>
                      <i className="fa fa-eye-slash" id='eye' onClick={passwordToggle}></i>
                    </span>
                  </div>
                </OverlayTrigger>

                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputretypePassword"
                    className="form-control"
                    placeholder="Retype Password"
                    required
                    maxLength={25}
                    ref={confirmPassword}
                  />
                  <label htmlFor="inputretypePassword">Retype Password</label>
                  <span>
                    <i className="fa fa-eye-slash" id='eye1' onClick={passwordToggle1}></i>
                  </span>
                </div>
                <button
                  className="btn btn-primary btn-block text-uppercase l1 mb-3"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign up
                </button>
                <div className="para">
                  <p style={{ color: "black" }}>
                    Already have an account?{" "}
                    <Link
                      to="/user/login"
                      style={{ textDecoration: "none" }}
                      className="l2"
                    >
                      Signin
                    </Link>
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary text-uppercase l1"
                    style={{ width: "100%" }}
                  >
                    <Link
                      to="/"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Back to Home
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Signup;
