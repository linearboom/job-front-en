import React, { useDebugValue, useState } from "react";
import EduBlock from "./EduBlock";
import EditWorkExp from "./EditWorkExp";
// import "./JobProfile.css";

const JobProfile = ({ userData }) => {
  const [modal, setModal] = useState(true);

  return (
    <div style={{ margin: "60px", marginTop: "100px" }}>
      {userData !== null ? (
        <div class="card" style={{ textAlign: "left" }}>
          <div>
            <div class="card-header">
              <h5 class="card-title">Personal Details</h5>
            </div>
            <div class="card-body">
              <h6> {userData.firstName + " " + userData.lastName}</h6>
              <span>Email : {userData.email}</span>
              <p>Mobile : {userData.mobile}</p>
            </div>
            <div class="card-header">
              <h5 class="card-title">Skills</h5>
            </div>
            <div class="card-body">
              {userData.userSkillSets.length ? (
                <div>
                  {userData.userSkillSets.map((item) => (
                    <span className="skills">{item.skill.skillName}</span>
                  ))}
                </div>
              ) : (
                <div>You have not yet added any skills</div>
              )}
            </div>
          </div>
          {userData.education &&
            userData.education.map((item) => (
              <div key={item.educationId}>
                <div class="card-header">
                  <h5 class="card-title">
                    {item.qualification.qualificationName}
                  </h5>
                </div>
                <div class="card-body">
                  <h6> Degree Name : {item.degreeName}</h6>
                  <span>University Name : {item.univesityName}</span>
                  <p>Mobile : {userData.mobile}</p>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div>Kindly Login First</div>
      )}
    </div>
  );
};

export default JobProfile;
