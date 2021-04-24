import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { REACT_APP_SERVER } from "../../../../grobalVars";
import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons";
import { toast } from "react-toastify";
import DashQuill from "../DashQuill";
import { v4 } from "uuid";

export default function ProjForm() {
  const [formData, setformData] = useState({
    title: "",
    overview: "",
    description: "",
    objective: "",
    pic: "",
    ytID: "",
  });

  const [compTech, setCompTech] = useState([]);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <button
          className="btn btn-primary btn-lg px-5"
          type="button"
          data-toggle="collapse"
          data-target="#collapsenewproj"
          aria-expanded="false"
          aria-controls="collapsenewproj"
        >
          Create New Project
        </button>
      </div>
      <div className="collapse my-4" id="collapsenewproj">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            fetch(`${REACT_APP_SERVER}/api/projects/user`, {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
              },
              body: JSON.stringify({
                title: formData.title,
                description: formData.description,
                objective: formData.objective,
                overview: formData.overview,
                pic: formData.pic,
                ytID: formData.ytID,
                compTech,
              }),
            })
              .then((res) => {
                setformData({
                  title: "",
                  overview: "",
                  description: "",
                  objective: "",
                  pic: "",
                  ytID: "",
                });
                setCompTech([]);
                res.json().then((data) => {
                  console.log(data);
                  dispatch({ type: "CREATE_PROJECT", payload: data });
                  toast.success("Project Created !");
                  document
                    .getElementById("collapsenewproj")
                    .classList.remove("show");
                  setLoading(false);
                });
              })
              .catch((err) => {
                setLoading(false);
                setformData({
                  title: "",
                  overview: "",
                  description: "",
                  objective: "",
                  pic: "",
                  ytID: "",
                });
                setCompTech([]);
              });
          }}
        >
          <div className="form-floating mb-3">
            <label htmlFor="title">Project Name *</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={formData.title}
              onChange={(e) => {
                setformData((prev) => ({
                  ...prev,
                  title: e.target.value,
                }));
              }}
            />
          </div>
          <div className="form-floating mb-3">
            <label htmlFor="objective">Objective *</label>

            <input
              type="text"
              className="form-control"
              id="objective"
              required
              value={formData.objective}
              onChange={(e) => {
                setformData((prev) => ({
                  ...prev,
                  objective: e.target.value,
                }));
              }}
            />
          </div>
          <label htmlFor="overview">Overview *</label>
          <DashQuill text={formData.overview} id={v4()} setText={txt => setformData(prev => ({
            ...prev, overview: txt
          }))} />
          <label htmlFor="description">Description *</label>
          <DashQuill text={formData.description} id={v4()} setText={txt => setformData(prev => ({
            ...prev, description: txt
          }))} />
          <div className="form-floating mb-3">
            <label htmlFor="image">Image Link</label>

            <input
              type="url"
              className="form-control"
              id="image"
              value={formData.pic}
              onChange={(e) => {
                setformData((prev) => ({
                  ...prev,
                  pic: e.target.value,
                }));
              }}
            />
          </div>
          <div className="form-floating mb-3">
            <label htmlFor="embed">
              Youtube Embed ID ( eg : https://www.youtube.com/watch?v=
              <b>azaSaWAyQE4</b> ){" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="embed"
              value={formData.ytID}
              onChange={(e) => {
                setformData((prev) => ({
                  ...prev,
                  ytID: e.target.value,
                }));
              }}
            />
          </div>
          <div className="form-floating mb-3">
            <label htmlFor="embed">Components and Technologies Used </label>
            {compTech.map((ct, i) => (
              <div className="d-flex align-items-center">
                <input
                  type="text"
                  className="form-control my-2 mr-2"
                  id={`ct${i}`}
                  value={ct}
                  onChange={(e) => {
                    setCompTech(
                      compTech.map((item, x) =>
                        x === i ? e.target.value : item
                      )
                    );
                  }}
                />
                <div
                  className="comptech-remove d-flex"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    setCompTech((prev) =>
                      prev.filter((item) => prev.indexOf(item) !== i)
                    )
                  }
                >
                  <RemoveCircleOutline /> Remove
                </div>
              </div>
            ))}
            <div
              className="comptech-add"
              style={{ cursor: "pointer" }}
              onClick={() => setCompTech((prev) => [...prev, ""])}
            >
              <AddCircleOutline /> Add
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              {loading ? "loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
