import React from "react";
import { useState } from "react";
import PostData from "../Util/PostData";

const Summary = ({ summary, setModal, setChangeJob }) => {
  const summaryDefault = "";

  const [summaryUpdate, setsummaryUpdate] = useState(summary || summaryDefault);

  const submit = async (e) => {
    e.preventDefault();
    const data = { resumeHeadline: summaryUpdate };
    let res = await PostData(
      "http://localhost:8181/job_seeker/addSummary",
      data
    );
    alert(res);
    setChangeJob(true);
    setModal(null);
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
            <h4 style={{ marginTop: "20px" }}>Add a Resume Headline</h4>
            <p className="my-4">
              A Good Resume HeadLine Attracts a lot more recruiters!
            </p>
            <form
              id="certification"
              className="inventorylogin mb-2"
              onSubmit={submit}
            >
              {/* Summary Description */}
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Project Description</label>
                <textarea
                  rows={5}
                  className="form-control"
                  type="textarea"
                  placeholder=" Your Summary Description ? "
                  id="certification"
                  onChange={(e) => setsummaryUpdate(e.target.value)}
                  value={summaryUpdate}
                />
              </div>

              <div className="px-4" style={{ marginTop: "20px" }}>
                <button
                  type="submit"
                  className="btn container-fluid mb-3 fw-bold"
                  style={{ backgroundColor: "#ffd400" }}
                >
                  Submit
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

export default Summary;
