import React, { useEffect } from "react";
import Loading from "../../Animations/Loading";
import "../../css/Alumni.css";
import { Link } from "react-router-dom";
import { REACT_APP_BASE_TITLE } from "../../grobalVars"

export default function Collaboration() {
  useEffect(() => {
    document.title = `Collaborate | ${REACT_APP_BASE_TITLE}`;
  }, [])

  return (
    <>
      <Loading time={2} />
      <div className="pagesa">
        <div className="overlaya starbg">
          <div className="pageTitlea titleBolda">Collaborate</div>
          <div className="py-2">
            <p
              className="font-italic text-center my-5 quote"
              style={{ fontSize: "1.5rem" }}
            >
              "A strong team can take any vision and turn it into reality" -John Carmack.

          </p>
          </div>
        </div>
      </div>

      <div className="container col-10 col-md-10">

        <div className="my-5 collaborate" style={{ border: "3px solid rgb(22 ,101, 151)", padding: "20px", borderRadius: "7px" }}>
          <h4 className="my-3 titleBold d-flex justify-content-center topic">
            <p className="" style={{ marginBottom: "0px", textAlign: "center" }}>Who are we</p>
          </h4>
          <div
            className="miniSep"
            style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
          ></div>
          <p className="text-xl paragr" style={{ textAlign: "justify" }}>
          Astrowing MNNIT is a student body under the Student Activity Centre (SAC), MNNIT Allahabad. We are a group of like-minded engineering students from all the college departments. We are passionate about science and believe that engineers and scientists should work in unison for humanity's real progress. Being from a technical background, we have expertise in several fields like machine learning, data analysis, programming, electronics, designing, etc <Link to='/#restheme'>(Research Themes) </Link> 
Also, we continuously strive to expand our knowledge in theoretical concepts of physics and astronomy. We have also completed various projects like 3D printing telescopes, detecting galaxies using machine learning, web-based quantum simulator, etc. (Link).
We also have some experience observing the sky both through the naked eye and telescopes. 
We offer our knowledge and commitment for any possible collaborations.</p>

        </div>
        
        <div className="my-5 collaborate" style={{ border: "3px solid rgb(22 ,101, 151)", padding: "20px", borderRadius: "7px" }}>
          <h4 className="my-3 titleBold d-flex justify-content-center topic">
            <p>Technical Collaboration</p>
          </h4>
          <div
            className="miniSep"
            style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
          ></div>
          <p className="text-xl paragr" style={{ textAlign: "justify" }}>
          Suppose you have any problem statement where our knowledge and skills in science and engineering can be useful for any scientific work, either in the industry or academia. In that case, we are open to all sorts of collaborations. We assure you of full professionalism and dedication for any collaborative projects that may take place.
          </p>
        </div>
        <div className="my-5 collaborate" style={{ border: "3px solid rgb(22 ,101, 151)", padding: "20px", borderRadius: "7px" }}>
          <h4 className="my-3 titleBold d-flex justify-content-center topic">
            <p style={{ textAlign: "center" }}>Collaboration for Learning and Workshops</p>
          </h4>

          <div
            className="miniSep"
            style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
          ></div>
          <p className="text-xl paragr" style={{ textAlign: "justify" }}>
          Apart from technical expertise, we also have several workshops at both the school and college level, which will surely help you expand your knowledge in the realm of astronomy, whether you are a beginner or have some knowledge beforehand. For more details, refer to this page <a href="/workshop" style={{textDecoration:"none", fontWeight:"bold"}}>Jigyasa</a>.
          </p>
        </div>
      </div>
    </>
  );
}
