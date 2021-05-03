import React, { useEffect } from "react";
import Loading from "../../Animations/Loading";
import "../../css/Sponsor.css";
import mnnit from "../../images/utils/collegelogo.png";
import cisco from "../../images/Sponsors/cisco.png";
import teqip from "../../images/Sponsors/teqip3.png";
import cosmo3d from "../../images/Sponsors/cosmo3d.png";
import knowhow from "../../images/Sponsors/knowhow.png";
import pcb from "../../images/Sponsors/pcb.png";
import ultratech from "../../images/Sponsors/ultra.png";
import alumni from '../../images/Sponsors/alumni2.PNG';
import { REACT_APP_BASE_TITLE } from "../../grobalVars"
import tsaw from "../../images/Sponsors/tsawlogo.png";

export default function Ṣponsors() {
  useEffect(() => {
    document.title = `Sponsors | ${REACT_APP_BASE_TITLE}`;
  }, [])

  return (
    <>
      <Loading time={2} />
      <div className="pagesg">
        <div className="overlayg starbg">
          <div className="pageTitleg titleBoldg">Sponsors</div>
          <div className="py-2">
            <p
              className="font-italic text-center my-5 quote"
              style={{ fontSize: "1.5rem" }}
            >
              "I was going to an engineering school, but I fell in love with physics."

          </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">

        <div className="jumbotron">
          <h4 className="my-3 titleBold d-flex justify-content-center topic">
            <p className="" style={{ marginBottom: "0px", textAlign: "center" }}>About us</p>
          </h4>
          <div
            className="miniSep"
            style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
          ></div>
          <div className="">
            <div className="text-center">
              <p>

                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                  Who are we?
                                                     </button>
              </p>

              <div class="collapse collapsews" id="collapse11">
                <div class="card card-body details" >
                  <p className="just">Astrowing MNNIT, an offshoot of its parent club Aeroclub MNNIT, focuses entirely on <b>astronomy</b> and <b>theoretical sciences</b>. We operate as a separate wing under Aeroclub MNNIT, under Student Activity Centre(SAC), MNNIT Allahabad.
Our expertise lies in blending our engineering skills with our passion for the sciences.
Our work spans equally among theoretical domains in core sciences and practical disciplines like <b>space science</b>, <b>quantum computing</b>, <b>machine learning</b>, <b>and data science</b> applications in astronomy, designing and 3D printing telescopes, observing the night sky through telescopes, and a lot more!</p>

                  <p className="just">We also conduct regular stargazing sessions, both with the naked eye and through our telescope, a different and out-of-the-world experience for students that amuse them and relieve them from their stressful lives. Also, we regularly organize quizzes and other intriguing activities related to sciences that are fun and enhance the student’s knowledge.
                  In short, a lot of exciting stuff can happen when engineering meets science, and that's what we do.

</p>


                </div>
              </div>

              <p>

                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                  How can You Help Us?
                                                     </button>
              </p>

              <div class="collapse collapsews" id="collapse12">
                <div class="card card-body details">

                  <p className="just">We ask for <b>support</b> suitable to your capability. This support can be in the form of:<br></br><br></br>
                    <ul>
                      <li>Financial support</li>
                      <li>Helping us purchase equipment for projects and competitions</li>
                      <li>Any form of concession in equipments</li>
                      <li>Any form of technical mentorship</li>
                      <li>Helping us with industrial connections</li>
                      <li>Connecting us with other people who can help us</li>
                    </ul>
                  </p>

                </div>
              </div>

              <p>

                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                  Why Sponsor Us?
                                                     </button>
              </p>

              <div class="collapse collapsews" id="collapse13">
                <div class="card card-body details">

                  <p className="just">Engineering and sciences are not different fields; they are two approaches to the quest of understanding the universe. Without engineering, science is mere philosophy and vice versa.
                  From telephones to CERN Supercollider, from exciting new materials to LIGO detectors, from semiconductors to quantum computing to discovery of cosmos, no invention could ever occur without the collaboration of science and engineering.
However, right after JEE, when students who are fueled by their passion for sciences enter into engineering, they find it challenging to continue exploring the sciences, and that's where we facilitate interests. They do a lot of exciting work in the realm of sciences as a part of our clubs. Many even plan to take sciences as their <b>graduate studies</b>, thus contributing to the scientific domain with their engineering skills.
Also, many people consider astronomy as a hobby, which helps them genuinely have an out-of-world experience, forgetting their worries and stressful lives, all the while peering at the celestial beauties.

                  </p>
                  <p className="just">However, to do all this and beyond in the form of industry and academia collaborations, we need the <b>right equipment</b> in telescopes and other expensive accessories. Right now, we have only a basic telescope, which we want to upgrade soon.
                  </p>
                  <p className="just">Also, being in an engineering college, <b>any form of academic / industrial mentorship</b> will help our curious individuals continue their passion for sciences and make something genuinely innovative when blended with their engineering expertise. If you choose to sponsor us, <b>we'll promote you</b> from all our social media accounts and our website's homepage too; this holds true regardless of whether you're an alumnus, individual or a company.

                  </p>
                  <p className="just"><b>If you resonate with our cause and want to help us in any form, contact us at : </b> <i><a href="https://aeroclubmnnit.tk/" style={{ textDecoration: "none", color: "red", fontWeight: "bold" }}>AEROCLUB MNNIT</a></i>

                  </p>


                </div>
              </div>


            </div>
          </div>
        </div>

        <div
          className="d-flex flex-wrap mx-auto justify-content-center align-items-center"
          style={{ width: "90%" }}
        >


          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="http://www.mnnit.ac.in/"
                target="_blank"
              >
                <img
                  className="card-img-top mx-auto imgphone sponimg"
                  src={mnnit}
                  alt="mnnit"
                  srcSet=""
                />
              </a>
            </div>

            <div className="card-body d-flex flex-column transition: transform 400ms ease-out">
              {/* <h5 class="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href="http://www.mnnit.ac.in/"
                target="_blank"
              >
                MNNIT ALLAHABAD
              </a>
              <p className="card-text txt scroller" id="style-2">
                <div className="">
                  Motilal Nehru National Institute of Technology Allahabad,
                  Prayagraj (MNNIT) is an Institute of National Importance with
                  total commitment to quality and excellence in academic pursuits.
                  It was established as one of the Seventeen Regional Engineering
                  Colleges of India in the year 1961 as a joint enterprise of
                  Government of India and Government of Uttar Pradesh, and was an
                  associated college of University of Allahabad, which is the
                third oldest university in India</div>
              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>

          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="https://www.cisco.com/c/m/en_in/thingqbator.html"
                target="_blank"
              >
                <img
                  className="card-img-top mx-auto sponimg"
                  src={cisco}
                  alt="cisco"
                  srcSet=""
                />
              </a>
            </div>
            <div className="card-body d-flex flex-column" style={{ transition: "transform 400ms ease-out" }}>
              {/* <h5 class="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href="https://www.cisco.com/c/m/en_in/thingqbator.html"
                target="_blank"
              >
                Cisco ThingQbator
              </a>
              <p className="card-text txt scroller" id="style-2">
                <div className="">
                  Encourages a rapid prototyping mindset with 24/7 access to the
                  makerspace and all the equipment therein as well as active
                mentorship and training</div>
              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>

          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="https://tsaw.tech/index.php"
                target="_blank"
              >
                <img
                  className="card-img-top mx-auto sponimg"
                  src={tsaw}
                  alt="tsaw"
                  srcSet=""
                />
              </a>
            </div>
            <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
              {/* <h5 className="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href="https://tsaw.tech/index.php"
                target="_blank"
              >
                TSAW
              </a>
              <p className="card-text txt scroller" id="style-2">
                <div className="">
                  TSAW's establishment depends on the standards of coordinated
                  effort and creation with long haul objectives in sight. The
                  errands are not straightforward and the clock is ticking as of
                  now. With numerous players as of now in the part, it will be a
                  long and hard assignment, be that as it may, we accept with our
                  exceptionally determined and serious group, it wouldn't be some
                  time before we accomplish every one of our objectives,
                empowering humankind to flourish without any problem.</div>
              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>

          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="https://www.facebook.com/cosmo3D.India/"
                target="_blank"
              >
                <img

                  className="card-img-top mx-auto sponimg"
                  src={cosmo3d}
                  alt="cosmo3d"
                  srcSet=""
                />
              </a>
            </div>
            <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
              {/* <h5 className="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href="https://www.facebook.com/cosmo3D.India/"
                target="_blank"
              >
                Cosmo 3D
              </a>
              <p className="card-text txt scroller" id="style-2">
                <div className="">
                  Cosmo 3D is a rapid prototyping-based startup, currently focused on high-quality 3D or printing service in Allahabad & nearby regions and achieved big goals in a short span of time. The company deals with product development, research aid, 3D  printing of functional models, small-batch manufacturing, customized gifts, etc.</div>

              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>

          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="https://www.teqip.in/"
                target="_blank"
              >
                <img

                  className="card-img-top mx-auto sponimg"
                  src={teqip}
                  alt="teqip"
                  srcSet=""
                />
              </a>
            </div>
            <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
              {/* <h5 className="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href="https://www.teqip.in/"
                target="_blank"
              >
                TEQIP 3
              </a>
              <p className="card-text txt scroller" id="style-2">
                <div className="">
                  TEQIP is a Government of India project, assisted by the world bank. TEQIP Aims to strengthen few affiliated technical universities to improve their policies, academics, and management practices</div>

              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>

          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="https://knowhow3d.in/"
                target="_blank"
              >
                <img

                  className="card-img-top mx-auto sponimg"
                  src={knowhow}
                  alt="knowhow"
                  srcSet=""
                />
              </a>
            </div>
            <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
              {/* <h5 className="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href="https://knowhow3d.in/"
                target="_blank"
              >
                Knowhow 3D
              </a>
              <p className="card-text txt scroller" id="style-2">
                <div className="">
                  Knowhow 3D is a popular 3D Printing studio contributing its part in changing the era of education they take pride in helping engineering and school students in their various innovations and projects. With their knowledge and experience in 3D printing, they provide 3D printing services/job work with the best quality in the least time</div>

              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>

          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href=""
                target="_blank"
              >
                <img

                  className="card-img-top mx-auto sponimg"
                  src={pcb}
                  alt="knowhow"
                  srcSet=""
                />
              </a>
            </div>
            <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
              {/* <h5 className="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href=""
                target="_blank"
              >
                PCB House
              </a>
              <p className="card-text txt scroller" id="style-2">
                <div className="">
                  PCB House is an electronics store in Allahabad providing services to college and school students and covers a large market in Allahabad and nearby regions. The store deals with providing electronics components and equipment, project development, PCB manufacturing, etc.</div>

              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>

          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="http://www.mnnit.ac.in/"
                target="_blank"
              >
                <img
                  className="card-img-top mx-auto imgphone alumnilogowdth sponimg "
                  src={alumni}
                  alt="mnnit"
                  srcSet=""
                />
              </a>
            </div>

            <div className="card-body d-flex flex-column transition: transform 400ms ease-out">
              {/* <h5 className="card-title text-center">MNNIT Allahabad</h5> */}
              <a
                className="card-title text-center sponabt"
                href="https://alumni.mnnit.ac.in/"
                target="_blank"
              >
                MNNIT Alumni Association
              </a>
              <p className="card-text txt scroller" id="style-2">
                <div className="">
                  MNNIT Alumni Association is an organisation set up at college level to have a smooth functioning between our Alumni network base and the college for the benefit of college students. It’s a helping hand for students and extends various supports to students in various forms.</div>
              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>

          <div className="card card-item shadow c1">
            <div className="img-wrappers mx-auto">
              <a
                className="card-title text-center sponimg"
                href="https://www.ultratechcement.com/"
                target="_blank"
              >
                <img

                  className="card-img-top mx-auto sponimg"
                  src={ultratech}
                  alt="alumni"
                  srcSet=""
                />
              </a>
            </div>
            <div className="card-body d-flex flex-column transition: transform 400ms ease-out;">
              <a
                className="card-title text-center sponabt"
                href="https://www.ultratechcement.com/"
                target="_blank"
              >
                Ultratech Cement
              </a>
              <p className="card-text txt scroller" id="style-2">
                <div className="">
                  Global major in cement industry and among the world's largest cement producer.</div>

              </p>
              {/* <a href="#" className="btn btn-danger mx-auto">Know More</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
