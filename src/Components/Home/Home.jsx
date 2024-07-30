import React, { useEffect } from "react";
import homeImage from "../../assets/avataaars.svg";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <div className="home text-white py-5">
        <div className="home-content d-flex justify-content-center align-items-center flex-column">
          <div className="image p-3 my-5 w-25 my-3">
            <img src={homeImage} alt="Main home image" />
          </div>
          <div className="text texr-center text-white">
            <h1 className="h2">Start Framework</h1>
          </div>
          <div className="shape d-flex justify-content-center align-items-center my-3">
            <div className="line"></div>
            <div className="icon mx-3">
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div className="line"></div>
          </div>
          <p className="my-3">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
