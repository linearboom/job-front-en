import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

import React, { useState } from "react";

const EditSkill = ({ jobData, setJobData }) => {
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
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const jobId = queryParams.get("jobId");
  const API_URL = "http://localhost:8181/employer/postNewJob"; //

  const nav = useNavigate();

  const [newSkill, setNewSkill] = useState([]);
  const [inputSkill, setInputSkill] = useState("");

  const search = (e) => {
    e.preventDefault();
    setNewSkill([...newSkill, inputSkill]);
    console.log(newSkill);
    setInputSkill("");
    console.log(jobId);
  };

  const handleDelete = (item) => {
    alert(item.skillName);
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

    console.log(transformedSkills);

    // Send Data to the Server

    const data = {
      job: jobData,
      skills: transformedSkills,
    };
    console.log(data.job.jobId);
    try {
      let res = await axios.post(API_URL, data, { withCredentials: true });
      console.log("Hello");
      if (res.data) {
        alert(res.data.jobID);
        nav("/postedjobs");
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
          {skill.map((item, index) => (
            <tr key={item.skillSetId}>
              <td>{index}</td>
              <td>{item.skillName}</td>
              <td>
                <button
                  id="delete-skill-button"
                  style={{ backgroundColor: "red" }}
                  className="btn btn-bg-success "
                  onClick={() => handleDelete(item)}
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
    </div>
  );
};

export default EditSkill;

//   newSkill.length &&
//     newSkill.map((item, index) => (
//       <tr key={index}>
//         <td>{index}</td>
//         <td>{item}</td>
//         <td>
//           <button
//             id="delete-skill-button"
//             style={{ backgroundColor: "red" }}
//             className="btn btn-bg-success "
//             onClick={() => handleDelete(item)}
//           >
//             Delete
//           </button>
//         </td>
//       </tr>
//     ));
// }
