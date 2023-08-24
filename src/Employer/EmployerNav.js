import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const EmployerNav = ({ setEmployerData }) => {
  const nav = useNavigate();
  const logout = async () => {
    // setEmail("");
    // setPassword("");
    setEmployerData(null);
    try {
      let res = await axios.post(
        "http://localhost:8181/employer/logout",
        null,
        {
          withCredentials: true,
        }
      );
      alert(res.data);
      localStorage.setItem("employerDataSaved", null);
      nav("/login");
    } catch {
      alert("Logged out");
    }
  };

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top customNav"
        style={{ padding: 0 }}
      >
        <div className="container-fluid customNav">
          <a className="navbar-brand" href="#">
            {/* <img src={require("./FAVICON.png")} /> Mobi Hub Admin{" "} */}
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
                <Link className="nav-link" to="ConsumerHome.html">
                  Employer Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="jobprofile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="postedjobs">
                  Posted Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="postnewjob">
                  New Job
                </Link>
              </li>
            </ul>
            <form onSubmit={logout}>
              <button type="submit" className="logout-btn">
                Log Out
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default EmployerNav;
