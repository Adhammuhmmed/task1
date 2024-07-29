import React from "react";

export default function Footer() {
  return <>
      <div className="footer py-4">
      <div className=" container py-3">
            <div className="row  py-5 text-white text-center g-3">
              <div className="col-md-6 col-lg-4">
                    <div>
                      <h2>LOCATION</h2>
                      <p>2215 John Daniel Drive</p>
                      <p>Clark, MO 65243</p>
                    </div>
              </div>

              <div className="col-md-6 col-lg-4 my-4">
                    <div>
                      <h2>AROUND THE WEB</h2>
                            <div className="social-icons d-flex justify-content-center">
                              <span><i className="fa-brands fa-facebook"></i></span>
                              <span><i className="fa-brands fa-twitter"></i></span>
                              <span><i className="fa-brands fa-linkedin-in"></i></span>
                              <span><i className="fa-solid fa-globe"></i></span>
                            </div>
                    </div>
              </div>

              <div className="col-md-6 col-lg-4">
                    <div>
                      <h2>ABOUT FREELANCER</h2>
                      <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
              </div>

            </div>
      </div>
      </div>
      <div className="copyrights text-white d-flex justify-content-center py-2">
        <p className="py-2">Copyright © Your Website 2021</p>
      </div>
  </>;
}
