import "./App.css";
import { Route, Routes, useHistory } from "react-router-dom";

import GuestTopperNav from "./Guest/Topper/GuestTopperNav";
import Login from "./Guest/Login/Login";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import JobHome from "./JobSeeker/JobHome";
import RegisterJobSeeker from "./Guest/Login/RegisterJobSeeker";
import JobSeekerNav from "./JobSeeker/JobSeekerNav";
import JobProfile from "./JobSeeker/JobProfile";
import EmployerLogin from "./Guest/Login/Employer/EmployerLogin";
import EmployerRegistraton from "./Guest/Login/Employer/EmployerRegistraton";
import EmployerNav from "./Employer/EmployerNav";
import PostNewJob from "./Employer/PostNewJob";
import EditSkill from "./CommonComp/EditSkill";
import PostedJobs from "./Employer/PostedJobs";
import JobCard from "./Employer/JobCard";

import "./style.css";
import Home from "./Guest/Home";
import Resume from "./JobSeeker/Resume";
import Contact from "./Guest/Contact";
import AppliedJob from "./JobSeeker/AppliedJob";
import EmployerProfile from "./Employer/EmployerProfileChange";
import JobDescription from "./Employer/JobDescription";

const ProtectedRoute = ({ employerData, element }) => {
  if (employerData) {
    return element;
  }
  return <h1 style={{ marginTop: "80px" }}>Kindly Login First</h1>;
};

const ProtectedJob = ({ userData, element }) => {
  if (userData) {
    return element;
  }
  return <h1 style={{ marginTop: "80px" }}>Kindly Login First</h1>;
};

function App() {
  const [userData, setUserData] = useState(null);
  const [employerData, setEmployerData] = useState(null);
  const [jobData, setJobData] = useState(null);
  const [adminData, setAdminData] = useState(null);
  const [changeJob, setChangeJob] = useState(false);
  const [changeEmployer, setChangeEmployer] = useState(false);
  const JOB_API = "http://localhost:8181/job_seeker/refresh";
  const EMP_API = "http://localhost:8181/employer/refresh";

  useEffect(() => {
    const fetchData = async () => {
      // Refreshed and sends the data using the session management
      const res = await axios.post(
        JOB_API,
        { name: "Hello" },
        { withCredentials: true }
      );
      setUserData(res.data);
    };
    if (changeJob) {
      fetchData();
      setChangeJob(false);
    }
  }, [changeJob]);

  useEffect(() => {
    const fetchData = async () => {
      // Refreshed and sends the data using the session management
      const res = await axios.post(
        EMP_API,
        { name: "Hello" },
        { withCredentials: true }
      );
      setEmployerData(res.data);
    };
    if (changeEmployer) {
      fetchData();
      setChangeEmployer(false);
    }
  }, [changeEmployer]);

  useEffect(() => {
    const fetchData = async () => {
      // Refreshed and sends the data using the session management
      const res = await axios.post(
        EMP_API,
        { name: "Hello" },
        { withCredentials: true }
      );
      setEmployerData(res.data);
    };
    if (changeEmployer) {
      fetchData();
      setChangeEmployer(false);
    }
  }, [changeEmployer]);

  return (
    <div className="App">
      {!userData && !employerData && !adminData ? (
        <GuestTopperNav></GuestTopperNav>
      ) : userData ? (
        <JobSeekerNav
          userData={userData}
          setUserData={setUserData}
        ></JobSeekerNav>
      ) : employerData ? (
        <EmployerNav
          employerData={employerData}
          setEmployerData={setEmployerData}
        ></EmployerNav>
      ) : (
        <h1>Admin Nav</h1>
      )}
      {/* {!userData && !adminData && !employerData && (
        <GuestTopperNav></GuestTopperNav>
      )}
      {userData && (
        <JobSeekerNav
          userData={userData}
          setUserData={setUserData}
        ></JobSeekerNav>
      )} */}
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route
          path="login"
          element={<Login setUserData={setUserData} />}
        ></Route>
        <Route
          path="registerjobseeker"
          element={<RegisterJobSeeker setUserData={setUserData} />}
        ></Route>
        <Route
          path="contact"
          element={<Contact setUserData={setUserData} />}
        ></Route>
        {/* {Job Seeker Routes Create a protected route for the same} */}
        <Route
          path="jobhome"
          element={<JobHome userData={userData} setJobData={setJobData} />}
        ></Route>
        <Route
          path="jobprofile"
          element={
            <JobProfile userData={userData} setChangeJob={setChangeJob} />
          }
        ></Route>
        <Route
          path="jobProfilePage"
          element={
            <JobDescription
              userData={userData}
              setChangeJob={setChangeJob}
              jobData={jobData}
              setJobData={setJobData}
            ></JobDescription>
          }
        ></Route>
        <Route
          path="appliedjobsjobseeker"
          element={
            <ProtectedJob
              userData={userData}
              element={
                <AppliedJob
                  userData={userData}
                  setChangeJob={setChangeJob}
                  setJobData={setJobData}
                  jobData={jobData}
                ></AppliedJob>
              }
            ></ProtectedJob>
          }
        ></Route>
        {/* {Employer Routes } */}
        <Route
          path="employerlogin"
          element={<EmployerLogin setEmployerData={setEmployerData} />}
        ></Route>
        <Route
          path="registeremployer"
          element={<EmployerRegistraton setUserData={setUserData} />}
        ></Route>
        <Route
          path="employerprofile"
          element={
            <ProtectedRoute
              element={
                <EmployerProfile
                  employerData={employerData}
                  setChangeEmployer={setChangeEmployer}
                ></EmployerProfile>
              }
              employerData={employerData}
            ></ProtectedRoute>
          }
        ></Route>
        <Route
          path="postnewjob"
          element={
            <ProtectedRoute
              element={
                <PostNewJob
                  jobData={jobData}
                  setJobData={setJobData}
                  setChangeEmployer={setChangeEmployer}
                />
              }
              employerData={employerData}
            ></ProtectedRoute>
          }
        ></Route>
        {/* {Add this in proteceted route later} */}
        <Route
          path="editskilltest"
          element={
            <ProtectedRoute
              element={
                <EditSkill
                  jobData={jobData}
                  setJobData={setJobData}
                  setChangeEmployer={setChangeEmployer}
                ></EditSkill>
              }
              employerData={employerData}
            ></ProtectedRoute>
          }
        ></Route>
        <Route
          path="postedjobs"
          element={
            <ProtectedRoute
              element={
                <PostedJobs
                  employerData={employerData}
                  setEmployerData={setEmployerData}
                  setJobData={setJobData}
                  setChangeEmployer={setChangeEmployer}
                />
              }
              employerData={employerData}
            ></ProtectedRoute>
          }
        ></Route>
        <Route path="/resume" element={<Resume></Resume>}></Route>
        <Route path="*" element={<h1>No path</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
