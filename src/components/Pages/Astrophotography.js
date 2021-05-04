import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Loading from "../../Animations/Loading";
import "../../css/featured-proj.css";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars";
import { animateScroll as scroll } from 'react-scroll'

function AstrophotoGraphy() {
  const [photos, SetPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [no_of_pages, setNoOfPages] = useState(0);
  const [page, SetPage] = useState(1);
  const [currTag, setCurrTag] = useState('')
  document.title = `Astrophotography | ${REACT_APP_BASE_TITLE}`;

  useEffect(() => {
    fetch(`${REACT_APP_SERVER}/api/astrophotographies/approved`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        SetPhotos(data);
        setCurrTag('')
        setFilteredPhotos(data);
        setNoOfPages(Math.ceil(data.length / photos_per_page))
      });
  }, []);

  const photos_per_page = 9;

  const handleTagFilter = (tag) => {
    setCurrTag(tag.name)
    scroll.scrollToTop()
    setFilteredPhotos(
      photos.filter((item) => item.tags.some((itag) => itag._id === tag._id))
    );
    SetPage(1)
    setNoOfPages(Math.ceil(photos.filter((item) => item.tags.some((itag) => itag._id === tag._id)).length / photos_per_page));
  };

  return (
    <>
      <Loading time={2} />
      <div className="cont astrobg">
        <h3 className="my-3 titleBold d-flex justify-content-center topic">
          <p className="" style={{ marginBottom: "0px", textAlign: "center" }}>
            ASTROPHOTOGRAPHY
          </p>
        </h3>
        <div
          className="miniSep"
          style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
        >
        </div>
        {
          currTag && <h2 className='text-center'><span className="badge badge-primary my-2">
            {currTag}
          </span></h2>
        }
        <div
          className="main"
          style={{ overflow: "hidden", minHeight: "31.7vh" }}
        >
          <ul className="cards">
            {filteredPhotos
              .slice((page - 1) * photos_per_page, page * photos_per_page)
              .map((photo) => (
                <li
                  className="cards_item"
                  data-aos="fade-up"
                  data-aos="flip-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  key={photo.id}
                >
                  {/* <div className="container">
        <h3 className="title">Text fadeIn bottom</h3>
        <div className="content card cardproj hovpic">
          <a href={`/astrophotography/${photo.id}` }>
            <div className="content-overlay" />
            <img className="content-image" src={photo.pic} />
            <div className="content-details fadeIn-bottom">
              <h3 className="content-title">Click to Know More</h3>
              <p className="content-text">This is a short description</p>
            </div>
          </a>
        </div>
      </div> */}
                  <div className="card hovpic astroproj">
                    {/* <p className="content_img"> */}
                      <img
                        // className="evfeatured"
                        src={photo.pic}
                        // style={{
                        //   width: "100%",
                        //   maxHeight: "18rem",
                        //   minHeight: "18rem",
                        // }}
                      />
                      
                      <div
                        className="card_text forphone forphone3 img-text"
                        style={{ width: "100%", height: "3rem" }}
                      >
                        {/* <strong>Tags : </strong> */}
                        <a href={`/astrophotography/${photo.id}`} ><p style={{paddingLeft:"2px"}} className="clickable">Click to Know More </p></a>
                        {photo.tags.map((tag, i) => (
                          <h5
                            className="d-inline"
                            key={i}
                            style={{ cursor: "pointer" }}
                            onClick={(e) => handleTagFilter(tag)}
                          >
                            <span className="badge badge-primary my-1 mx-1">
                              {tag.name}
                            </span>
                          </h5>
                        ))}
                      </div>
                    {/* </p> */}
                    {/* <div
                      className="card_content forphone forphone1"
                      style={{ width: "100%" }}
                    > */}
                    {/* <h2
                        className="card_title forphone text-center my-3"
                        style={{
                          width: "100%",
                          fontSize: "large",
                        }}
                      >
                        {photo.title}
                      </h2> */}
                    {/* <p
                        className="card_text forphone forphone3"
                        style={{ width: "100%", height: "3rem" }}
                      >
                        <strong>Tags : </strong>
                        {photo.tags.map((tag, i) => (
                          <h5
                            className="d-inline"
                            key={i}
                            style={{ cursor: "pointer" }}
                            onClick={(e) => handleTagFilter(tag)}
                          >
                            <span className="badge badge-primary my-1 mx-1">
                              {tag.name}
                            </span>
                          </h5>
                        ))}
                      </p> */}
                    {/* <Button
                        className="btns card_btns"
                        href={`/astrophotography/${photo.id}`}
                        style={{
                          marginTop: 10,
                          backgroundColor: "#007bff",
                          color: "white",
                        }}
                      >
                        Read More
                      </Button> */}
                    {/* </div> */}
                  </div>
                </li>
              ))}
          </ul>
          <div className="float-right mr-5 mb-3 mt-5">
            {page > 1 && (
              <Button
                className="mx-1"
                variant="primary"
                onClick={() => {
                  scroll.scrollToTop()
                  SetPage((page) => page - 1);
                }}
              >
                <i className="fa fa-angle-double-left"></i> Previous
              </Button>
            )}
            {page < no_of_pages && (
              <Button
                variant="primary"
                className="mx-1"
                onClick={() => {
                  scroll.scrollToTop()
                  SetPage((page) => page + 1);
                }}
              >
                Next <i className="fa fa-angle-double-right"></i>
              </Button>
            )}
          </div>
          {
            photos.length !== filteredPhotos.length && <Button className='float-left my-3' onClick={e => {
              setFilteredPhotos(photos)
              SetPage(1)
              setNoOfPages(Math.ceil(photos.length / photos_per_page))
              scroll.scrollToTop()
              setCurrTag('')
            }}>All Images</Button>
          }
        </div>
      </div>
    </>
  );
}

export default AstrophotoGraphy;
