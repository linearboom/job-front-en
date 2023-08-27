import React, { useState } from "react";
import axios from "axios";

const Accomplishment = ({ accomplishment, setModal, setChangeJob }) => {
  const defaultAccomplishment = {
    title: "",
    description: "",
  };

  const [accomplishmentUpdate, setAccomplishmentUpdate] = useState(
    accomplishment || defaultAccomplishment
  );
  const UPDATE_URL = "http://localhost:8181/job_seeker/addAccomplishment";

  const submit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(UPDATE_URL, accomplishmentUpdate, {
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
              id="accomplishment"
              className="inventorylogin mb-2"
              onSubmit={submit}
            >
              {/*title */}
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Project Title</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Accomplishment Title "
                  required
                  id="accomplishment"
                  onChange={(e) =>
                    setAccomplishmentUpdate({
                      ...accomplishmentUpdate,
                      title: e.target.value,
                    })
                  }
                  value={accomplishmentUpdate.title}
                />
              </div>

              {/* description */}
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Project Description</label>
                <textarea
                  rows={5}
                  className="form-control"
                  type="textarea"
                  placeholder=" Your Accomplishment Description ? "
                  required
                  id="project"
                  onChange={(e) =>
                    setAccomplishmentUpdate({
                      ...accomplishmentUpdate,
                      description: e.target.value,
                    })
                  }
                  value={accomplishmentUpdate.description}
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

export default Accomplishment;
