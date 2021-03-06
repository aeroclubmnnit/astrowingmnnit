import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useDispatch } from "react-redux";
import { REACT_APP_SERVER } from "../../../../grobalVars";
import { CloseRounded } from "@material-ui/icons";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import DashQuill from "../DashQuill";

export default function PhotoForm() {
  const [formData, setformData] = useState({
    title: "",
    instrumentUsed: "",
    instrumentSettings: "",
    desc: "",
    pic: "",
  });

  const [tags, setTags] = useState([]);
  const [definedTags, setDefinedTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [const_tags, setconst_tags] = useState([]);
  useEffect(() => {
    fetch(`${REACT_APP_SERVER}/api/tags`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setDefinedTags(data);
        setconst_tags(data);
      });
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <button
          className="btn btn-primary btn-lg px-5"
          type="button"
          data-toggle="collapse"
          data-target="#collapsenewphoto"
          aria-expanded="false"
          aria-controls="collapsenewphoto"
        >
          Create New Photo
        </button>
      </div>
      <div className="collapse my-4" id="collapsenewphoto">
        <form
          className="my-5"
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            fetch(`${REACT_APP_SERVER}/api/astrophotographies/user`, {
              method: "post",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                title: formData.title,
                desc: formData.desc,
                instrumentUsed: formData.instrumentUsed,
                instrumentSettings: formData.instrumentSettings,
                tags: tags.map((tag) => tag._id),
                pic: formData.pic,
              }),
            })
              .then((res) => {
                if (res.status === 200) {
                  setformData({
                    title: "",
                    overview: "",
                    desc: "",
                    objective: "",
                    pic: "",
                    instrumentUsed: "",
                    instrumentSettings: "",
                  });
                  setTags([]);
                  setDefinedTags(const_tags);
                  res.json().then((data) => {
                    toast.success("Photo Created !");
                    document
                      .getElementById("collapsenewphoto")
                      .classList.remove("show");
                    dispatch({ type: "CREATE_PHOTO", payload: data });
                  });
                } else {
                  res.json((data) => {
                    toast.warn(data.err);
                  });
                }
                setLoading(false);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          <div className="form-floating mb-3 ">
            <label htmlFor="title">Title *</label>
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
          <div className="form-floating mb-3 ">
            <label htmlFor="title">Image Link *</label>
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
          <label htmlFor="description">Description *</label>
          <DashQuill
            text={formData.desc}
            id={v4()}
            setText={(txt) =>
              setformData((prev) => ({
                ...prev,
                desc: txt,
              }))
            }
          />
          <div className="form-floating mb-3">
            <label htmlFor="instrumentsUsed">Instrument Used *</label>
            <input
              type="text"
              className="form-control"
              id="instrumentsUsed"
              required
              value={formData.instrumentUsed}
              onChange={(e) => {
                setformData((prev) => ({
                  ...prev,
                  instrumentUsed: e.target.value,
                }));
              }}
            />
          </div>
          <div className="form-floating mb-3">
            <label htmlFor="instrumentSettings">Instrument Settings *</label>
            <input
              type="text"
              className="form-control"
              id="instrumentSettings"
              required
              value={formData.instrumentSettings}
              onChange={(e) => {
                setformData((prev) => ({
                  ...prev,
                  instrumentSettings: e.target.value,
                }));
              }}
            />
          </div>
          <div className="form-floating mb-3 tags">
            <label htmlFor="embed">Tags</label> <br />
            {tags.map((tag, i) => (
              <h4 className="d-inline">
                <span className="badge badge-primary my-1 mx-1">
                  {tag.name}{" "}
                  <CloseRounded
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setDefinedTags((prev) => [...prev, tag]);
                      setTags((prev) =>
                        prev.filter((item) => item._id !== tag._id)
                      );
                    }}
                  />
                </span>
              </h4>
            ))}
            <div className="dropdown">
              <button
                id="dLabel"
                className="dropdown-select"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Select
                <span className="caret"></span>
              </button>

              <ul
                className="dropdown-menu"
                style={{ overflowY: "auto", maxHeight: "120px" }}
                aria-labelledby="dLabel"
              >
                {definedTags.map((tag, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setTags((prev) => [...prev, tag]);
                      setDefinedTags((prev) => {
                        const new_def = prev.filter(
                          (item) => item._id !== tag._id
                        );
                        return new_def;
                      });
                    }}
                  >
                    {tag.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button type="submit" className="btn btn-primary my-3">
            {loading ? "loading..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}
