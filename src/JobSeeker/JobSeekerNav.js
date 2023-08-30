import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const JobSeekerNav = ({ userData, setUserData }) => {
  const nav = useNavigate();
  const logout = async () => {
    // setEmail("");
    // setPassword("");
    setUserData(null);
    try {
      let res = await axios.post("http://localhost:8181/user/logout", null, {
        withCredentials: true,
      });
      alert(res.data);
      localStorage.setItem("userDetailsSaved", null);
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
                <Link className="nav-link" to="jobhome">
                  Search Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="jobprofile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="appliedjobsjobseeker">
                  Applied Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="resume">
                  Resume Generator
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

export default JobSeekerNav;
