import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const GuestTopperNav = () => {
  return (
    <div>
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light fixed-top customNav"
          style={{ padding: "0px" }}
        >
          <div className="container-fluid customNav">
            <a className="navbar-brand" href="#">
              <img /> Ready Assist
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact">
                    Contact
                  </a>
                </li>
              </ul>
              <form action="login">
                <button className="login-btn">Login</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default GuestTopperNav;
