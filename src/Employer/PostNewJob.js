import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FetchJobTypes from "../Util/FetchJobTypes";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { Autocomplete } from "@mui/material";
// import TextField from "@mui/material/TextField";
//import Select, { components } from "react-select";
import EditSkill from "../CommonComp/EditSkill";

const PostNewJob = ({ jobData, setJobData, setChangeEmployer }) => {
  const API_URL = "http://localhost:8181/employer/postNewJob"; // Server Side URL
  const FETCH_JOB_TYPES_URL =
    "http://localhost:8181/job_seeker/getJobPreferenceTypes";

  const FETCH_DESIGNATION_URL =
    "http://localhost:8181/job_seeker/searchDesignation";

  const nav = useNavigate();
  const [designationInput, setDesignationInput] = useState("TEST");
  const [locationInput, SetLocationInput] = useState(
    jobData?.location?.locationName || ""
  );
  const [jobTypeInput, setJobTypeInput] = useState("FT");
  const [jobTypeOptions, setJobTypeOptions] = useState([]);
  const [matchingDesignation, setMatchingDesignation] = useState([]);
  //const [skills, setSkills] = useState([]);
  const [job, setJob] = useState(
    jobData || {
      isActive: true,
      jobTitle: "",
      jobDescription: "",
      postAvail: 1,
      jobType: { jobType: 1, roleName: "FT" },
      designation: { designationName: "TEST" },
      minSalary: 0,
      maxSalary: 10000,
      minExperience: 0,
      maxExperience: 2,
      location: { locationName: "" },
    }
  );
  // const [jobDescription, setJobDescription] = useState("");
  // const [postAvail, setPostAvail] = useState(1);
  // const [jobType, setJobType] = useState([]);

  // Use Effect on initial load to fetch the Job Types from the server
  useEffect(() => {
    const fetchData = async () => {
      const data = await FetchJobTypes(FETCH_JOB_TYPES_URL);
      // console.log("Fetched data:", data.dat);
      setJobTypeOptions(data.data);
    };
    fetchData();
  }, []);

  // For Dynamic Search of Designation
  useEffect(() => {
    const fetchData = async () => {
      if (designationInput.length <= 3 && designationInput.length > 1) {
        const data = await FetchJobTypes(
          FETCH_DESIGNATION_URL +
            "/?designation=" +
            job.designation.designationName
        );
        // console.log("Fetched data:", data.dat);
        setMatchingDesignation(data.data);
      }
    };
    fetchData();
  }, [designationInput]);

  const submit = async (e) => {
    //alert(job.jobDescription);
    e.preventDefault();
    // if (!validateForm()) {
    //   return;
    // }
    let localskill = [];
    if (jobData) {
      localskill = jobData.skills;
    }
    const data = {
      job: job,
      skills: [],
    };
    try {
      let res = await axios.post(API_URL, data, { withCredentials: true });

      if (res.data) {
        //nav(`/editskilltest?jobId=${res.data.JobId}`);
        setJobData(res.data);
        setChangeEmployer(true);
        nav("/editskilltest");
      } else {
        alert("Session Expired");
      }
    } catch {
      alert("Connection to the Server Failed");
    }
  };

  return (
    <div>
      <div id="postnewjob" style={{ marginTop: "60px" }}>
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "650px" }}
          id="image"
        >
          <div
            className="col-sm-12 col-lg-10  text-center "
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
            <h4 style={{ marginTop: "20px" }}>Post a New Job!</h4>
            <p className="my-4">Enter the following details to continue</p>
            <form
              id="postnewjob"
              className="inventorylogin mb-2"
              onSubmit={submit}
            >
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Job Title</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Job Title"
                  required
                  id="jobtitle"
                  onChange={(e) => setJob({ ...job, jobTitle: e.target.value })}
                  value={job.jobTitle}
                />
              </div>

              <div className="px-4" style={{ marginTop: 10 }}>
                <label>Select the Type of Job</label>
                <select
                  key={job.jobType.jobType}
                  className="form-select"
                  value={job.jobType.roleName}
                  onChange={(e) => {
                    const selectedJob = jobTypeOptions.find(
                      (item) => item.jobType == e.target.value
                    );
                    console.log(selectedJob);
                    setJob({ ...job, jobType: selectedJob });
                  }} // Update jobType property
                >
                  {jobTypeOptions &&
                    jobTypeOptions.map((item) => (
                      <option key={item.jobType} value={item.jobType}>
                        {item.roleName}
                      </option>
                    ))}
                </select>
              </div>

              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Job Designation</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Job Designation"
                  required
                  id="jobtitle"
                  onChange={(e) => {
                    setJob({
                      ...job,
                      designation: { designationName: e.target.value },
                    });
                    setDesignationInput(e.target.value);
                  }}
                  value={designationInput}
                />

                <ul>
                  {matchingDesignation.map((item, index) => (
                    <li
                      onClick={(e) => {
                        setJob({
                          ...job,
                          designation: item,
                        });
                        setDesignationInput(item.designationName);
                      }}
                      key={index}
                    >
                      {item.designationName}
                    </li>
                  ))}
                </ul>
                {/* <select
                  className="form-select"
                  value={job.designation}
                  onChange={(e) =>
                    setJob({
                      ...job,
                      designation: { designationName: e.target.value },
                    })
                  } // Update jobType property
                >
                  {matchingDesignation &&
                    matchingDesignation.map((item, index) => (
                      <option key={index} value={item}>
                        {item.designationName}
                      </option>
                    ))}
                </select> */}
              </div>

              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Job Location</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Location"
                  required
                  id="jobtitle"
                  onChange={(e) => {
                    setJob({
                      ...job,
                      location: { locationName: e.target.value },
                    });
                    SetLocationInput(e.target.value);
                  }}
                  value={locationInput}
                />
              </div>

              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Posts Available</label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="Posts Available"
                  required
                  id="jobtitle"
                  onChange={(e) =>
                    setJob({ ...job, postAvail: e.target.value })
                  }
                  value={job.postAvail}
                />
              </div>

              <div className="px-4 row" style={{ marginTop: "30px" }}>
                <div className="col-6">
                  <label>Minimum Salary</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Minimum Salary"
                    required
                    id="jobtitle"
                    onChange={(e) =>
                      setJob({ ...job, minSalary: e.target.value })
                    }
                    value={job.minSalary}
                  />
                </div>
                <div className="col-6">
                  <label>Maxium Salary</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Minimum Salary"
                    required
                    id="jobtitle"
                    onChange={(e) =>
                      setJob({ ...job, maxSalary: e.target.value })
                    }
                    value={job.maxSalary}
                  />
                </div>
              </div>

              <div className="px-4 row" style={{ marginTop: "30px" }}>
                <div className="col-6">
                  <label>Minimum Work Experience in Years</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Minimum Work Exp"
                    required
                    id="jobtitle"
                    onChange={(e) =>
                      setJob({ ...job, minExperience: e.target.value })
                    }
                    value={job.minExperience}
                  />
                </div>
                <div className="col-6">
                  <label>Maxium Work Experience in Years</label>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Minimum Salary"
                    required
                    id="jobtitle"
                    onChange={(e) =>
                      setJob({ ...job, maxExperience: e.target.value })
                    }
                    value={job.maxExperience}
                  />
                </div>
              </div>

              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Job Description </label>
                <textarea
                  className="form-control"
                  type="textarea"
                  placeholder="Job Description"
                  required
                  id="jobtitle"
                  onChange={(e) =>
                    setJob({ ...job, jobDescription: e.target.value })
                  }
                  value={job.jobDescription}
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
            {/* <div className="px-4" style={{ marginTop: "30px" }}>
              <label>Select Skills</label>
              <EditSkill></EditSkill>
            </div> */}
            {/* <form action="registerjobseeker">
              Don't have an account?
              <button
                className="btn btn-link mt-0"
                style={{ textDecoration: "none", fontWeight: "bold" }}
              >
                Sign up
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostNewJob;
