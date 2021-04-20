import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useDispatch } from "react-redux";
import { REACT_APP_SERVER } from "../../../../grobalVars";
import { CloseRounded } from '@material-ui/icons';
import { toast } from "react-toastify";

export default function PhotoEdit({ photo }) {
    const [formData, setformData] = useState({})
    const [tags, setTags] = useState([])
    const [definedTags, setDefinedTags] = useState(['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Moon', 'Deep sky objects', 'Sun', 'Star Trails', 'Constellation', 'Nebulae', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])

    useEffect(() => {
        setformData(photo)
        setTags(photo.tags)
        setDefinedTags(prev => prev.filter(item => !photo.tags.includes(item)))
        console.log(photo)
    }, [photo])


    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    return (
        <div>
            <p className="d-flex justify-content-center">
                <button
                    className="btn btn-primary px-4"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsephotoedit"
                    aria-expanded="false"
                    aria-controls="collapsephotoedit"
                >
                    Edit
        </button>
            </p>
            <div className="collapse my-4" id="collapsephotoedit">
                <form
                    className='my-5'
                    onSubmit={(e) => {
                        e.preventDefault();
                        setLoading(true);
                        fetch(`${REACT_APP_SERVER}/api/astrophotographies/${photo._id}`, {
                            method: "put",
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                title: formData.title,
                                desc: formData.desc,
                                instrumentUsed: formData.instrumentUsed,
                                instrumentSettings: formData.instrumentSettings,
                                tags,
                                pic: formData.pic
                            }),
                        })
                            .then((res) => {
                                res.json().then((data) => {
                                    data._id = data.id;
                                    delete data.id;
                                    toast.success("Photo Updated !");
                                    dispatch({ type: "UPDATE_PHOTO", payload: data });
                                    setLoading(false);
                                });
                            })
                            .catch((err) => {
                                setLoading(false);
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
                    <ReactQuill
                        className="mb-3"
                        id='description'
                        modules={{
                            toolbar: [
                                ["bold", "italic", "underline", "strike"],
                                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                [{ size: ["small", false, "large", "huge"] }],
                                [{ font: [] }],
                                [{ color: [] }, { background: [] }],
                                [{ list: "ordered" }, { list: "bullet" }],
                                [{ script: "sub" }, { script: "super" }],
                                ["blockquote", "code-block"],
                                [{ indent: "-1" }, { indent: "+1" }],
                                [{ direction: "rtl" }],
                                [{ align: [] }],
                                ["link", "image", "video"],
                                ["clean"],
                            ],
                            imageResize: {
                                displayStyles: {
                                    backgroundColor: "black",
                                    border: "none",
                                    color: "white",
                                },
                                modules: ["Resize", "DisplaySize", "Toolbar"],
                            },
                        }}
                        value={formData.desc}
                        onChange={(e) => {
                            setformData((prev) => ({
                                ...prev,
                                desc: e,
                            }));
                        }}
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
                        {
                            tags.map((tag, i) => (
                                <h4 className="d-inline"><span className="badge badge-primary my-1 mx-1">{tag} <CloseRounded style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        setDefinedTags(prev => [...prev, tag])
                                        setTags(prev => prev.filter(item => prev.indexOf(item) !== i))
                                    }}
                                /></span></h4>
                            ))
                        }
                        <div className="dropdown">
                            <button id="dLabel" className="dropdown-select" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select
                    <span className="caret"></span>
                            </button>

                            <ul className="dropdown-menu" style={{ overflowY: 'auto', maxHeight: '120px' }} aria-labelledby="dLabel">
                                {
                                    definedTags.map((tag, i) => (
                                        <li
                                            key={i}
                                            onClick={() => {
                                                setTags(prev => [...prev, tag])
                                                setDefinedTags(prev => prev.filter(item => item !== tag))
                                            }}>{tag}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary my-3">
                        {loading ? "loading..." : "Submit"}
                    </button>
                </form >
            </div>
        </div>
    );
}
