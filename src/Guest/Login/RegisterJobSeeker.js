import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterJobSeeker = ({ setUserData }) => {
  const nav = useNavigate();

  const API_URL = "http://localhost:8181/job_seeker/register"; // Server Side URL
  const [remCheck, setRemCheck] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");

  const validateForm = (e) => {
    e.preventDefault();

    // Email format validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Password validation
    if (password.trim() === "") {
      alert("Please enter a password.");
      return false;
    }

    // If all validations pass, the form will be submitted
    //document.getElementById("loginform").submit();
    return true;
  };

  const submit = async (e) => {
    e.preventDefault();
    // e.preventDefault();
    // if (!validateForm()) {
    //   return;
    // }
    const data = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      mobile: mobile,
      dateOfBirth: dateOfBirth,
    };
    try {
      let res = await axios.post(API_URL, data);
      alert(res.data);
      nav("/login");
    } catch {
      alert("Connection to the Server Failed");
    }
  };

  return (
    <div id="LoginPage" style={{ marginTop: "60px" }}>
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ height: "650px" }}
        id="image"
      >
        <div
          className="col-sm-12 col-md-4  text-center "
          style={{
            backgroundColor: "white",
            boxShadow: "0 2px 4px rgba(19, 19, 19, 3)",
            borderRadius: "10px",
          }}
        >
          <img
            // src={require("./Logo.jpg")}
            alt=""
            width="50px"
            style={{ marginTop: "40px" }}
          />
          <h4 style={{ marginTop: "20px" }}>Registration for Job Seeker</h4>
          <p className="my-4">Create an account with us to seek jobs!</p>
          <form
            id="loginform"
            className="inventorylogin mb-2"
            onSubmit={submit}
          >
            <div className="px-4" style={{ marginTop: "30px" }}>
              <input
                className="form-control"
                type="email"
                placeholder="Email address"
                required
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="px-4" style={{ marginTop: "10px" }}>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                required
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="px-4" style={{ marginTop: "10px" }}>
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
                required
                id="firstNameJob"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>

            <div className="px-4 " style={{ marginTop: "10px" }}>
              <input
                className="form-control"
                type="text"
                placeholder="Last Name"
                required
                id="lastNameJob"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>

            <div className="px-4" style={{ marginTop: 10 }}>
              <input
                className="form-control"
                type="text"
                placeholder="Mobile No."
                pattern="[789][0-9]{9}"
                required
                id="mobileJob"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <div className="px-4" style={{ marginTop: 10 }}>
              <label htmlFor="dateOfBirth">Date Of Birth:</label>
              <input
                className="form-control"
                type="date"
                required
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>

            <div className="px-4" style={{ marginTop: "20px" }}>
              <button
                type="submit"
                className="btn container-fluid"
                style={{ backgroundColor: "#ffd400" }}
              >
                Continue
              </button>
            </div>
          </form>
          <form action="login">
            Already have an account?
            <button
              className="btn btn-link mt-0"
              style={{ textDecoration: "none", fontWeight: "bold" }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterJobSeeker;
