import React, { useEffect, useState } from "react";
import DeleteConfirmation from "../Util/DeleteConfirmation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Shows the list of applied jobs
const AppliedJob = ({ userData, setChangeJob, jobData, setJobData }) => {
  const [application, setApplication] = useState(userData.jobSeekerApplication);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [itemDelete, setItemDelete] = useState(null);
  const DELETE_URL = "http://localhost:8181/job_seeker/deleteApplication";
  const nav = useNavigate();
  const hideModal = () => {
    setConfirmDelete(false);
  };

  const handleDelete = async (item) => {
    console.log(item);
    try {
      let res = await axios.post(DELETE_URL, item, { withCredentials: true });
      // console.log("Hello");
      if (res.data) {
        alert(res.data);
        setChangeJob(true);
      } else {
        alert("Session Expired");
      }
    } catch {
      alert("Session Expired");
    }
    setConfirmDelete(false);
  };

  useEffect(() => {
    setApplication(userData.jobSeekerApplication);
  }, [userData]);
  return (
    <div
      className=""
      style={{
        marginTop: "80px",
        height: "1000px",
        backgroundImage: `url(${"https://images.pexels.com/photos/7129682/pexels-photo-7129682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat-y",
      }}
    >
      <div className="" style={{ marginTop: "80px" }}>
        <h1 className="text-center fst-italic mb-5">YOU HAVE APPLIED FOR...</h1>
        {application.length > 0 ? (
          <div className="">
            {application &&
              application.map((item) => (
                <div
                  key={item.applicationId}
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
                              if (item.job) {
                                setJobData(item.job);
                                nav("/jobProfilePage");
                              } else {
                                alert("Job has been Deleted!");
                              }
                            }}
                          >
                            View
                          </a>
                        </li>
                        <li class="nav-item ms-3">
                          <a
                            class="nav-link active"
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
                      <h3 class="card-title text-center">
                        {item.job ? item.job.jobTitle : "Job Has Been Deleted"}
                      </h3>
                      <div className="d-flex justify-content-between ">
                        <p className="fw-semibold">Application Id</p>
                        <p className="mx-2">{item.applicationId}</p>
                      </div>

                      <div className="d-flex justify-content-between ">
                        <p className="fw-semibold">Job Title :</p>
                        <p className="mx-2">
                          {item.job
                            ? item.job.jobTitle
                            : "Job Has Been Deleted"}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between ">
                        <p className="fw-semibold">Application Date :</p>
                        <p className="mx-2">{item.applyDate.slice(0, 10)}</p>
                      </div>
                      <div className="d-flex justify-content-between ">
                        <p className="fw-semibold"> Contacted :</p>
                        <p className="mx-2">
                          {" "}
                          {item.isContacted === "\u0000" ? "NO" : "YES"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <h1>No Applied Jobs</h1>
        )}
        {confirmDelete && (
          <DeleteConfirmation
            showModal={setConfirmDelete}
            hideModal={hideModal}
            handleDelete={handleDelete}
            item={itemDelete}
            message="Are you sure you want to delete this Job Application?"
          />
        )}
      </div>
    </div>
  );
};

export default AppliedJob;

{
  /* <button
onClick={(e) => {
  if (item.job) {
    setJobData(item.job);
    nav("/jobProfilePage");
  } else {
    alert("Job has been Deleted!");
  }
}}
>
View
</button> */
}
