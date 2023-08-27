import React, { useState } from "react";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const EducationForm = ({ education, setModal, setChangeJob }) => {
  const educationDefault = {
    degreeName: "",
    major: "",
    qualification: {
      qualificationId: 3,
      qualificarionName: "4 Year Degreee",
    },
    percentage: 70,
    universityName: "",
    startYear: "",
    endYear: "",
  };
  const [updateEducation, setUpdateEducation] = useState(
    education || educationDefault
  );
  const UPDATE_URL = "http://localhost:8181/job_seeker/addEducation"; //  Back End URL

  const submit = async (e) => {
    //alert(updateEducation);
    e.preventDefault();
    try {
      let res = await axios.post(UPDATE_URL, updateEducation, {
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
    <>
      <div className="row justify-content-center m-3 mt-5">
        <div className="col-sm-12 col-md-6 ">
          <form className="border  rounded-4 shadow-lg p-3 mb-5 bg-body rounded">
            <div className="">
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label htmlFor="">Degree Name*</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Degree Name"
                  required
                  id="degreeName"
                  onChange={(e) =>
                    setUpdateEducation({
                      ...updateEducation,
                      degreeName: e.target.value,
                    })
                  }
                  value={updateEducation.degreeName}
                />
              </div>
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Branch Name*</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Job Title"
                  required
                  id="major"
                  onChange={(e) =>
                    setUpdateEducation({
                      ...updateEducation,
                      major: e.target.value,
                    })
                  }
                  value={updateEducation.major}
                />
              </div>
              {/* <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Qualification*</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Job Title"
                  required
                  id="major"
                  onChange={(e) =>
                    setUpdateEducation({
                      ...education,
                      degreeName: e.target.value,
                    })
                  }
                  value={updateEducation.major}
                />
              </div> */}
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Percentage*</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Job Title"
                  required
                  id="percentage"
                  onChange={(e) =>
                    setUpdateEducation({
                      ...updateEducation,
                      percentage: e.target.value,
                    })
                  }
                  value={updateEducation.percentage}
                />
              </div>
              <div className="px-4" style={{ marginTop: "30px" }}>
                <label>University Name*</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Job Title"
                  required
                  id="universityName"
                  onChange={(e) =>
                    setUpdateEducation({
                      ...updateEducation,
                      universityName: e.target.value,
                    })
                  }
                  value={updateEducation.universityName}
                />
              </div>
              <div className="row">
                <div className="px-4 col-md-6" style={{ marginTop: "30px" }}>
                  <label>Start Date*</label>
                  <input
                    className="form-control"
                    type="date"
                    placeholder="Job Title"
                    required
                    id="startYear"
                    onChange={(e) =>
                      setUpdateEducation({
                        ...updateEducation,
                        startYear: e.target.value,
                      })
                    }
                    value={updateEducation.startYear}
                  />
                </div>

                <div className="px-4 col-md-6" style={{ marginTop: "30px" }}>
                  <label>End Date*</label>
                  <input
                    className="form-control"
                    type="date"
                    placeholder="Job Title"
                    required
                    id="endYear"
                    onChange={(e) =>
                      setUpdateEducation({
                        ...updateEducation,
                        endYear: e.target.value,
                      })
                    }
                    value={updateEducation.endYear}
                  />
                </div>
              </div>

              <div className="px-4" style={{ marginTop: "20px" }}>
                <button
                  type="submit"
                  className="btn container-fluid mb-5"
                  style={{ backgroundColor: "#ffd400" }}
                  onClick={submit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EducationForm;
