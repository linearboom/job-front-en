import React, { Component } from "react";
import { useState } from "react";
import axios from "axios";

// Componenet not being used
const EditPersonal = ({ setModal, setChangeJob }) => {
  // Dummy Data
  const userData1 = {
    jobSeekerId: 1,
    email: "raj@gmail.com",
    password: "1234",
    dateOfBirth: "2023-08-16",

    firstName: "Raj",
    lastName: null,
    mobile: "9930636861",
    address: null,
    currentCtc: null,
    expectedCtc: null,
    noticePeriod: null,
    currentDesignation: null,
    isStudent: null,
    isWorking: null,
    isOpenForWork: null,
    isProfileVisible: null,
    isProfileBlocked: null,
    resumeHeadline: null,
    resumePath: null,
    profileImagePath: null,
    field1: null,
    field2: null,
  };

  const [localData, setLocalData] = useState(userData1);
  const API_URL = "http://localhost:8181/job_seeker/updatePersonalProfileImage";
  const [file, setFile] = useState();

  const editProfile = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("file", file);
    const jobSeeker = JSON.stringify(localData);
    form.append("jobSeeker", jobSeeker);

    try {
      let res = await axios.post(API_URL, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true, // Enable sending and receiving cookies
      });

      if (res.data) {
        //nav(`/editskilltest?jobId=${res.data.JobId}`);
        alert(res.data);
        setChangeJob(true);
      } else {
        alert("Session Expired");
      }
    } catch {
      alert("Connection to the Server Failed");
    }
  };
  return (
    <div className="resume-1">
      <form onSubmit={editProfile}>
        <div className="cv-form-blk">
          <div className="cv-form-row-title">
            <h3>about section</h3>
          </div>
          <div className="cv-form-row cv-form-row-about row">
            <div className="row">
              <div className="form-elem col-6">
                <label htmlFor="" className="form-label">
                  First Name
                </label>
                <input
                  name="firstname"
                  type="text"
                  className="form-control firstname"
                  id=""
                  onkeyup="generateCV()"
                  placeholder="e.g. John"
                  onChange={(e) => {
                    setLocalData({ ...localData, firstName: e.target.value });
                  }}
                  value={localData.firstName}
                />
                <span className="form-text" />
              </div>
              {/* <div className="form-elem">
                <label htmlFor="" className="form-label">
                  Middle Name <span className="opt-text">(optional)</span>
                </label>
                <input
                  name="middlename"
                  type="text"
                  className="form-control middlename"
                  id=""
                  onkeyup="generateCV()"
                  placeholder="e.g. Herbert"
                />
                <span className="form-text" />
              </div> */}
              <div className="form- col-6">
                <label htmlFor="" className="form-label">
                  Last Name
                </label>
                <input
                  name="lastname"
                  type="text"
                  className="form-control lastname"
                  id=""
                  onkeyup="generateCV()"
                  placeholder="e.g. Doe"
                  onChange={(e) => {
                    setLocalData({ ...localData, lastName: e.target.value });
                  }}
                  value={localData.lastName}
                />
                <span className="form-text" />
              </div>
            </div>
            <div className="cols-3">
              <div className="form-elem">
                <label htmlFor="" className="form-label">
                  Your Image
                </label>
                <input
                  name="image"
                  type="file"
                  className="form-control image"
                  id=""
                  accept="image/*"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
              </div>
              <div className="form-elem">
                <label htmlFor="" className="form-label">
                  Designation
                </label>
                <input
                  name="designation"
                  type="text"
                  className="form-control designation"
                  id=""
                  onkeyup="generateCV()"
                  placeholder="e.g. Sr.Accountants"
                  onChange={(e) => {
                    setLocalData({
                      ...localData,
                      currentDesignationdesignation: {
                        designationName: e.target.value,
                      },
                    });
                  }}
                />
                <span className="form-text" />
              </div>
              {/* <div className="form-elem">
                <label htmlFor="" className="form-label">
                  Address
                </label>
                <input
                  name="address"
                  type="text"
                  className="form-control address"
                  id=""
                  onkeyup="generateCV()"
                  placeholder="e.g. Lake Street-23"
                />
                <span className="form-text" />
              </div> */}
            </div>
            <div className="cols-3">
              <div className="form-elem">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  name="email"
                  type="text"
                  className="form-control email"
                  id=""
                  onkeyup="generateCV()"
                  placeholder="e.g. johndoe@gmail.com"
                  disabled
                  value={localData.email}
                />
                <span className="form-text" />
              </div>
              <div className="form-elem">
                <label htmlFor="" className="form-label">
                  Phone No:
                </label>
                <input
                  name="phoneno"
                  type="text"
                  className="form-control phoneno"
                  id=""
                  onkeyup="generateCV()"
                  placeholder="e.g. 456-768-798, 567.654.002"
                  value={localData.mobile}
                />
                <span className="form-text" />
              </div>
              {/* <div className="form-elem">
                <label htmlFor="" className="form-label">
                  Summary
                </label>
                <input
                  name="summary"
                  type="text"
                  className="form-control summary"
                  id=""
                  onkeyup="generateCV()"
                  placeholder="e.g. Doe"
                />
                <span className="form-text" />
              </div> */}
            </div>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditPersonal;
