import React, { useEffect, useState } from "react";
import axios from "axios";

const EditWorkExp = ({ experience, setModal, setChangeJob }) => {
  const experienceDefault = {
    companyName: "",
    startDate: "", //input type date
    endDate: "", //input type date
    jobDesignation: "",
    jobIndustry: "",
    jobDescription: "",
    jobLocation: "",
    experienceMonths: 0,
    experienceYears: 0,
  };

  const [experienceUpdate, setExperienceUpdate] = useState(
    experience || experienceDefault
  );
  const UPDATE_URL = "http://localhost:8181/job_seeker/addWorkExp";

  // useEffect(() => {
  //   if (!experience) {
  //     setExperienceUpdate({
  //       companyName: "",
  //       startDate: "", //input type date
  //       endDate: "", //input type date
  //       jobDesignation: "",
  //       jobIndustry: "",
  //       jobType: "",
  //       jobDescription: "",
  //       jobLocation: "",
  //       experienceMonths: 0,
  //       experienceYears: 0,
  //     });
  //   }
  // }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(UPDATE_URL, experienceUpdate, {
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
            <h4 style={{ marginTop: "20px" }}>Work Experience</h4>
            <p className="my-4">Enter the following details to continue</p>
            <form
              id="workExp"
              className="inventorylogin mb-2"
              onSubmit={submit}
            >
              {/* Company Name */}
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Company Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Company Name "
                  required
                  id="workExp"
                  onChange={(e) =>
                    setExperienceUpdate({
                      ...experienceUpdate,
                      companyName: e.target.value,
                    })
                  }
                  value={experienceUpdate.companyName}
                />
              </div>

              <div className="row d-flex justify-content-center align-items-center">
                {/* Start Date */}
                <div
                  className="px-4 col-sm-12 col-lg-6 text-center "
                  style={{ marginTop: "30px" }}
                >
                  <label>Start Date</label>
                  <input
                    className="form-control"
                    type="date"
                    placeholder="Enter Start Date "
                    required
                    id="workExp"
                    onChange={(e) =>
                      setExperienceUpdate({
                        ...experienceUpdate,
                        startDate: e.target.value,
                      })
                    }
                    value={experienceUpdate.startDate}
                  />
                </div>

                {/* End Date */}
                <div
                  className="px-4 col-sm-12 col-lg-6  text-center "
                  style={{ marginTop: "30px" }}
                >
                  <label>End Date</label>
                  <input
                    className="form-control"
                    type="date"
                    placeholder="Enter End Date "
                    required
                    id="workExp"
                    onChange={(e) =>
                      setExperienceUpdate({
                        ...experienceUpdate,
                        endDate: e.target.value,
                      })
                    }
                    value={experienceUpdate.endDate}
                  />
                </div>
              </div>

              {/* Job Designation */}
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Job Designation</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder=" Your Job Designation ? "
                  required
                  id="workExp"
                  onChange={(e) =>
                    setExperienceUpdate({
                      ...experienceUpdate,
                      jobDesignation: e.target.value,
                    })
                  }
                  value={experienceUpdate.jobDesignation}
                />
              </div>

              {/* jobIndustry */}
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Job Industry</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder=" Your Job Industry ? "
                  required
                  id="workExp"
                  onChange={(e) =>
                    setExperienceUpdate({
                      ...experienceUpdate,
                      jobIndustry: e.target.value,
                    })
                  }
                  value={experienceUpdate.jobIndustry}
                />
              </div>

              {/* jobType */}
              {/* <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Job Type</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder=" Your Job Type ? "
                  required
                  id="workExp"
                  onChange={(e) =>
                    setExperienceUpdate({
                      ...experienceUpdate,
                      jobType: e.target.value,
                    })
                  }
                  value={experienceUpdate.jobType}
                />
              </div> */}

              {/* jobDescription */}
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Job Description</label>
                <textarea
                  rows={5}
                  className="form-control"
                  type="textarea"
                  placeholder=" Your Job Description ? "
                  required
                  id="workExp"
                  onChange={(e) =>
                    setExperienceUpdate({
                      ...experienceUpdate,
                      jobDescription: e.target.value,
                    })
                  }
                  value={experienceUpdate.jobDescription}
                />
              </div>

              {/* jobLocation */}
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Job Location</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder=" Your Job Location ? "
                  required
                  id="workExp"
                  onChange={(e) =>
                    setExperienceUpdate({
                      ...experienceUpdate,
                      jobLocation: e.target.value,
                    })
                  }
                  value={experienceUpdate.jobLocation}
                />
              </div>

              {/* experienceMonths */}
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Experience in Months</label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="Enter your months of experience"
                  required
                  id="workExp"
                  onChange={(e) =>
                    setExperienceUpdate({
                      ...experienceUpdate,
                      experienceMonths: e.target.value,
                    })
                  }
                  value={experienceUpdate.experienceMonths}
                />
              </div>

              {/* experienceYears */}
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Experience in Years</label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="Enter your Years of experience"
                  required
                  id="workExp"
                  onChange={(e) =>
                    setExperienceUpdate({
                      ...experienceUpdate,
                      experienceYears: e.target.value,
                    })
                  }
                  value={experienceUpdate.experienceYears}
                />
              </div>

              <div className="px-4" style={{ marginTop: "20px" }}>
                <button
                  type="submit"
                  className="btn container-fluid"
                  style={{ backgroundColor: "#ffd400" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditWorkExp;
