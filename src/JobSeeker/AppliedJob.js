import React, { useEffect, useState } from "react";
import DeleteConfirmation from "../Util/DeleteConfirmation";
import axios from "axios";
// Shows the list of applied jobs
const AppliedJob = ({ userData, setChangeJob }) => {
  const [application, setApplication] = useState(userData.jobSeekerApplication);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [itemDelete, setItemDelete] = useState(null);
  const DELETE_URL = "http://localhost:8181/job_seeker/deleteApplication";

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
    <div className="appliedJob" style={{ marginTop: "80px" }}>
      {application.length > 0 ? (
        <table className="table table-striped" style={{ textAlign: "center" }}>
          <thead>
            <th>Application Id</th>
            <th>Job Title</th>
            <th>Application Date</th>
            <th>Contacted</th>
            <th>View</th>
            <th>Delete Application</th>
          </thead>
          <tbody>
            {application &&
              application.map((item) => (
                <tr key={item.applicationId}>
                  <td>{item.applicationId}</td>
                  <td>{item.job.jobTitle}</td>
                  <td>{item.applyDate.slice(0, 10)}</td>
                  <td>{item.isContacted === "\u0000" ? "NO" : "YES"}</td>
                  <td>
                    <button>View</button>
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
  );
};

export default AppliedJob;
