import React from 'react'
import "../../css/Eventhome.css";
import '../../css/Sponsorhome.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import mnnit from "../../images/utils/collegelogo.png";
import cisco from "../../images/Sponsors/cisco.png";
import teqip from "../../images/Sponsors/teqip3.png";
import alumni from "../../images/Sponsors/alumni2.PNG";
import cosmo3d from "../../images/Sponsors/cosmo3d.png";
import knowhow from "../../images/Sponsors/knowhow.png";
import pcb from "../../images/Sponsors/pcb.png";
import ultratech from "../../images/Sponsors/ultratech.png";
import tsaw from "../../images/Sponsors/tsawlogo.png";

export default function Sponsorhome() {
    return (
        <div className="container-fluid starbg">

            <div
                className="pageTitle titleBold headingc white-headingc"
                style={{ color: "white", marginBottom: "10px" }}
                data-aos="fade-down"
            >
                Our Sponsors
                    </div>
            <div className="miniSep"></div>
            <div className="container sponsor-home my-3 nopad">
                <OwlCarousel className='owl-theme' autoplay autoplaySpeed={2000} autoplayHoverPause responsive={{
                    0: {
                        items: 1
                    },
                    570: {
                        items: 2
                    },
                    800: {
                        items: 3
                    },
                    1230: {
                        items: 4
                    }
                }} loop margin={40} nav >

                    <div className='item' >
                        <div className="card spodes" style={{ width: '9rem' }}>
                            <a
                                className="card-title text-center mx-auto"
                                href="http://www.mnnit.ac.in/"
                                target="_blank"
                            >
                                <img
                                    className="card-img-top mx-auto imgphone sizelogo"
                                    src={mnnit}
                                    alt="mnnit"
                                    srcSet=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="card spodes" style={{ width: '15rem' }}>
                            <a
                                className="card-title text-center"
                                href="https://www.cisco.com/c/m/en_in/thingqbator.html"
                                target="_blank"
                            >
                                <img
                                    className="card-img-top mx-auto  imgphone"
                                    src={cisco}
                                    alt="cisco"
                                    srcSet=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="card spodes" style={{ width: '15rem' }}>
                            <a
                                className="card-title text-center"
                                href="https://tsaw.tech/index.php"
                                target="_blank"
                            >
                                <img
                                    className="card-img-top mx-auto  imgphone"
                                    src={tsaw}
                                    alt="tsaw"
                                    srcSet=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="card spodes" style={{ width: '15rem' }}>
                            <a
                                className="card-title text-center"
                                href="https://www.facebook.com/cosmo3D.India/"
                                target="_blank"
                            >
                                <img

                                    className="card-img-top mx-auto imgphone"
                                    src={cosmo3d}
                                    alt="cosmo3d"
                                    srcSet=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="card" style={{ width: '15rem' }}>
                            <a
                                className="card-title text-center"
                                href="https://www.teqip.in/"
                                target="_blank"
                            >
                                <img

                                    className="card-img-top mx-auto imgphone"
                                    src={teqip}
                                    alt="teqip"
                                    srcSet=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="card" style={{ width: '15rem' }}>
                            <a
                                className="card-title text-center"
                                href="https://knowhow3d.in/"
                                target="_blank"
                            >
                                <img

                                    className="card-img-top mx-auto imgphone"
                                    src={knowhow}
                                    alt="knowhow"
                                    srcSet=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="card" style={{ width: '12rem' }}>
                            <a
                                className="card-title text-center"
                                href=""
                                target="_blank"
                            >
                                <img

                                    className="card-img-top mx-auto imgphone"
                                    src={pcb}
                                    alt="knowhow"
                                    srcSet=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="card" style={{ width: '12rem' }}>
                            <a
                                className="card-title text-center"
                                href=""
                                target="_blank"
                            >
                                <img

                                    className="card-img-top mx-auto imgphone"
                                    src={alumni}
                                    alt="knowhow"
                                    srcSet=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="card spodes" style={{ width: '15rem' }}>
                            <a
                                className="card-title text-center"
                                href="https://www.ultratechcement.com/"
                                target="_blank"
                            >
                                <img

                                    className="card-img-top mx-auto imgphone"
                                    src={ultratech}
                                    alt="Ultratech Cement"
                                    srcSet=""
                                />
                            </a>
                        </div>
                    </div>
                </OwlCarousel>
                <div className='d-flex justify-content-center mt-5 '>
                    <a href="/sponsors" className="btn btn-primary mx-2">View More</a>
                    <a href="mailto:aeroclubclub@mnnit.ac.in?subject=Regarding%20sponsoring%20the%20Aero%20Club%20MNNIT&amp;body=We%20would%20like%20to%20sponsor%20the%20Aero%20Club%20MNNIT." target="__blank" className='btn btn-primary'>Sponsor Us</a>
                </div>
            </div>
        </div>
    )
}
