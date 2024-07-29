import React, { useEffect, useState } from "react";
import img1 from "../../assets/port1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  let [overLay, setoverlay] = useState(
    <div className="page-layout d-none d-flex justify-content-center">
      <div className="image">
        <img src={img1} alt="" className="w-100" />
      </div>
    </div>
  );

  function showOverlay(img) {
    setoverlay(
      <div
        onClick={() => {
          hideOverlay();
        }}
        className="page-layout d-flex justify-content-center"
      >
        <div className="image">
          <img src={img} alt="" className="w-100" />
        </div>
      </div>
    );
  }

  function hideOverlay() {
    setoverlay(
      <div className="page-layout d-none d-flex justify-content-center">
        <div className="image">
          <img src={img1} alt="" className="w-100" />
        </div>
      </div>
    );
  }
  return (
    <>
      {overLay}

      <div className="portfolio py-4">
        <div className="container">
          <h1 className="text-center">Portfolio Component</h1>
          <div className="shape d-flex justify-content-center align-items-center">
            <div className="line"></div>
            <div className="icon mx-3">
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div className="line"></div>
          </div>
          <div className="row g-4 py-4">
            <div className="col-md-6 col-lg-4">
              <div
                className="inner"
                onClick={() => {
                  showOverlay(img1);
                }}
              >
                <img src={img1} alt="portfolio image" className="w-100" />
                <div className="layout">
                  <span>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="inner"
                onClick={() => {
                  showOverlay(img2);
                }}
              >
                <img src={img2} alt="portfolio image" className="w-100" />
                <div className="layout">
                  <span>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="inner"
                onClick={() => {
                  showOverlay(img3);
                }}
              >
                <img src={img3} alt="portfolio image" className="w-100" />
                <div className="layout">
                  <span>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="inner"
                onClick={() => {
                  showOverlay(img1);
                }}
              >
                <img src={img1} alt="portfolio image" className="w-100" />
                <div className="layout">
                  <span>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div
                className="inner"
                onClick={() => {
                  showOverlay(img2);
                }}
              >
                <img src={img2} alt="portfolio image" className="w-100" />
                <div className="layout">
                  <span>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div
                className="inner"
                onClick={() => {
                  showOverlay(img3);
                }}
              >
                <img src={img3} alt="portfolio image" className="w-100" />
                <div className="layout">
                  <span>
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
