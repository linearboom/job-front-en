import React from "react";
import { useState, useEffect } from "react";
import DeleteConfirmation from "../Util/DeleteConfirmation";
import axios from "axios";
import ViewJobModal from "./ViewJobModal";
import { useNavigate } from "react-router-dom";
import Applications from "./Applications";
import "./employerStyle.css";

const PostedJobs = ({
  employerData,
  setEmployerData,
  setChangeEmployer,
  setJobData,
}) => {
  const [jobs, setJobs] = useState(employerData.jobs);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [itemDelete, setItemDelete] = useState(null);
  // For controling the modal assosciated with viewing the applicants
  const [viewApplicants, setViewApplicants] = useState(false);
  const [job, setJob] = useState(null);
  const DELETE_URL = "http://localhost:8181/employer/deleteJob";
  const nav = useNavigate();

  const [viewJob, setViewJob] = useState(false);

  const hideViewJobModal = () => {
    setViewJob(false);
  };

  const handleEdit = () => {
    setViewJob(false);
    setJobData(job);
    nav("/postnewjob");
  };

  const hideModal = () => {
    setConfirmDelete(false);
  };

  const handleDelete = async (item) => {
    // alert(item.jobId);
    try {
      let res = await axios.post(DELETE_URL, item, { withCredentials: true });

      // console.log("Hello");
      if (res.data) {
        alert(res.data);
        setChangeEmployer(true);
      } else {
        alert("Session Expired");
      }
    } catch {
      alert("Server Error");
    }
    setConfirmDelete(false);
  };

  useEffect(() => {
    setJobs(employerData.jobs);
  }, [employerData]);
  return (
    <div className="CPJOBS" style={{ marginTop: "60px" }}>
      {!viewApplicants ? (
        <table className="table table-striped" style={{ textAlign: "center" }}>
          <thead>
            <th>Job Id</th>
            <th>Job Title</th>
            <th>Post Available</th>
            <th>Job Posting Data</th>
            <th>View Applicants</th>
            <th>View</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {jobs &&
              jobs.map((item) => (
                <tr key={item.jobId}>
                  <td>{item.jobId}</td>
                  <td>{item.jobTitle}</td>
                  <td>{item.postAvail}</td>
                  <td>{item.jobPostingDate}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        setJob(item);
                        setViewApplicants(true);
                      }}
                    >
                      View Applicants
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => {
                        setViewJob(true);
                        setItemDelete(item);
                        setJob(item);
                      }}
                    >
                      View
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => {
                        setConfirmDelete(true);
                        setItemDelete(item);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <Applications
          job={job}
          setViewApplicants={setViewApplicants}
          setChangeEmployer={setChangeEmployer}
        ></Applications>
      )}
      {confirmDelete && (
        <DeleteConfirmation
          showModal={setConfirmDelete}
          hideModal={hideModal}
          handleDelete={handleDelete}
          item={itemDelete}
          message="Are you sure you want to delete this Job?"
        />
      )}
      {viewJob && (
        <ViewJobModal
          showModal={setViewJob}
          hideModal={(e) => {
            setViewJob(false);
          }}
          handleEdit={handleEdit}
          item={itemDelete}
          message="Are you sure you want to delete this Job?"
        />
      )}
    </div>
  );
};

export default PostedJobs;
