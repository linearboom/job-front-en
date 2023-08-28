import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const EditUserSkill = ({
  skillExist,
  setSkillExist,
  setModal,
  setChangeJob,
}) => {
  const [skill, setSkill] = useState([
    // {
    //   skillSetId: 5,
    //   skillName: "Spring",
    //   skillApproved: "1",
    // },
    // {
    //   skillSetId: 6,
    //   skillName: "Spring Boot",
    //   skillApproved: "1",
    // },
    // {
    //   skillSetId: 8,
    //   skillName: "Market Research",
    //   skillApproved: "1",
    // },
  ]);

  const nav = useNavigate();

  const API_URL = "http://localhost:8181/job_seeker/addSkills";
  const DELETE_URL = "http://localhost:8181/job_seeker/deleteSkill";
  const [newSkill, setNewSkill] = useState([]);
  const [inputSkill, setInputSkill] = useState("");

  const search = (e) => {
    e.preventDefault();
    setNewSkill([...newSkill, inputSkill]);
    console.log(newSkill);
    setInputSkill("");
  };

  const handleDelete = async (e, item) => {
    e.preventDefault();
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
      alert("Connection to the Server Failed");
    }
  };

  const handleDeleteLocal = (item) => {
    setNewSkill((current) => current.filter((skill) => skill != item));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    // Transform newSkill array into an array of skill objects
    const transformedSkills = newSkill.map((skillName) => {
      return { skillName };
    });

    // Send Data to the Server

    const data = {
      skills: transformedSkills,
    };

    try {
      let res = await axios.post(API_URL, data, { withCredentials: true });
      console.log("Hello");
      if (res.data) {
        alert(res.data);
        setChangeJob(true);
        setNewSkill([]);
        setModal(null);
      } else {
        alert("Session Expired");
      }
    } catch {
      alert("Connection to the Server Failed");
    }
  };

  const [skill1, set] = useState(["Hello", "Helll", 3, 4, 5, 6]);

  return (
    <div className="row justify-content-center Align-Center ">
      <div className="col-sm-12 col-md-12  ">
        <div className=" border rounded-4 shadow-lg">
          <div
            className=" border  rounded-4 shadow-lg"
            style={{ backgroundColor: "#ffd400" }}
          >
            <h4 className="m-3">Existing Skills</h4>
          </div>

          <table className="table table-striped">
            <thead>
              <tr className="fs-6">
                <th>Sr No.</th>
                <th>Skill Name</th>
                {/* <th>Skill Proficieny Level</th> */}
                <th>Delete Skill</th>
              </tr>
            </thead>
            <tbody>
              {skillExist &&
                skillExist.map((item, index) => (
                  <tr key={item.skillSetId}>
                    <td>{index + 1}</td>
                    <td>{item.skill.skillName}</td>
                    <td>
                      {/* <button
                        id="delete-skill-button"
                        style={{ backgroundColor: "red" }}
                        className="btn btn-bg-success "
                        onClick={(e) => handleDelete(e, item)}
                      >
                        Delete
                      </button> */}
                      <FontAwesomeIcon
                        id="delete-skill-button"
                        className="btn btn-bg-success text-danger"
                        onClick={(e) => handleDelete(e, item)}
                        icon={faTrash}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div
            className=" border mt-5 shadow-lg "
            style={{ backgroundColor: "#ffd400" }}
          >
            <h4 className="m-3 ">New Skills</h4>
          </div>
          <form onSubmit={search}>
            <div
              className="px-4 row m-5 "
              style={{ marginTop: "30px", justifyContent: "center" }}
            >
              <div class="input-group input-group-lg">
                <input
                  className=" col-lg-6 form-control"
                  type="text"
                  placeholder="Add New Skill"
                  required
                  id="skill"
                  onChange={(e) => {
                    setInputSkill(e.target.value);
                  }}
                  value={inputSkill}
                />
                <button className=" btn btn-outline-secondary bg-success text-white">
                  Add Skill
                </button>
              </div>
            </div>
          </form>

          <table
            className="table table-striped"
            style={{ textAlign: "center" }}
          >
            <thead>
              <tr className="fs-6">
                <th>Sr No.</th>
                <th>Skill Name</th>
                {/* <th>Skill Proficieny Level</th> */}
                <th>Delete Skill</th>
              </tr>
            </thead>
            <tbody>
              {newSkill.length &&
                newSkill.map((item, index) => (
                  <tr key={index} className="fw-bold">
                    <td>{index + 1}</td>
                    <td>{item}</td>
                    <td>
                      {/* <button
                        id="delete-skill-button"
                        style={{ backgroundColor: "red" }}
                        className="btn btn-bg-success "
                        onClick={() => handleDeleteLocal(item)}
                      >
                        
                      </button> */}
                      <FontAwesomeIcon
                        id="delete-skill-button"
                        className="btn btn-bg-success text-danger"
                        onClick={() => handleDeleteLocal(item)}
                        icon={faTrash}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="m-5">
            <button
              onClick={handleUpdate}
              className="btn  btn-lg me-4 bg-success text-white"
            >
              Update Skills
            </button>
            <button
              className="btn  btn-lg bg-success text-white"
              onClick={(e) => {
                setModal(null);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserSkill;
