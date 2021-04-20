import React, { useEffect } from 'react'
import Loading from '../../Animations/Loading'
import '../../css/Spinoff.css'
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"
import tsaw from "../../images/Sponsors/tsawlogo.png";

export default function Spinoff() {
    useEffect(() => {
        document.title = `Spinoff | ${REACT_APP_BASE_TITLE}`
    }, [])

    return (
        <>
            <Loading time={2} />
            <div className=" pagesa">
                <div className="overlaya starbg">
                    <div className="pageTitlea titleBolda">Spinoff</div>
                </div>
            </div>

            <div className="spinoff container col-10" >
                <div className="content my-5" style={{ border: "3px solid rgb(41, 123, 176)", padding: "20px", borderRadius: "7px" }}>
                    <p style={{ textAlign: "justify" }}>
                        Technology is the best medium to bring real changes to this world.
                        At our club, we don't judge ourselves by the number of projects we do. Nor the number of competitions we win. Rather, we measure by the impact we bring to our society.
                        We live by the definition that society is not limited to the students of campus, but spreads way beyond.
                        It is with pride when we say, that apart from helping students establish a firm foundation in technology, members of our club and Aeroclub MNNIT (Link) are truly making a difference in the best form possible: with technology startups.
                        TSAW Drones (TechNIT Space and Aero Works) is such startup founded by Mr. Kishan Tiwari (Student President, Robotics & Aeromodelling Club 2018-19, Alumnus 2019, MNNIT) which was later joined by Mr. Rimanshu Pandey (Alumnus 2015, MNNIT), and Mr. Ankesh Singh (Alumnus 2015, MNNIT and Alumnus 2017, IIM-K).
                    </p>
                </div>
                <div className="content my-5" style={{ border: "3px solid rgb(41, 123, 176)", padding: "20px", borderRadius: "7px" }}>
                    <h4 className='my-3' style={{ marginBottom: "0px", textAlign: "center" }}>In the Words of the Founders:</h4>
                    <div
                        className="miniSep"
                        style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                    ></div>
                    <p>
                        <em>“We are a team of engineers who started from the collegiate Aeromodelling & Robotics Club of NIT Allahabad (formerly MNREC), experimenting and gaining hands-on experience with many project teammates or leaders. Multiple projects which we did in the club, such as TMV (Vehicle capable of being maneuvered in air & water), Air Ambulance, etc., led to the startup.”
                        </em>
                    </p>
                </div>
                <div className="content my-5" style={{ border: "3px solid rgb(41, 123, 176)", padding: "20px", borderRadius: "7px" }}>
                    <h4 className='my-3' style={{ marginBottom: "0px", textAlign: "center" }}>About TSAW</h4>
                    <div
                        className="miniSep"
                        style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                    ></div>
                    <p>Founded in 2019 by many technocrats from India's prestigious technical institute Motilal Nehru National Institute of Technology, Allahabad, TSAW envisions transforming humanity through drone-based industry solutions. TSAW is primarily building a healthy drone ecosystem in the country, the "TSAW mobile app," enabling drone renting & services legalising the industry by connecting it to the regulatory body DGCA via proposed UTM (UAV Traffic Management). TSAW also provides enterprise solutions across industries viz., construction, agriculture, public safety, solar & wind energy, etc. Team TSAW is working to achieve a massive reduction in costs & time in hyperlocal logistics using automated UAV technology.
                    </p>
                    {/* <a href="https://tsaw.tech/" target="_blank">Visit TSAW</a> */}
                    <a
                        className="card-title text-center sponimg"
                        href="https://tsaw.tech/index.php"
                        target="_blank"

                    >
                        <img
                            className="card-img-top mx-auto sponimg spinimg"
                            src={tsaw}
                            alt="tsaw"
                            srcSet=""
                        />
                    </a>
                    <p className='my-3'>The establishment of TSAW truly reflects our vision and what we aspire to do, and we hope to be the force for establishment of many such ventures.
                    </p>
                </div>
            </div>
        </>
    )
}
