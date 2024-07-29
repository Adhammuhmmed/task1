import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <>
      <div className="about text-white text-center py-5 d-flex justify-content-center align-items-center">
        <div className="container py-5">
          <h1 className="mt-5">About Component</h1>
          <div className="shape d-flex justify-content-center align-items-center">
            <div className="line"></div>
            <div className="icon mx-3">
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div className="line"></div>
          </div>

          <div className="row g-3  py-5">
            <div className="col-md-6 p-3">
              <div>
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>

            <div className="col-md-6 p-3">
              <div>
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
