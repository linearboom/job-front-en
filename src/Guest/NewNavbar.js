import React from "react";

import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NewNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <Link
        to="/"
        className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
      >
        <h1 className="m-0 text-primary">JobEntry</h1>
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Nav.Link href="/" className="nav-item nav-link">
            Home
          </Nav.Link>
          <Nav.Link href="/about" className="nav-item nav-link">
            About
          </Nav.Link>
          {/* <div className="nav-item dropdown">
            <Link
              to="/jobs"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Jobs
            </Link>
            <div className="dropdown-menu rounded-0 m-0">
              <Link to="/job-list" className="dropdown-item">
                Job List
              </Link>
              <Link to="/job-detail" className="dropdown-item">
                Job Detail
              </Link>
            </div>
          </div> */}
          <div className="nav-item dropdown">
            {/* <Link to="/pages" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link> */}
            <div className="dropdown-menu rounded-0 m-0">
              <Link to="/category" className="dropdown-item">
                Job Category
              </Link>
              <Link to="/testimonial" className="dropdown-item">
                Testimonial
              </Link>
            </div>
          </div>
          <div className="nav-item dropdown">
            <Link
              to="/pages"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              {" "}
              Login
            </Link>
            <div className="dropdown-menu rounded-0 m-0">
              <Link to="/login" className="dropdown-item">
                User Login
              </Link>
              <Link to="/employerlogin" className="dropdown-item">
                Recruiter Login
              </Link>
            </div>
          </div>
          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>

        <Link
          to="/registerjobseeker"
          className="btn btn-primary rounded-0 py-4 px-lg-4 d-none d-lg-block"
        >
          Register<i className="fa fa-arrow-right ms-3"></i>
        </Link>
      </div>
    </nav>
  );
};

export default NewNavbar;
