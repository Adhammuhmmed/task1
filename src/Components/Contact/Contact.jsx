import React, { useEffect, useState } from "react";

export default function Contact() {
  useEffect(()=>{
    document.title = 'Contact'
  },[])
  return (
    <>
      <div className="contact py-5">
        <div className="container pt-5">
          <h1 className="text-center">Conatct Section</h1>

          <div className="shape d-flex justify-content-center align-items-center">
            <div className="line"></div>
            <div className="icon mx-3">
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div className="line"></div>
          </div>

          <div className="form w-50 mx-auto">
            <div className="my-4">
              <label htmlFor="userName" className=" user-name my-2 d-none">
                User Name:
              </label>
              <input
                className="form-control"
                type="text"
                id="userName"
                placeholder="User Name"
                onInput={() => {
                  document
                    .querySelector(".user-name")
                    .classList.remove("d-none");
                }}
              />
            </div>

            <div className="my-4">
              <label htmlFor="userAge" className="d-none user-age my-2">
                User Age:
              </label>
              <input
                className="form-control"
                type="number"
                id="userAge"
                placeholder="User Age"
                onInput={() => {
                  document
                    .querySelector(".user-age")
                    .classList.remove("d-none");
                }}
              />
            </div>

            <div className="my-4">
              <label htmlFor="userEmail" className="user-email d-none my-2">
                User Email:
              </label>
              <input
                className="form-control"
                type="email"
                id="userEmail"
                placeholder="User Email"
                onInput={() => {
                  document
                    .querySelector(".user-email")
                    .classList.remove("d-none");
                }}
              />
            </div>

            <div className="my-4">
              <label
                htmlFor="userPassword"
                className="d-none user-password my-2"
              >
                User Password:
              </label>
              <input
                className="form-control"
                type="password"
                id="userPassword"
                placeholder="User Password"
                onInput={() => {
                  document
                    .querySelector(".user-password")
                    .classList.remove("d-none");
                }}
              />
            </div>

            <button className="btn text-white">Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
}
