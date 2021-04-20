import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Loading from "../../Animations/Loading";
import "../../css/Gallery.css";
import { REACT_APP_BASE_TITLE, REACT_APP_SERVER } from "../../grobalVars"

export default function Gallery() {
  useEffect(() => {
    document.title = `Gallery | ${REACT_APP_BASE_TITLE}`;
  }, [])

  const [page, SetPage] = useState(1);
  const imgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const imgs_per_page = 6;
  const no_of_pages = Math.ceil(imgs.length / imgs_per_page);
  let checkp = 0;

  const imglink = [
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg",
    "https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg",
  ];

  return (
    <>
      <Loading time={2} />
      <div className="pagesg">
        <div className="overlayg">
          <div className="pageTitleg titleBoldg">GALLERY</div>
        </div>
      </div>

      <div class="tz-gallery">
        <div class="row">
          {imgs
            .slice((page - 1) * imgs_per_page, page * imgs_per_page)
            .map((k) => (
              <div class="col-sm-12 col-md-4">
                <a className="lightbox" href={imglink[k - 1]}>
                  <img
                    className="gallery-imageg"
                    src={imglink[k - 1]}
                    alt="bridge"
                  />
                </a>
              </div>
            ))}
        </div>
      </div>

      <div className="float-right mr-5 mb-5">
        {page > 1 && (
          <Button
            variant='danger'
            className="mx-1"
            onClick={() => {
              SetPage((page) => page - 1);
              checkp -= 1;
            }}
          >
            <i class="fa fa-angle-double-left"></i> Previous
          </Button>
        )}
        {page < no_of_pages && (
          <Button
            variant='danger'
            className="mx-1"
            onClick={() => {
              SetPage((page) => page + 1);
              checkp += 1;
            }}
          >
            Next <i class="fa fa-angle-double-right"></i>
          </Button>
        )}
      </div>
    </>
  );
}
