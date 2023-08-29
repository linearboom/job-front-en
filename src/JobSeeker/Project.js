import React, { useState } from "react";
import axios from "axios";

const Project = ({ project, setModal, setChangeJob }) => {
  const projectDefault = {
    id: {
      //jobSeekerId: 5,
      projectTitle: "",
    },
    projectDescription: "",
    technologyStack: "",
  };

  const [projectUpdate, setProjectUpdate] = useState(project || projectDefault);
  const UPDATE_URL = "http://localhost:8181/job_seeker/addProject";

  const submit = async (e) => {
    e.preventDefault();
    alert(projectUpdate.id.projectTitle);
    try {
      let res = await axios.post(UPDATE_URL, projectUpdate, {
        withCredentials: true,
      });

      if (res.data) {
        //nav(`/editskilltest?jobId=${res.data.JobId}`);
        alert(res.data);
        setModal(null);
        setChangeJob(true);
      } else {
        alert("Session Expired");
      }
    } catch {
      alert("Connection to the Server Failed");
    }
  };

  return (
    <div>
      <div id="postnewjob" style={{ marginTop: "60px" }}>
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "650px" }}
          id="image"
        >
          <div
            className="col-sm-12 col-lg-10  text-center "
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 4px rgba(19, 19, 19, 3)",
              borderRadius: "10px",
            }}
          >
            <img
              // src={require("./Logo.jpg")}
              alt=""
              width="50px"
              style={{ marginTop: "40px" }}
            />
            <h4 style={{ marginTop: "20px" }}>Projects</h4>
            <p className="my-4">Enter the following details to continue</p>
            <form
              id="project"
              className="inventorylogin mb-2"
              onSubmit={submit}
            >
              {/* id.projectTitle */}
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Project Title</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Project Title "
                  required
                  id="project"
                  onChange={(e) =>
                    setProjectUpdate({
                      ...projectUpdate,
                      id: { projectTitle: e.target.value },
                    })
                  }
                  value={projectUpdate.id.projectTitle}
                />
              </div>

              {/* projectDescription */}
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Project Description</label>
                <textarea
                  rows={5}
                  className="form-control"
                  type="textarea"
                  placeholder=" Your Project Description ? "
                  required
                  id="project"
                  onChange={(e) =>
                    setProjectUpdate({
                      ...projectUpdate,
                      projectDescription: e.target.value,
                    })
                  }
                  value={projectUpdate.projectDescription}
                />
              </div>

              {/* technologyStack */}
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Technology Stack</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Technology Stack "
                  required
                  id="project"
                  onChange={(e) =>
                    setProjectUpdate({
                      ...projectUpdate,
                      technologyStack: e.target.value,
                    })
                  }
                  value={projectUpdate.technologyStack}
                />
              </div>

              <div className="px-4" style={{ marginTop: "20px" }}>
               
                <button
                  type="submit"
                  className="btn container-fluid mb-3 fw-bold"
                  style={{ backgroundColor: "#ffd400" }}
                >
                  Continue
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
