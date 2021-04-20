import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function DashComp() {
  const history = useHistory();
  const requests = useSelector(state => state.user ?.issues);
  useEffect(() => {
    if (!localStorage.getItem("jwtToken")) {
      history.push("/user/login");
      toast.warn("You must be logged in !");
      return;
    }
  }, []);
  return (
    <div className="container">
      <div className="main-body">
        <div className="row">
          <div className="card w-50 mx-auto">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {requests ?.map((request) => {
                  let badge;
                  if (request.status === "Requested")
                    badge = (
                      <span class="badge badge-pill badge-dark">
                        {request.status}
                      </span>
                    );
                  if (request.status === "Issued")
                    badge = (
                      <span class="badge badge-pill badge-warning">
                        {request.status}
                      </span>
                    );
                  else if (request.status === "Denied")
                    badge = (
                      <span class="badge badge-pill badge-danger">
                        {request.status}
                      </span>
                    );
                  else if (request.status === "Collected")
                    badge = (
                      <span class="badge badge-pill badge-success">
                        {request.status}
                      </span>
                    );
                  else if (request.status === "Returned")
                    badge = (
                      <span class="badge badge-pill badge-info">
                        {request.status}
                      </span>
                    );

                  return (
                    <tr data-testid="article" key="article-index">
                      <td>{request.component.name}</td>
                      <td>{new Date().toISOString().substring(0, 10)}</td>
                      <td>{request.num}</td>
                      <td>{badge}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
