import React, { useEffect } from "react";
import Loading from "../../Animations/Loading";
import "../../css/Event.css";
import pro from "../../images/utils/Prosangnew.png";
import Daksha from "../../images/Events/Daksha.jpg"
import Smarthome from "../../images/Events/Smarthome.jpg"
import Guardian from "../../images/Events/Guardian.jpg"
import Blueprint from "../../images/Events/Blueprint.jpg"
import Idea from "../../images/Events/Idea.jpg"
import CodeWarz from "../../images/Events/CodeWarz.jpg"
import { Jumbotron, NavDropdown } from "react-bootstrap";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"

export default function Prosang() {
    useEffect(() => {
        document.title = `Prosang | ${REACT_APP_BASE_TITLE}`;
    }, [])

    return (
        <>
            <Loading time={2} />
            <section className="section1 pagese ">
                <div className="overlaye starbg">
                    <div className="containere ">
                        <h1 className="titlee">
                            <div className="pageTitlee titleBolde">
                                {/* <div><img src={`${baseURL}/images/utils/Prosang.jpg`} alt="prosang" srcset="" style={{alignItems:'center', width: '12%'}} /></div> */}
                Prosang
                {/* </div> */}
                            </div>
                        </h1>
                        <div className="content-wrapper">
                            <div className="img-wrapper">
                                <div className="img imgev">
                                    <img
                                        src={pro}
                                        alt="prosang"
                                        srcSet=""
                                        style={{ alignItems: "center" }}
                                    />
                                </div>
                            </div>
                            <div className="text-wrapper" style={{ border: "2px solid white", borderRadius: "10px", padding: "10px", textAlign: "justify" }}>
                                <p className="texte">
                                    Prodyogiki Sangam, better known as Prosang is the annual
                                    Techfest of Robotics and Aeroclub of MNNIT. It is an
                                    initiative to bring together a talented and technically
                                    skilled group of people to showcase their scientific prowess
                                    in the form of actual projects as well as ideas in fun and
                                    challenging tech-based events.
                </p>
                                <p className="texte">
                                    It began with the efforts of the batch of 2019 with the basic
                                    need for helping students score the gap between industrial
                                    skill set requirements and our academics, and hence build
                                    projects that add value to their CVs, and motivate them to
                                    model solutions to real world problems.
                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className=" pagese">
                <div className="overlaye">
                
                    <div className="pageTitlee titleBolde">
                    <div><img src={`${baseURL}/images/utils/Prosang.jpg`} alt="prosang" srcset="" style={{alignItems:'center', width: '12%'}} /></div>
                        Prosang
                        
                            </div>
                            
                </div>
            </div> */}
            {/* <Jumbotron> */}
            <section className="wrapper">
                <div className="container-f">
                    {/* <div className="pageTitle titleBold">
                        AVISHKAR
                    </div> */}
                    {/* <div className="miniSep"></div> */}
                    <div className="sm:flex items-center max-w-screen-xl p-10 sm:p-16 md:p-24 phonev">
                        <div className="sm:w-2/3 sm:mr-10">
                            <div className="text">
                                {/* <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">about us</span> */}
                                <h2 className="font-bold text-3xl my-4 sm:text-4xl">
                                    <span className="text-indigo-600 font-bold">About the Event</span>
                                </h2>
                                <div className="bgBox"
                                    style={{
                                        border: "3px solid rgb(204, 67, 67)",
                                        padding: "2px",
                                        borderRadius: "8px",
                                        margin: "2em",
                                        fontSize: "14px"

                                    }}
                                >
                                    <div style={{ padding: "10px" }}>
                                        <p className="text-gray-700 texte" style={{ fontSize: "16px" }}><i>
                                            Prodyogiki Sangam, better known as Prosang is the annual
                                            Techfest of Robotics and Aeroclub of MNNIT. It is an
                                            initiative to bring together a talented and technically
                                            skilled group of people to showcase their scientific
                                            prowess in the form of actual projects as well as ideas in
                                            fun and challenging tech-based events.</i>
                                        </p>
                                        <p className="text-gray-700 texte" style={{ fontSize: "16px" }}><i>
                                            It began with the efforts of the batch of 2019 with the
                                            basic need for helping students score the gap between
                                            industrial skill set requirements and our academics, and
                                            hence build projects that add value to their CVs, and
                                            motivate them to model solutions to real world problems.</i>
                                        </p>
                                        <p className="text-gray-700" style={{ textAlign: "justify", }}>
                                            <i style={{ fontSize: "16px" }}>Every year ProSang witnesses: </i><br></br><br></br><ul className="ulprosang">
                                                <li><b>Talks: </b>
 Many talks from eminent people in industry and academia, thus helping students understand the current trends and needs.</li><br></br>
                                                <li><b>Competitions: </b>
Cut-throat competition in challenging events thrills the students and encourages them to make products to solve challenging problems put to them in the form of problem statements.</li><br></br>
                                                <li><b>Workshops: </b>
Several workshops are organized on IoT, drone automation, etc., giving students hands-on experience and honing their skill set.
Also, we organize several free of cost workshops for school students to embed scientific temperament at young ages only. They also visit and experience the atmosphere of a National Institute of Technology, see technical workshops, visit many labs, and much more.</li><br></br>
                                                <li><b>Project Exhibition: </b>
Students of our clubs and outside display projects built throughout the year to professors from all college departments and benefit from their valuable insights in the project exhibition.</li><br></br>

                                                <li><b>Shows: </b>Many fun yet enlightening activities like Airshow, Stargazing Workshop by professionals.</li><br></br>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:flex items-center max-w-screen-xl p-10 sm:p-16 md:p-24 text-desktop">
                        <div className="sm:w-2/3 sm:mr-10">
                            <div className="text">
                                {/* <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">about us</span> */}
                                <h2 className="font-bold text-3xl my-4 sm:text-4xl">
                                    <span className="text-indigo-600 font-bold">About the Event</span>
                                </h2>
                                <div className="bgBox"
                                    style={{
                                        border: "3px solid rgb(204, 67, 67)",
                                        padding: "2px",
                                        borderRadius: "8px",
                                        margin: "2em",
                                        fontSize: "14px"

                                    }}
                                >
                                    <div style={{ padding: "10px" }}>

                                        <p className="text-gray-700" style={{ textAlign: "justify" }}>
                                            <i style={{ fontSize: "medium" }}>Every year ProSang witnesses: </i><br></br><br></br><ul className="ulprosang">
                                                <li><b>Talks: </b>
 Many talks from eminent people in industry and academia, thus helping students understand the current trends and needs.</li><br></br>
                                                <li><b>Competitions: </b>
Cut-throat competition in challenging events thrills the students and encourages them to make products to solve challenging problems put to them in the form of problem statements.</li><br></br>
                                                <li><b>Workshops: </b>
Several workshops are organized on IoT, drone automation, etc., giving students hands-on experience and honing their skill set.
Also, we organize several free of cost workshops for school students to embed scientific temperament at young ages only. They also visit and experience the atmosphere of a National Institute of Technology, see technical workshops, visit many labs, and much more.</li><br></br>
                                                <li><b>Project Exhibition: </b>
Students of our clubs and outside display projects built throughout the year to professors from all college departments and benefit from their valuable insights in the project exhibition.</li><br></br>

                                                <li><b>Shows: </b>Many fun yet enlightening activities like Airshow, Stargazing Workshop by professionals.</li><br></br>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="cent">
                            <a
                                className="btn btn-outline-dark btn-lg"
                                data-toggle="collapse"
                                href="#collapseExample1"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample1"
                            >
                                Prosang 2020
              </a>
                        </p>
                        {/* <div className="colarea"> */}
                        <div className="collapse colarea" id="collapseExample1">
                            <div className="content yearevent">
                                <div className="sm:flex items-center max-w-screen-xl p-10 sm:p-16 md:p-24">
                                    <div className="sm:w-2/3 sm:mr-10">
                                        <div className="text">
                                            {/* <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">about us</span> */}

                                            <h3 className="font-bold text-3xl my-4 sm:text-4xl">
                                                <span className="text-indigo-300 font-bold">Theme</span>
                                            </h3>
                                            <div
                                                className="miniSep"
                                                style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                                            ></div>
                                            <h5 className="font-bold text-3xl my-4 sm:text-4xl">
                                                <span className="text-indigo-300 font-bold">Smart City</span>
                                            </h5>
                                            <div
                                                style={{
                                                    border: "2px solid rgb(29, 29, 29)",
                                                    padding: "10px",
                                                    borderRadius: "8px",
                                                }}
                                            >
                                                <div style={{ padding: "2px" }}>
                                                    <p className="text-gray-700">
                                                        <h5 className="font-bold text-3xl my-4 sm:text-4xl">
                                                            <span className="text-indigo-300 font-bold">Speakers</span>
                                                        </h5>
                                                        <div
                                                            className="miniSep"
                                                            style={{ marginBottom: "40px", background: "rgb(204, 67, 67)", width: "100%" }}
                                                        ></div>
                                                        <ul className="remul">
                                                            <li> <b>Mr. Sanjeev Sharma (CEO and Founder, Swaayatt Robots) </b><a href="https://www.linkedin.com/in/sanjeevsharmaiitr/"><i className="fab fa-linkedin fa-lg"></i></a></li>

                                                            <br></br>
                                                        Autonomous Vehicles in Indian Scenarios
                                                        <hr></hr>
                                                            <li><b>Dr. Vijay Kapoor (Founder, Delhi Astronomy Club, Bangalore Astronomy Club) </b><a href="https://www.linkedin.com/in/sanjeevsharmaiitr/"><i className="fab fa-linkedin fa-lg"></i></a></li><br></br>
                                                        Amateur Astronomy and Beyond
                                                        <hr></hr>
                                                            <li><b>Mr. Mani Tripathi (Head, Allahabad Smart City Project) </b><a href="https://www.linkedin.com/in/sanjeevsharmaiitr/"><i className="fab fa-linkedin fa-lg"></i></a><br></br><br></br>
                                                        What Does it Take to Build a Smart City</li>
                                                        </ul>
                                                    </p>

                                                </div>
                                            </div>
                                            <h3 className="font-bold text-3xl my-4 sm:text-4xl">
                                                <span className="text-indigo-300 font-bold">Other Events</span>
                                            </h3>
                                            <div
                                                className="miniSep"
                                                style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                                            ></div>
                                            <div>
                                                <p>

                                                    <button className="btn btn-danger" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                        Workshops
                                                     </button>
                                                </p>

                                                <div className="collapse collapsews" id="collapseExample">
                                                    <div className="card card-body dropworkshop text-center" >
                                                        <p>IoT</p>
                                                        <p>Drone Automation</p>
                                                        <p>A Day in the world of Robotics</p>
                                                    </div>
                                                </div>





                                                <span><h6>Project Exhibition</h6>
                                                </span><br></br>
                                                <span><h6>Airshow by Vortex RC</h6>
                                                </span><br></br>
                                                <h6><span className="text-indigo-200">Stargazing workshop by Mr. Vijay Kapoor<b> </b>
                                                    <a href="https://www.linkedin.com/in/vjkapoor/?originalSubdomain=in"><i className="fab fa-linkedin fa-lg"></i></a>
                                                </span></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        border: "2px solid rgb(29, 29, 29)",
                                        padding: "10px",
                                        borderRadius: "8px",
                                        marginTop: "30px"
                                    }}
                                >
                                    <div style={{ padding: "2px" }}>
                                        <p className="text-gray-700">
                                            <h5 className="font-bold text-3xl my-4 sm:text-4xl">
                                                <span className="text-indigo-300 font-bold">Details</span>
                                            </h5>
                                            <div
                                                className="miniSep"
                                                style={{ marginBottom: "40px", background: "rgb(204, 67, 67)", width: "100%" }}
                                            ></div>
                                            <p className="detailsph" style={{ textAlign: "justify" }}>
                                                <i className>
                                                    MNNIT became a hosting ground for an enchanting workshop conducted by Vijay Kapoor sir, a prominent Indian astrophotographer, this ProSang. After the inauguration ceremony, where he quickly earned the attention and awe of his audience with his clicked images, the observation sessions began at the athletics ground. Participant counts ran high as he taught everyone, on the first day, how to set up a telescope and focused our myopic attention on life onto the powerful telescope and the cosmos it revealed, accompanying it with a matching explanation.
                                                    The second day brought forward a chance to peer at our star, the Sun, in the daytime. Vijay sir elaborated on sunspots and the equipment used to capture such images, followed by a session on processing raw images and software used in the process. The evening brought a chance to gaze at the sky again, with the clouds giving an unexpected cameo yet again through our observation events. With his telescope and amassed knowledge, he stood in the center of the circle of huddled enthusiasts listening with rapt attention even on the last session. Children covered under the Anokhi Pehel program (a non-profit organisation managed by students who share the common aim of helping the underprivileged children by providing them with education) also took a look from the telescope, excited faces beaming with happiness. Though the ProSang and the workshop concluded, the joy of looking at the sky and learning more about our universe has only grown stronger since the event.

                                                            </i>
                                            </p>
                                        </p>

                                    </div>
                                </div>

                                <div className="container">
                                    <h3 className="font-bold text-3xl my-4 sm:text-4xl">
                                        <span className="text-indigo-300 font-bold">Competitions</span>
                                    </h3>
                                    <div
                                        className="miniSep"
                                        style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                                    ></div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Smarthome} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            {" "}
                                                            Smart Home Challenge
                                                        </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        Home Automation event
                                                    <br></br><br></br>
                                                    </p>

                                                </div>
                                                <div className="card-read-more">
                                                    <a
                                                        href="https://drive.google.com/file/d/1lZ52-Zt56yKYf-28XuDZmLrCuru3SLsx/view?usp=sharing"
                                                        className="btn btn-link btn-block"
                                                    >
                                                        Problem Statement
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Daksha} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            {" "}
                                                            Daksha
                            </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        Manual Robotics event
                                                        <br></br><br></br>
                                                    </p>
                                                </div>
                                                <div className="card-read-more">
                                                    <a
                                                        href="https://drive.google.com/file/d/1MNVtwqbi2iFL4v9_r4wPKolSgnihSuRt/view?usp=sharing"
                                                        className="btn btn-link btn-block"
                                                    >
                                                        Problem Statement
                          </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Guardian} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            Guardian
                            </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        QuadCopter Frame construction and Flight Test</p>
                                                </div>
                                                <div className="card-read-more">
                                                    <a
                                                        href="https://drive.google.com/file/d/1gCVi-5_voxmHcBaYwQL1wMqe5N8-EhSa/view?usp=sharing"
                                                        className="btn btn-link btn-block"
                                                    >
                                                        Problem Statement
                          </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Blueprint} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            {" "}
                                                            BluePrint
                                                        </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        Mechanical Design Competition
                                                    <br></br><br></br>
                                                    </p>

                                                </div>
                                                <div className="card-read-more">
                                                    <a
                                                        href="https://drive.google.com/file/d/1HmXQ3XthYbb8crjRfPo2JJtu1BTgZYTb/view?usp=sharing"
                                                        className="btn btn-link btn-block"
                                                    >
                                                        Problem Statement
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={CodeWarz} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            {" "}
                                                            Code Warz
                                                        </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        A coding event
                                                    <br></br><br></br>
                                                    </p>

                                                </div>
                                                <div className="card-read-more">
                                                    <a
                                                        href="https://drive.google.com/file/d/10OQ7vS8LOqicjDlRcM1_BY3ptCSYyFkP/view?usp=sharing"
                                                        className="btn btn-link btn-block"
                                                    >
                                                        Problem Statement
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Idea} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            {" "}
                                                            Idea Presentation
                                                        </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        Innovative Ideas
                                                    <br></br><br></br>
                                                    </p>

                                                </div>
                                                <div className="card-read-more">
                                                    <a
                                                        href="https://drive.google.com/file/d/1DrckPVCVbcXvsTWq186qF2ggVk0QKNui/view?usp=sharing"
                                                        className="btn btn-link btn-block"
                                                    >
                                                        Problem Statement
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Idea} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            {" "}
                                                            Lost In Space
                                                        </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        An astronomy trivia quiz event
                                                    <br></br><br></br>
                                                    </p>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </section>
            {/* </Jumbotron> */}
            <section className="wrapper">
                <div className="container-f">
                    <div>
                        <p className="cent">
                            <a
                                class="btn btn-outline-dark btn-lg"
                                data-toggle="collapse"
                                href="#collapseExample2"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample2"
                            >
                                Prosang 2019
              </a>
                        </p>
                        {/* <div className="colarea"> */}
                        <div className="collapse colarea" id="collapseExample2">
                            <div className="content yearevent">
                                <div className="sm:flex items-center max-w-screen-xl p-10 sm:p-16 md:p-24">
                                    <div className="sm:w-2/3 sm:mr-10">
                                        <div className="text">
                                            {/* <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">about us</span> */}

                                            <h3 className="font-bold text-3xl my-4 sm:text-4xl">
                                                <span className="text-indigo-300 font-bold">Theme</span>
                                            </h3>
                                            <div
                                                className="miniSep"
                                                style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                                            ></div>
                                            <h5 className="font-bold text-3xl my-4 sm:text-4xl">
                                                <span className="text-indigo-300 font-bold">Making Humanity Interplanetary
</span>
                                            </h5>
                                            <div
                                                style={{
                                                    border: "2px solid rgb(29, 29, 29)",
                                                    padding: "10px",
                                                    borderRadius: "8px",
                                                }}
                                            >
                                                <div style={{ padding: "2px" }}>
                                                    <p className="text-gray-700">
                                                        <h5 className="font-bold text-3xl my-4 sm:text-4xl">
                                                            <span className="text-indigo-300 font-bold">Speakers</span>
                                                        </h5>
                                                        <div
                                                            className="miniSep"
                                                            style={{ marginBottom: "40px", background: "rgb(204, 67, 67)", width: "100%" }}
                                                        ></div>
                                                        <ul className="remul">
                                                            <li> <b>Mr. Ravi Prakash
                                                            -Winner, Amazon Robotics Challenge-Japan 2017
(Ph.D. Scholar, IIT Kanpur) </b><a href="https://www.linkedin.com/in/ravi-prakash-a93ab9a8/?originalSubdomain=in"><i className="fab fa-linkedin fa-lg"></i></a></li>

                                                            <br></br>
                                                            Autonomous Robots for Mars Civilizations
                                                        <hr></hr>
                                                            <li><b>Mr. Ganesh Shankar
(Co-Founder and CEO, FluxGen Engineering) </b><a href="https://www.linkedin.com/in/ganesh-shankar/?originalSubdomain=in"><i className="fab fa-linkedin fa-lg"></i></a></li><br></br>
                                                        Internet of Things
                                                        <hr></hr>
                                                            <li><b>Prof. Sanjay Mittal
(Ex HOD and Coordinator Wind Tunnel, IIT Kanpur) </b><a href="https://www.iitk.ac.in/new/sanjay-mittal"><i className="fab fa-linkedin fa-lg"></i></a><br></br><br></br>
                                                        The Science of Flight<hr></hr></li>
                                                            <li><b>Dr. GR Sinha
(Distinguished ACM Speaker) </b><a href="https://www.linkedin.com/in/dr-g-r-sinha-65713b18/"><i className="fab fa-linkedin fa-lg"></i></a></li><br></br>
                                                         Applications of Image Processing for Space Explorations
                                                        <hr></hr>

                                                        </ul>
                                                    </p>

                                                </div>
                                            </div>
                                            <h3 className="font-bold text-3xl my-4 sm:text-4xl">
                                                <span className="text-indigo-300 font-bold">Other Events</span>
                                            </h3>
                                            <div
                                                className="miniSep"
                                                style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                                            ></div>
                                            <div>


                                                <span><h6>Workshop for school students and teachers on robotics.
</h6>
                                                </span><br></br>
                                                <h6><span>Project exhibition-witnessed by professor Sanjay Mittal -IIT Kanpur </span>
                                                    <a href="https://www.iitk.ac.in/new/sanjay-mittal"><i className="fas fa-user fa-lg"></i></a></h6>

                                                <br></br>
                                                <h6><span className="text-indigo-200">Airshow by Vortex RC<b> </b>
                                                    <a href="https://youtu.be/MFRvO8K-4iU"><i style={{ color: "red" }} className="fab fa-youtube fa-lg"></i></a>
                                                </span></h6><br></br>
                                                <h6><span className="text-indigo-200">Launch of TSAW (a drone startup, emerged from Robotics and Aeroclub MNNIT)<b> </b>
                                                    <a href="https://tsaw.tech/"><i className="fas fa-link fa-lg"></i></a>
                                                </span></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="container">
                                    <h3 className="font-bold text-3xl my-4 sm:text-4xl">
                                        <span className="text-indigo-300 font-bold">Competitions</span>
                                    </h3>
                                    <div
                                        className="miniSep"
                                        style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
                                    ></div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Smarthome} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            {" "}
                                                            Aerial Robotics Championship (NARC)
                                                        </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        Designing and flying RC aircraft
                                                    <br></br><br></br>
                                                    </p>

                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Daksha} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            {" "}
                                                            Extempore
                            </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        electronic circuit design
                                                        <br></br><br></br>
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Guardian} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            CodeWarZ
                            </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        A competitive coding event </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4">
                                            <div className="card cardev">
                                                {/* <a
                                                    className="img-card"

                                                >
                                                    <img src={Blueprint} />
                                                </a> */}
                                                <div className="card-content cardev-content">
                                                    <h4 className="card-title cardev-title">
                                                        <a>
                                                            {" "}
                                                            Posiedon (NARC)
                                                        </a>
                                                    </h4>
                                                    <p className="phonetxt">
                                                        A gaming event
                                                    <br></br><br></br>
                                                    </p>

                                                </div>

                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}
