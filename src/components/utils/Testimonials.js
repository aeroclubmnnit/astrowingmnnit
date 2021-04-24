import React from "react";
import "../../css/testimonials.css";
import shrey from "../../images/alumni/SHREY Dixit.jpg";
import aman from "../../images/alumni/Aman Sharma(1).jpg"


export default function Testimonials() {
  return (

    <section className="testimonial text-center">
      <div className="container">
      <div
        className="pageTitle titleBold headingc white-headingc"
        data-aos="fade-down"
        style={{ marginBottom: "0px", color:"rgb(25, 25, 25)"}}
      >
        Testimonials
      </div>
      <div className="miniSep" style={{ marginBottom: '30px' }} ></div>
        {/* <Jumbotron> */}
        
        <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval={5000} data-duration={2000} data-aos="zoom-in-down">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="testimonial4_slide blockcol">
                <img src={aman} className="img-circle img-responsive" /> 
                {/* <div className="scrollert" id="stylet-2"> */}
                <p className="testfont scrollert" id="stylet-2">"Indeed the best place to learn and show your creativity .Thanks to all the juniors, seniors, professors and my colleagues for supporting and guiding me to lead the club. Happy to see that the club is expanding continuously with new Astrowing dimension. The experience gained has helped me a lot to adjust to my corporate life. It was a roller coaster ride for me and I have enjoyed every bit of it!"</p>

                {/* <div className="miniSep" style={{ marginBottom: '25px', width: '70%', height: '3px' }} ></div> */}
                <h4>Aman sharma</h4>
                <a href="https://www.linkedin.com/in/ssjayant" target="_blank">
                  <i className="fab fa-linkedin fa-3x mx-2 colchange"></i>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial4_slide blockcol">
                <img src={shrey} className="img-circle img-responsive" /><p className="testfont scrollert" id="stylet-2">"Among the darkest of the nights, we were able to conjure the brightest of the stars, a unique constellation; Astronomy wing, MNNIT. We learnt from yesterday, lived for today and hoped for a better tomorrow. But the important thing was that we never stopped questioning. I hope these qualities are passed down to our budding astronauts in our Astronomy wing, MNNIT while challenging all the limits and exploring the beyond.
                "</p>
                {/* <div className="miniSep" style={{ marginBottom: '25px', width: '70%', height: '3px' }} ></div> */}
                <h4>Shrey Dixit</h4>
                <a href="linkedin.com/in/shrey-dixit" target="_blank">
                  <i className="fab fa-linkedin fa-3x mx-2 colchange"></i>
                </a>'
              </div>
            </div>
            
            
            
          </div>
          <a className="carousel-control-prev" href="#testimonial4" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#testimonial4" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
        {/* </Jumbotron> */}
      </div>
      
    </section>
  );
}