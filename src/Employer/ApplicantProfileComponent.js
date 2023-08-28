import React, { useEffect, useState } from "react";
import axios from "axios";

const ApplicantProfileComponent = ({
  setViewJobSeeker,
  applicantFetchData,
  setChangeEmployer,
}) => {
  const URL = "http://localhost:8181/employer/viewApplicant";
  const [applicationData, setApplicationData] = useState(null);

  useEffect(() => {
    const fetchApplicantData = async () => {
      try {
        let res = await axios.post(URL, applicantFetchData, {
          withCredentials: true,
        });
        // console.log("Hello");
        if (res.data) {
          setApplicationData(res.data);
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
          </div>
        </div>
      ) : (
        <div>Data not Fetched!</div>
      )}
    </div>
  );
};

export default ApplicantProfileComponent;
