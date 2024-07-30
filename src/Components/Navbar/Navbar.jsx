import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let [nav, setNav] = useState(
    <nav className=" navbar navbar-expand-lg py-3">
      <div className="container">
        <NavLink className="navbar-brand text-white" to="">
          <h2>Start Framework</h2>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto p-3">
            <li className="nav-item mx-2">
              <NavLink className="nav-link text-white " to="about">
                About
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link text-white " to="portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className="nav-link text-white " to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  document.addEventListener("scroll", () => {
    if ((scrollY > "50")) {
      setNav(
        <nav className="navbar navbar-expand-lg py-1">
          <div className="container">
            <NavLink className="navbar-brand text-white" to="">
            <h2>Start Framework</h2>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto p-3">
                <li className="nav-item mx-2">
                  <NavLink className="nav-link text-white " to="about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link text-white " to="portfolio">
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link text-white " to="contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    } else {
      setNav(
        <nav className="navbar navbar-expand-lg py-3">
          <div className="container">
            <NavLink className="navbar-brand text-white" to="">
            <h2>Start Framework</h2>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto p-3">
                <li className="nav-item mx-2">
                  <NavLink className="nav-link text-white " to="about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link text-white " to="portfolio">
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link text-white " to="contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  });
  return <>{nav}</>;
}
