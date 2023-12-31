import React, { Component } from "react";
import { useState } from "react";
import axios from "axios";

// Componenet not being used
const EditPersonal = ({ setModal, setChangeJob, userData }) => {
  // Dummy Data
  const userData1 = {
    jobSeekerId: 1,
    email: "raj@gmail.com",
    password: "1234",
    dateOfBirth: "2023-08-16",
    userSkillSets: [
      {
        jobSeekerSkillId: {
          jobSeekerId: 1,
          skillSetId: 4,
        },
        skillLevel: -1,
        skill: {
          skillSetId: 4,
          skillName: "Python",
          skillApproved: "1",
        },
      },
      {
        jobSeekerSkillId: {
          jobSeekerId: 1,
          skillSetId: 14,
        },
        skillLevel: -1,
        skill: {
          skillSetId: 14,
          skillName: "C++",
          skillApproved: "0",
        },
      },
      {
        jobSeekerSkillId: {
          jobSeekerId: 1,
          skillSetId: 15,
        },
        skillLevel: -1,
        skill: {
          skillSetId: 15,
          skillName: "C",
          skillApproved: "0",
        },
      },
      {
        jobSeekerSkillId: {
          jobSeekerId: 1,
          skillSetId: 16,
        },
        skillLevel: -1,
        skill: {
          skillSetId: 16,
          skillName: "C#",
          skillApproved: "0",
        },
      },
      {
        jobSeekerSkillId: {
          jobSeekerId: 1,
          skillSetId: 17,
        },
        skillLevel: -1,
        skill: {
          skillSetId: 17,
          skillName: "Linux",
          skillApproved: "0",
        },
      },
    ],
    userLocations: [
      {
        jobSeekerLocation: {
          locationId: 1,
          jobSeekerId: 1,
        },
        location: {
          locationID: 1,
          locationName: "Goa",
          locationApproved: "\u0000",
        },
      },
      {
        jobSeekerLocation: {
          locationId: 2,
          jobSeekerId: 1,
        },
        location: {
          locationID: 2,
          locationName: "Malegaon",
          locationApproved: "0",
        },
      },
      {
        jobSeekerLocation: {
          locationId: 3,
          jobSeekerId: 1,
        },
        location: {
          locationID: 3,
          locationName: "Thane",
          locationApproved: "0",
        },
      },
    ],
    education: [
      {
        educationId: 1,
        degreeName: "Bachelor of Science",
        major: "Computer Science",
        qualification: {
          qualificationId: 3,
          qualificarionName: "4 Year Degreee",
        },
        percentage: 85.5,
        universityName: "XYZ University",
        startYear: "2017-10-21",
        endYear: "2021-10-21",
      },
    ],
    jobTypePreference: [
      {
        jobSeekerType: {
          jobSeekerId: 1,
          jobType: 1,
        },
        jobType: {
          jobType: 1,
          roleName: "FULL TIME",
        },
      },
    ],
    jobDesignationPreference: [
      {
        designationComposite: {
          jobSeekerId: 1,
          designationId: 1,
        },
        designation: {
          designationID: 1,
          designationName: "Manager",
          designationApproved: "0",
        },
      },
    ],
    jobSeekerApplication: [
      {
        applicationId: 1,
        job: {
          jobId: 3,
          jobTitle: "Spring Boot Developer",
          jobDescription:
            "You should be able to :\n1. Maintain code.\n2. Debug it ",
          postAvail: 1,
          jobType: {
            jobType: 2,
            roleName: "INTERNSHIP",
          },
          skills: [],
          designation: {
            designationID: 1,
            designationName: "Manager",
            designationApproved: "0",
          },
          industryId: 0,
          wfhPreference: 0,
          location: null,
          jobPostingDate: "2023-08-22",
          lastApplyDate: null,
          minSalary: 0.0,
          maxSalary: 10000.0,
          minExperience: 0,
          maxExperience: 2,
          qualificationType: null,
          qualificationType2: null,
          active: true,
        },
        applyDate: "2023-08-24T18:30:00.000+00:00",
        isShortlist: "\u0000",
        isContacted: "\u0000",
      },
      {
        applicationId: 2,
        job: {
          jobId: 50,
          jobTitle: "Spring Boot",
          jobDescription: "Test",
          postAvail: 1,
          jobType: {
            jobType: 1,
            roleName: "FULL TIME",
          },
          skills: [
            {
              id: {
                jobId: 50,
                skillSetId: 2,
              },
              skillSet: {
                skillSetId: 2,
                skillName: "Java",
                skillApproved: "1",
              },
            },
            {
              id: {
                jobId: 50,
                skillSetId: 4,
              },
              skillSet: {
                skillSetId: 4,
                skillName: "Python",
                skillApproved: "1",
              },
            },
          ],
          designation: {
            designationID: 5,
            designationName: "TEST",
            designationApproved: "0",
          },
          industryId: 0,
          wfhPreference: 0,
          location: null,
          jobPostingDate: "2023-08-23",
          lastApplyDate: null,
          minSalary: 0.0,
          maxSalary: 10000.0,
          minExperience: 0,
          maxExperience: 2,
          qualificationType: null,
          qualificationType2: null,
          active: true,
        },
        applyDate: "2023-08-24T18:30:00.000+00:00",
        isShortlist: "\u0000",
        isContacted: "\u0000",
      },
    ],
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

  const [localData, setLocalData] = useState(userData);
  const API_URL = "http://localhost:8181/job_seeker/updatePersonalProfileImage";
  const [file, setFile] = useState();

  const editProfile = async (e) => {
    e.preventDefault();
    const formData = {
      jobId: userData.jobId,
      lastName: localData.lastName,
      firstName: localData.firstName,
      currentDesignation: localData.designation,
      mobile: localData.mobile,
    };
    const form = new FormData();
    form.append("file", file);
    const jobSeeker = JSON.stringify(formData);
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
        setModal(null);
      } else {
        alert("Session Expired");
      }
    } catch {
      alert("Connection to the Server Failed");
    }
  };
  return (
    <div className="row justify-content-center m-3 mt-5">
      <div className="col-sm-12 col-md-6 ">
        <form
          onSubmit={editProfile}
          className="border  rounded-4 shadow-lg p-3 mb-5 bg-body rounded"
        >
          <div className="cv-form-blk">
            <div className="cv-form-row-title text-center">
              <h3>About section</h3>
            </div>
            <div className="cv-form-row cv-form-row-about row">
              <div className="row">
                <div className="form-elem col-6 mb-3">
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
                <div className="form- col-6 mb-3">
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
                <div className="form-elem mb-3">
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
                <div className="form-elem mb-3">
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
                        designation: { designationName: e.target.value },
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
                <div className="form-elem mb-3">
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
                <div className="form-elem mb-3">
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
                    onChange={(e) => {
                      setLocalData({ ...localData, mobile: e.target.value });
                    }}
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
          <button
            className="form-control fw-bold mb-3"
            style={{ backgroundColor: "green" }}
          >
            Submit
          </button>
          <button
            className="btn container-fluid mb-5 fw-bold"
            style={{ backgroundColor: "#ffd400" }}
            onClick={(e) => {
              setModal(null);
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPersonal;
