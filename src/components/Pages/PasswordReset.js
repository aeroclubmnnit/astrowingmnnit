import React, { useEffect, useRef } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "../../css/Login.css";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"

function PasswordReset() {

  const password = useRef();
  const confirmPassword = useRef();
  const history = useHistory();
  const { token } = useParams();

  useEffect(() => {
    document.title = `Reset Password | ${REACT_APP_BASE_TITLE}`;
    fetch(`${REACT_APP_SERVER}/api/resetverify`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) history.push("/404");
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.current.value !== confirmPassword.current.value) {
      toast.warn("passwords do not match !");
      return;
    }
    if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,25}$/.test(password.current.value)) {
      console.log(password)
      toast.warn("Invalid password type !");
      return;
    }

    fetch(`${process.env.REACT_APP_SERVER}/api/reset-password`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) toast.warn(data.error);
        else {
          if (data.message) toast.success(data.message);
          else toast.warn("Your session has expired...try again !");
          history.push("/user/login");
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
      <div className="container h-100 m-auto d-flex justify-content-center align-items-center">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5
                className="card-title text-center l2 font-weight-bold"
                id="heading"
              >
                Reset Password
                </h5>
              <form className="form-signin">
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
                      <i className="fa fa-eye-slash float-right" id='eye' onClick={passwordToggle}></i>
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
                    <i className="fa fa-eye-slash float-right" id='eye1' onClick={passwordToggle1}></i>
                  </span>
                </div>
                <button
                  className="btn btn-block text-uppercase btn-primary l1 mb-3"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Reset Password
                </button>
                <hr className="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordReset;
