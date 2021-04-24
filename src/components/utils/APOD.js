import React, { useEffect, useState } from 'react'
import '../../css/apod.css'

export default function APOD() {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=uc04exQjhM4tO8QCCl0wcuAvJ4QMaJJxDfofWrvm', {
            method: 'GET'
        }).then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className="cont my-5">
            <div className="container-fluid">
            {/* <p><span> Astronomy Picture of the Day</span></p> */}
            
                <div
                    className="pageTitle titleBold headingc white-headingc backst"
                    data-aos="fade-down"
                    style={{ marginBottom: "5px", color: "rgb(25, 25, 25)" }}
                >
                    Astronomy Picture of the Day
        </div>
                <div className="miniSep" style={{ marginBottom: "20px" }}></div>
                <div className="d-flex flex-column flex-md-row container apod-container  col-11 col-lg-9 mx-auto my-5 border">
                    <div className="information text-center mt-5 mb-2">
                        <div className="title">
                            <h3>{data?.title}</h3>
                        </div>
                        <div className="explanation mx-0 mx-md-3 mt-md-2 mt-lg-5 " id="style-3">
                            <p className="expl">{data?.explanation}k</p>
                        </div>
                    </div>
                    <div className="hdimage">
                        {data?.media_type === 'video' ?
                            <iframe src={data?.url} className=''></iframe>
                            :
                            <img src={data?.hdurl} alt="" />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
