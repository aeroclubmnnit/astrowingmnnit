import React, { useState, useEffect } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import Loading from "../../Animations/Loading";
import "react-quill/dist/quill.snow.css";
import "../../css/featured-proj.css";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"

function Blogs() {
  const [blogs, SetBlogs] = useState([]);

  useEffect(() => {
    document.title = `Blogs | ${REACT_APP_BASE_TITLE}`;
    fetch(`${REACT_APP_SERVER}/api/blogs/toUI`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => SetBlogs(data));
  }, []);

  const [page, SetPage] = useState(1);
  const blogs_per_page = 9;
  const no_of_pages = Math.ceil(blogs.length / blogs_per_page);
  const year = {
    1: "1st year",
    2: "2nd year",
    3: "3rd year",
    4: "Final year",
  };

  const branch = {
    '0': 'Biotechnology',
    '1': 'Civil Engg.',
    '2': 'Electrical Engg.',
    '3': 'Mechanical Engg.',
    '4': 'Computer Science Engg.',
    '5': 'Electronics and Comm. Engg.',
    '6': 'Production and Industrial Engg.',
    '8': 'Information Technology',
    '9': 'Chemical Engg.',
    'x': 'NA'
  }

  return (
    <>
      <Loading time={2} />
      <div className="cont">
        <h3 className="my-3 titleBold d-flex justify-content-center topic">
          <p className="" style={{ marginBottom: "0px", textAlign: "center" }}>BLOGS</p>
        </h3>
        <div
          className="miniSep"
          style={{ marginBottom: "40px", background: "rgb(204, 67, 67)" }}
        ></div>

        <div
          className="main"
          style={{ overflow: "hidden", minHeight: "31.7vh" }}
        >
          <ul className="cards mx-auto">
            {blogs
              .slice((page - 1) * blogs_per_page, page * blogs_per_page)
              .map(blog => (
                <li className="cards_item" data-aos="fade-up" data-aos="flip-left" data-aos-easing="linear" key={blog._id}
                  data-aos-duration="1500">
                  <div className="card cardproj">
                    <div className="card_image">
                      <img className="evfeatured" src={blog.pic || 'https://lh3.googleusercontent.com/PPRLO6cS9pz1oyVlPhoHBMH3u9LKlLJEBQ7kJMzziAav-C7GEp9vVpJwfky-hsrlR4h0xisARPSzF19VIPmRb31Wpf6xScPJKOggnz4rPDqSJG9FPr9m-BMyDr9zrABeZ8VsDcm9=w2400'} style={{ width: '100%', minHeight: '16rem' }} />
                    </div>
                    <div className="card_content forphone forphone1" style={{ width: '100%' }}>
                      <h2 className="card_title forphone forphone2" style={{ width: '100%', minHeight: '4rem' }}>{blog.title}</h2>
                      <p className="card_text forphone" style={{ width: '100%', height: '2rem' }}>
                        <i className="fa fa-user mr-3 ml-1"></i> by{" "}
                        {
                          branch[blog.postedBy.registration_no[4]] === 'NA' || blog.postedBy.year === -1 || blog.postedBy.linkedin_url ===
                            "https://www.linkedin.com/in/username/" ?
                            <>
                              {blog.postedBy.name}
                            </>
                            :
                            <OverlayTrigger
                              placement="right"
                              delay={{ show: 250, hide: 400 }}
                              overlay={
                                <Tooltip id={`tooltip-${blog._id}`}>
                                  Branch - {branch[blog.postedBy.registration_no[4]]} <br />
                                  {year[blog.postedBy.year]}
                                </Tooltip>}
                            >
                              <div className='d-inline'>
                                <a href={blog.postedBy.linkedin_url} target="_blank" style={{ textDecoration: 'none' }}>
                                  {blog.postedBy.name}
                                </a>
                              </div>
                            </OverlayTrigger>
                        }
                      </p>
                      <Button
                        className="btns card_btns"
                        variant="primary"
                        href={`/blogs/${blog._id}`}
                        style={{ marginTop: 10 }}
                      >
                        Read More
                  </Button>
                    </div>
                  </div>
                </li>
              )
              )}
          </ul>
          {!blogs.length && (
            <h3 className="text-center mt-5">No blogs available...!</h3>
          )}
          <div className="float-right mr-5 mb-3 mt-5">
            {page > 1 && (
              <Button
                className="mx-1"
                variant="primary"
                onClick={() => {
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
                  SetPage((page) => page + 1);
                }}
              >
                Next <i className="fa fa-angle-double-right"></i>
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
