import React, { useEffect, useState } from "react";
import axios from "axios";

const JobDescription = ({ jobData, jobDescriptionFetchData, setChangeJob }) => {
  const URL = "http://localhost:8181/employer/viewJobDescription";
  const [jobDescriptionData, setJobDescriptionData] = useState(jobData);

  //profile of company
  const [profileImage, setProfileImage] = useState();

  const API_URL = "http://localhost:8181/job_seeker/applyJob";

  const apply = async (e) => {
    e.preventDefault();
    const data = { job: { jobId: jobDescriptionData.jobId } };

    let res = await axios.post(API_URL, data, { withCredentials: true });
    if (res.data) {
      alert(res.data);
      setChangeJob(true);
    } else {
      alert("Session Expired");
    }
  };

  useEffect(() => {
    const fetchJobDescriptionData = async () => {
      try {
        let res = await axios.post(URL, jobDescriptionFetchData, {
          withCredentials: true,
        });
        // console.log("Hello");
        if (res.data) {
          setJobDescriptionData(res.data);
          const imagePath = res.data.profileImagePath;
          // axios
          //   .get(
          //     //change for company profile image
          //     `http://localhost:8181/job_seeker/getProfileImage?imagePath=${imagePath}`,
          //     {
          //       responseType: "arraybuffer", // Set the response type to 'arraybuffer' for binary data
          //     }
          //   )
          //   .then((response) => {
          //     // Convert the binary image data to a Data URL using the FileReader API
          //     const blob = new Blob([response.data], { type: "image/jpeg" }); // Change the content type if needed
          //     const reader = new FileReader();

          //     reader.onload = () => {
          //       const imageUrl = reader.result;
          //       setProfileImage(imageUrl);
          //     };

          //     reader.readAsDataURL(blob);
          //   })
          //   .catch((error) => {
          //     console.error("Error fetching image:", error);
          //   });
        } else {
          alert("Session Expired");
        }
      } catch {
        alert("Connection to the Server Failed");
      }
    };

    fetchJobDescriptionData();
  }, []);

  return (
    <div style={{ marginTop: "80px", margingLeft: "10px" }}>
      {jobDescriptionData ? (
        <div className="row">
          <div className="col-4">
            <div className="d-flex justify-content-center">
              {/* <img
                key={profileImage}
                src={profileImage}
                alt="Profile Image"
                style={{
                  height: "160px",
                  width: "120px",
                  borderRadius: "100px",
                }}
              /> */}
            </div>
            <div className="d-flex justify-content-between bg-light">
              <p className="fw-semibold">Job ID</p>
              <p className="mx-2">{jobDescriptionData.jobId}</p>
            </div>
            <div className="d-flex justify-content-between bg-light">
              <p className="fw-semibold">Job Title</p>
              <p className="mx-2">{jobDescriptionData.jobTitle}</p>
            </div>
            <div className="d-flex justify-content-between bg-light">
              <p className="fw-semibold">Post Availabale</p>
              <p className="mx-2">{jobDescriptionData.postAvail}</p>
            </div>
            <div className="d-flex justify-content-between bg-light">
              <p className="fw-semibold">Job Type</p>
              <p className="mx-2">{jobDescriptionData.jobType.roleName}</p>
            </div>
            <div>
              <pre className="col-8 d-flex justify-content-start">
                <h6 style={{ fontWeight: "bold" }}>Job Description :</h6>{" "}
                {jobDescriptionData.jobDescription}
              </pre>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                onClick={apply}
                style={{ borderRadius: "10px", border: "solid" }}
              >
                Apply
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="row col-8">
            {/* Skills */}
            <div className="">
              <span className="card-title fw-bold">Skills</span>
              {jobDescriptionData.skills &&
                jobDescriptionData.skills.map((item, index) => (
                  <div className="row d-flex justify-content-between bg-light">
                    <span className="col-8 d-flex justify-content-start">
                      {item.skillSet.skillName}
                    </span>
                  </div>
                ))}
            </div>

            {/* Designation */}
            <div className="">
              <span className="card-title fw-bold">Designation</span>

              <div className="row d-flex justify-content-between bg-light">
                <span className="col-8 d-flex justify-content-start">
                  <p style={{ fontWeight: "bold" }}>Designation :</p>{" "}
                  {jobDescriptionData.designation.designationName}
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="">
              <span className="card-title fw-bold">Location</span>

              <div className="row d-flex justify-content-between bg-light">
                <span className="col-8 d-flex justify-content-start">
                  {jobDescriptionData.location
                    ? jobDescriptionData.location
                    : "not mentioned"}
                </span>
              </div>
            </div>

            {/* "jobPostingDate": "2023-08-23",
                "lastApplyDate": null, */}
            <div className="">
              <span className="card-title fw-bold">Dates</span>
              <div className="row d-flex justify-content-between bg-light">
                <span className="col-8 d-flex justify-content-start">
                  <p style={{ fontWeight: "bold" }}>Job Posting Date :</p>{" "}
                  {jobDescriptionData.jobPostingDate}
                </span>
                <span className="col-8 d-flex justify-content-start">
                  <p style={{ fontWeight: "bold" }}>Last Apply Date :</p>{" "}
                  {jobDescriptionData.lastApplyDate}
                </span>
              </div>
            </div>

            {/* "minSalary": 0.0,
                "maxSalary": 10000.0,*/}
            <div className="">
              <span className="card-title fw-bold">Salary</span>
              <div className="row d-flex justify-content-between bg-light">
                <span className="col-8 d-flex justify-content-start">
                  <p style={{ fontWeight: "bold" }}>Minimum Salary :</p>{" "}
                  {jobDescriptionData.minSalary}
                </span>
                <span className="col-8 d-flex justify-content-start">
                  <p style={{ fontWeight: "bold" }}>Max Salary</p>{" "}
                  {jobDescriptionData.maxSalary}
                </span>
              </div>
            </div>

            {/* "minExperience": 0,
                "maxExperience": 2,*/}
            <div className="">
              <span className="card-title fw-bold">Experience</span>
              <div className="row d-flex justify-content-between bg-light">
                <span className="col-8 d-flex justify-content-start">
                  <p style={{ fontWeight: "bold" }}>Minimum Experience :</p>{" "}
                  {jobDescriptionData.minExperience}
                </span>
                <span className="col-8 d-flex justify-content-start">
                  <p style={{ fontWeight: "bold" }}>Max Experience</p>{" "}
                  {jobDescriptionData.maxExperience}
                </span>
              </div>
            </div>

            {/* "qualificationType": null,
                "qualificationType2": null,*/}
            <div className="">
              <span className="card-title fw-bold">Qualifications</span>

              <div className="row d-flex justify-content-between bg-light">
                <span className="col-8 d-flex justify-content-start">
                  <p style={{ fontWeight: "bold" }}>Qualification 1:</p>{" "}
                  {jobDescriptionData.qualificationType
                    ? jobDescriptionData.qualificationType
                    : "Not Mentioned"}
                </span>
                <span className="col-8 d-flex justify-content-start">
                  <p style={{ fontWeight: "bold" }}>Qualification 2:</p>{" "}
                  {jobDescriptionData.qualificationType2
                    ? jobDescriptionData.qualificationType2
                    : "Not Mentioned"}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Data not Fetched!</div>
      )}
    </div>
  );
};

export default JobDescription;
