import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { REACT_APP_SERVER } from "../../../../grobalVars";
import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons";
import { toast } from "react-toastify";
import DashQuill from "../DashQuill";
import { v4 } from "uuid";

export default function ProjEdit(props) {
  const [formData, setformData] = useState({});
  const [compTech, setCompTech] = useState([]);
  useEffect(() => {
    setformData(props.project);
    setCompTech(props.project.compTech);
  }, [props.project]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      <p className="d-flex justify-content-center">
        <button
          className="btn btn-primary px-4"
          type="button"
          data-toggle="collapse"
          data-target="#collapseprojedit"
          aria-expanded="false"
          aria-controls="collapseprojedit"
        >
          Edit
        </button>
      </p>
      <div className="collapse" id="collapseprojedit">
        <div className="card card-body border border-dark">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              fetch(`${REACT_APP_SERVER}/api/projects/${props.project._id}`, {
                method: "put",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                },
                body: JSON.stringify({ ...formData, compTech }),
              })
                .then((res) => {
                  res.json().then((data) => {
                    data._id = data.id;
                    delete data.id;
                    toast.success("Project Updated !");
                    dispatch({ type: "UPDATE_PROJECT", payload: data });
                    setLoading(false);
                  });
                })
                .catch((err) => {
                  setLoading(false);
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
                required
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
                Youtube Embed ID ( eg : 2JyW4yAyTl0 ){" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="embed"
                required
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
                    required
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

            <button
              type="submit"
              className="btn btn-primary"
              data-toggle="collapse"
              data-target="#collapseprojedit"
              aria-expanded="false"
              aria-controls="collapseprojedit"
            >
              {loading ? "loading..." : "Save"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
