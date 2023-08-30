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
      <h1 className="text-center fst-italic mb-5">Job Posted...</h1>
      {!viewApplicants ? (
        <div>
          {jobs &&
            jobs.map((item) => (
              <div
                key={item.jobId}
                className="row justify-content-center  mb-5 "
              >
                <div class="row card text-center col-md-6 col-sm-12 shadow-lg">
                  <div class="card-header">
                    <ul class="nav nav-pills card-header-pills">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          href="#"
                          onClick={(e) => {
                            setJob(item);
                            setViewApplicants(true);
                          }}
                        >
                          View Applications
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link active ms-3"
                          href="#"
                          onClick={(e) => {
                            setViewJob(true);
                            setItemDelete(item);
                            setJob(item);
                          }}
                        >
                          View
                        </a>
                      </li>
                      <li class="nav-item ms-3">
                        <a
                          class="nav-link active bg bg-danger"
                          href="#"
                          onClick={(e) => {
                            setConfirmDelete(true);
                            setItemDelete(item);
                          }}
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="card-body justify-content-between">
                    <h3 class="card-title text-center">{item.jobTitle}</h3>
                    <div className="d-flex justify-content-between ">
                      <p className="fw-semibold"> Job Id</p>
                      <p className="mx-2">{item.jobId}</p>
                    </div>

                    <div className="d-flex justify-content-between ">
                      <p className="fw-semibold">Job Title :</p>
                      <p className="mx-2">{item.jobTitle}</p>
                    </div>
                    <div className="d-flex justify-content-between ">
                      <p className="fw-semibold">Post Available :</p>
                      <p className="mx-2">{item.postAvail}</p>
                    </div>
                    <div className="d-flex justify-content-between ">
                      <p className="fw-semibold"> Job Posting Date :</p>
                      <p className="mx-2">{item.jobPostingDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
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
