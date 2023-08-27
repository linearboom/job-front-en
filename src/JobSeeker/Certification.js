import React, { useState } from "react";
import axios from "axios";

const Certification = ({ certification, setModal, setChangeJob }) => {
  const certificationDefault = {
    id: {
      jobSeekerId: 5,
      certificationName: "Core Java Workshop",
    },
    certificationDescription: "Welcome to Core Java Tutorial",
    url: null,
  };

  const [certificationUpdate, setCertificationUpdate] = useState(
    certification || certificationDefault
  );
  const UPDATE_URL = "http://localhost:8181/job_seeker/addCertification";

  const submit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(UPDATE_URL, certificationUpdate, {
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
            <h4 style={{ marginTop: "20px" }}>Certifications</h4>
            <p className="my-4">Enter the following details to continue</p>
            <form
              id="certification"
              className="inventorylogin mb-2"
              onSubmit={submit}
            >
              {/*certificationName*/}
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Certification Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Certification Name?"
                  required
                  id="certification"
                  onChange={(e) =>
                    setCertificationUpdate({
                      ...certificationUpdate,
                      id: { certificationName: e.target.value },
                    })
                  }
                  value={certificationUpdate.id.certificationName}
                />
              </div>

              {/* certificationDescription */}
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Project Description</label>
                <textarea
                  rows={5}
                  className="form-control"
                  type="textarea"
                  placeholder=" Your Certification Description ? "
                  required
                  id="certification"
                  onChange={(e) =>
                    setCertificationUpdate({
                      ...certificationUpdate,
                      certificationDescription: e.target.value,
                    })
                  }
                  value={certificationUpdate.certificationDescription}
                />
              </div>

              {/* url */}
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>URL</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder=" URL "
                  id="certification"
                  onChange={(e) =>
                    setCertificationUpdate({
                      ...certificationUpdate,
                      url: e.target.value,
                    })
                  }
                  value={certificationUpdate.url}
                />
              </div>

              <div className="px-4" style={{ marginTop: "20px" }}>
                <button
                  type="submit"
                  className="btn container-fluid"
                  style={{ backgroundColor: "#ffd400" }}
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
