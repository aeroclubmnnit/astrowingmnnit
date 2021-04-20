import React, { useEffect } from "react";
import "../../../../css/SingleProject.css";

export default function PhotoPreview({ photo }) {
    return (
        <div>
            <p className="d-flex justify-content-center">
                <button
                    className="btn btn-primary px-3"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsePreview"
                    aria-expanded="false"
                    aria-controls="collapsePreview"
                >
                    Preview
          </button>
            </p>
            <div className="collapse" id="collapsePreview">
                <div className="mb-4">
                    <h4 className='my-3' style={{ marginBottom: "0px", textAlign: "center" }}>{photo?.title}</h4>
                    <div
                        className="miniSep"
                        style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                    ></div>
                </div>
                <div className="container">
                    <hr />
                    <div className="image mx-auto" style={{ maxWidth: '50rem' }}>
                        <a href={photo?.pic} target="_blank">
                            <img src={photo?.pic} alt="img" className='my-3 photo__photo' />
                        </a>
                    </div>
                    <hr />
                    <div>
                        <h3 className='my-3 subheaders'>Instrument Used</h3>
                        <p className="px-5">{photo?.instrumentUsed}</p>
                    </div>
                    <div>
                        <h3 className='my-3 subheaders'>Instrument Settings</h3>
                        <p className="px-5">{photo?.instrumentSettings}</p>
                    </div>
                    <div>
                        <h3 className='my-3 subheaders'>Clicked By: </h3>
                        <ul className="px-5">
                            {photo?.members?.map((member) =>
                                member.accepted ? (
                                    <li>
                                        {member.user.linkedin_url ? (
                                            <a href={member.user.linkedin_url}>{member.user.name}</a>
                                        ) : (
                                            <span>{member.user.name}</span>
                                        )}
                                    </li>
                                ) : (
                                    <></>
                                )
                            )}
                        </ul>
                    </div>
                    <div className='' style={{ marginBottom: '5rem' }}>
                        <div className='my-3 photo__desc'>
                            <h3 className='my-3 subheaders'>Description : </h3>
                            <div className="my-5 text-center"
                                dangerouslySetInnerHTML={{ __html: photo?.desc }}
                            >
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
