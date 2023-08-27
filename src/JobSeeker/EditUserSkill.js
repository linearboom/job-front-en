import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

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
        //alert(res.data);
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
    <div style={{ marginTop: "80px" }}>
      <h4>Existing Skills</h4>
      <table className="table table-striped" style={{ textAlign: "center" }}>
        <thead>
          <tr>
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
                  <button
                    id="delete-skill-button"
                    style={{ backgroundColor: "red" }}
                    className="btn btn-bg-success "
                    onClick={(e) => handleDelete(e, item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <h4>New Skills</h4>

      <table className="table table-striped" style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Skill Name</th>
            {/* <th>Skill Proficieny Level</th> */}
            <th>Delete Skill</th>
          </tr>
        </thead>
        <tbody>
          {newSkill.length &&
            newSkill.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item}</td>
                <td>
                  <button
                    id="delete-skill-button"
                    style={{ backgroundColor: "red" }}
                    className="btn btn-bg-success "
                    onClick={() => handleDeleteLocal(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <form onSubmit={search}>
        <div
          className="px-4 row"
          style={{ marginTop: "30px", justifyContent: "center" }}
        >
          <input
            className=" col-lg-6"
            type="text"
            placeholder="Add New Skill"
            required
            id="skill"
            onChange={(e) => {
              setInputSkill(e.target.value);
            }}
            value={inputSkill}
          />
          <button className=" col-1">Add Skill</button>
        </div>
      </form>
      <button onClick={handleUpdate} style={{ marginTop: "50px" }}>
        Update Skills
      </button>
      <button
        onClick={(e) => {
          setModal(null);
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default EditUserSkill;
