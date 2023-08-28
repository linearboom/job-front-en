import React, { useEffect, useState } from "react";
import axios from "axios";

const ApplicantProfileComponent = ({
  setViewJobSeeker,
  applicantFetchData,
  setChangeEmployer,
}) => {
  const URL = "http://localhost:8181/employer/viewApplicant";
  const [applicationData, setApplicationData] = useState();
  const [profileImage, setProfileImage] = useState();

  useEffect(() => {
    const fetchApplicantData = async () => {
      try {
        let res = await axios.post(URL, applicantFetchData, {
          withCredentials: true,
        });
        // console.log("Hello");
        if (res.data) {
          setApplicationData(res.data);
          const imagePath = res.data.profileImagePath;
          axios
            .get(
              `http://localhost:8181/job_seeker/getProfileImage?imagePath=${imagePath}`,
              {
                responseType: "arraybuffer", // Set the response type to 'arraybuffer' for binary data
              }
            )
            .then((response) => {
              const imageBlob = new Blob([response.data], {
                type: "image/jpeg",
              }); // Change the content type as needed

              const imageUrl = URL.createObjectURL(imageBlob);
              setProfileImage(imageUrl);
              console.log("Profile Image : ", profileImage);
            })
            .catch((error) => {
              console.error("Error fetching image:", error);
            });
        } else {
          alert("Session Expired");
        }
      } catch {
        alert("Connection to the Server Failed");
      }
    };

    fetchApplicantData();
  }, []);

  return (
    <div>
      {applicationData ? (
        <div className="row">
          <div className="col-4">
            <div className="">
              <img
                key={profileImage}
                src={profileImage}
                alt="Profile Image"
                style={{
                  height: "160px",
                  width: "120px",
                  borderRadius: "100px",
                }}
              />
            </div>
            <div className="d-flex justify-content-between bg-light">
              <p className="fw-semibold">Applicant Name</p>
              <p className="mx-2">{applicationData.firstName}</p>
            </div>
            <div className="d-flex justify-content-between bg-light">
              <p className="fw-semibold">Date Of Birth</p>
              <p className="mx-2">{applicationData.dateOfBirth}</p>
            </div>
            <div className="d-flex justify-content-between bg-light">
              <h6 className="fw-semibold">Current Designation</h6>
              <p className="mx-2">{applicationData.currentDesignation}</p>
            </div>
          </div>
          <div className="row col-8">
            {/* Work Experience */}
            <div className="">
              <span className="card-title fw-bold">Work Experience</span>
              {applicationData.experience &&
                applicationData.experience.map((item, index) => (
                  <div className="row d-flex justify-content-between bg-light">
                    <span className="col-8 d-flex justify-content-start">
                      {item.companyName}
                    </span>
                    <p className="col-2"> {item.startDate}</p>
                    <p className="col-2"> {item.endDate}</p>
                    <pre className="col-8 d-flex justify-content-start">
                      {item.jobDescription}
                    </pre>
                  </div>
                ))}
            </div>

            {/* Education */}
            <div className="">
              <span className="card-title fw-bold">Education</span>
              {applicationData.education &&
                applicationData.education.map((item, index) => (
                  <div className="row d-flex justify-content-between bg-light">
                    <span className="col-8 d-flex justify-content-start">
                      <p style={{ fontWeight: "bold" }}>Degreee :</p>{" "}
                      {item.degreeName}
                    </span>
                    <span className="col-8 d-flex justify-content-start">
                      <p style={{ fontWeight: "bold" }}>Major :</p> {item.major}
                    </span>
                    <p className="col-2">
                      {" "}
                      {item.qualification.qualificarionName}
                    </p>
                    <span className="col-8 d-flex justify-content-start">
                      <p style={{ fontWeight: "bold" }}>Percentage :</p>{" "}
                      {item.percentage}
                    </span>
                    <span className="col-8 d-flex justify-content-start">
                      <p style={{ fontWeight: "bold" }}>Start Year :</p>{" "}
                      {item.startYear}
                    </span>
                    <span className="col-8 d-flex justify-content-start">
                      <p style={{ fontWeight: "bold" }}>End Year :</p>{" "}
                      {item.startYear}
                    </span>
                  </div>
                ))}
            </div>

            {/* Accomplishment */}
            <div className="">
              <span className="card-title fw-bold">Accomplishment</span>
              {applicationData.accomplishment &&
                applicationData.accomplishment.map((item, index) => (
                  <div className="row d-flex justify-content-between bg-light">
                    <span className="col-8 d-flex justify-content-start">
                      <p style={{ fontWeight: "bold" }}>Title :</p> {item.title}
                    </span>
                    <pre className="col-8 d-flex justify-content-start">
                      <h6 style={{ fontWeight: "bold" }}>Description :</h6>{" "}
                      {item.description}
                    </pre>
                  </div>
                ))}
            </div>

            {/* Projects */}
            <div className="">
              <span className="card-title fw-bold">Projects</span>
              {applicationData.project &&
                applicationData.project.map((item, index) => (
                  <div className="row d-flex justify-content-between bg-light">
                    <span className="col-8 d-flex justify-content-start">
                      <p style={{ fontWeight: "bold" }}>Title :</p>{" "}
                      {item.id.projectTitle}
                    </span>
                    <span className="col-8 d-flex justify-content-start">
                      <p style={{ fontWeight: "bold" }}>Technology Stack :</p>{" "}
                      {item.technologyStack}
                    </span>
                    <pre className="col-8 d-flex justify-content-start">
                      <h6 style={{ fontWeight: "bold" }}>Description :</h6>{" "}
                      {item.projectDescription}
                    </pre>
                    <br></br>
                  </div>
                ))}
            </div>

            {/* Certificates */}
            <div className="">
              <span className="card-title fw-bold">Certificates</span>
              {applicationData.certificate &&
                applicationData.certificate.map((item, index) => (
                  <div className="row d-flex justify-content-between bg-light">
                    <span className="col-8 d-flex justify-content-start">
                      <p style={{ fontWeight: "bold" }}>Certification Name :</p>{" "}
                      {item.id.certificationName}
                    </span>
                    <pre className="col-8 d-flex justify-content-start ">
                      <h6 style={{ fontWeight: "bold" }}>
                        Certification Description :
                      </h6>{" "}
                      {item.certificationDescription}
                    </pre>
                    <span className="col-8 d-flex justify-content-start">
                      <p style={{ fontWeight: "bold" }}>URL :</p>
                      {item.url}
                    </span>
                    <br></br>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div>Data not Fetched!</div>
      )}
    </div>
  );
};

export default ApplicantProfileComponent;
