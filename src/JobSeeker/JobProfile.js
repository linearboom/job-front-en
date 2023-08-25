import React, { useDebugValue, useState } from "react";
import EduBlock from "./EduBlock";
import EditWorkExp from "./EditWorkExp";
import JobSeekerExperienceForm from "./JobSeekerExperienceForm";
import EditPersonal from "./EditPersonal";
// import "./main.css";
import EditSkill from "../CommonComp/EditSkill";
import EditUserSkill from "./EditUserSkill";

// import "./JobProfile.css";

const JobProfile = ({ userData, setJobData, setChangeJob }) => {
  const [modal, setModal] = useState();

  const showModal = (e, item) => {
    setModal(item);
  };

  return (
    <div style={{ margin: "60px", marginTop: "100px" }}>
      {userData !== null && !modal ? (
        <div class="card" style={{ textAlign: "left" }}>
          <div>
            <div class="card-header">
              <span class="card-title">Personal Details</span>
              <button
                className="actionbuttoncustom"
                onClick={(e) => showModal(e, "personal")}
              >
                Edit
              </button>
            </div>
            <div class="card-body">
              <h6> {userData.firstName + " " + userData.lastName}</h6>
              <span>Email : {userData.email}</span>
              <p>Mobile : {userData.mobile}</p>
            </div>
            <div class="card-header">
              <span class="card-title">Skills</span>
              <button onClick={(e) => showModal(e, "skills")}>Edit</button>
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
          <div>
            {userData.education &&
              userData.education.map((item) => (
                <div key={item.educationId}>
                  <div class="card-header">
                    <h5 class="card-title">
                      {item.qualification.qualificarionName}
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
          {/* <div>
            <JobSeekerExperienceForm></JobSeekerExperienceForm>
          </div> */}
        </div>
      ) : (
        <div>
          {!modal && <h1>Kindly login first</h1>}
          <div>
            {modal === "personal" && (
              <EditPersonal setModal={setModal}></EditPersonal>
            )}
          </div>
          <div>
            {modal === "skills" && (
              <EditUserSkill
                setModal={setModal}
                skillExist={userData.userSkillSets}
                setJobData={setJobData}
                setChangeJob={setChangeJob}
              ></EditUserSkill>
            )}
          </div>
          <div>
            {modal === "editWorkExp" && (
              <EditWorkExp setModal={setModal}></EditWorkExp>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobProfile;
