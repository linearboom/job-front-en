import React, { useEffect, useState } from "react";
import axios from "axios";
import ApplicantProfileComponent from "./ApplicantProfileComponent";

const Applications = ({ job, setViewApplicants, setChangeEmployer }) => {
  const APP = "http://localhost:8181/employer/viewApplicants";
  const [applications, setApplications] = useState(null);
  const [viewJobSeeker, setViewJobSeeker] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = { jobId: job.jobId };
      try {
        let res = await axios.post(APP, data, { withCredentials: true });
        // console.log("Hello");
        if (res.data) {
          //alert(res.data);
          setApplications(res.data);
        } else {
          alert("Session Expired");
        }
      } catch {
        alert("Connection to the Server Failed");
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <span>Showing Applicants for Job Id : {job.jobId}</span>
      <button
        onClick={(e) => {
          setViewApplicants(false);
        }}
      >
        Go Back
      </button>
      {applications ? (
        applications.length ? (
          !viewJobSeeker ? (
            <div>
              <table
                className="table table-striped"
                style={{ textAlign: "center" }}
              >
                <thead>
                  <th>Application Id</th>
                  <th>Applicant Name</th>
                  <th>Application Date</th>
                  <th>Contacted</th>
                  <th>ShortListed</th>
                  <th>View Applicant Profile</th>
                </thead>
                <tbody>
                  {applications.map((item) => (
                    <tr>
                      <td>{item.applicationId}</td>
                      <td>{item.jobSeekerDTO.firstName}</td>
                      <td>{item.applyDate.slice(0, 10)}</td>
                      <td>{item.isContacted ? "YES" : "NO"}</td>
                      <td>{item.isShortlist ? "YES" : "NO"}</td>
                      <td>
                        <button
                          onClick={(e) => {
                            setViewJobSeeker(true);
                            // Set up a confirmation Modal
                          }}
                        >
                          View Profile
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <ApplicantProfileComponent></ApplicantProfileComponent>
          )
        ) : (
          <div>
            <h1>No Applications Found</h1>
          </div>
        )
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Applications;