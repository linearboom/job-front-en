import React, { useDebugValue, useState } from "react";
import EduBlock from "./EduBlock";
import EditWorkExp from "./EditWorkExp";
import JobSeekerExperienceForm from "./JobSeekerExperienceForm";
import EditPersonal from "./EditPersonal";
// import "./main.css";
import EditSkill from "../CommonComp/EditSkill";
import EditUserSkill from "./EditUserSkill";
import EducationForm from "./EducationForm";
import Project from "./Project";
import Accomplishment from "./Accomplishment";
import Certification from "./Certification";

// import "./JobProfile.css";

const JobProfile = ({ userData, setJobData, setChangeJob }) => {
  const [modal, setModal] = useState();
  const [experience, setExperience] = useState();
  const [project, setProject] = useState();
  const [accomplishment, setAccomplishment] = useState();
  const [certification, setCertification] = useState();
  const [education, setEducation] = useState();

  const showModal = (e, item) => {
    setModal(item);
  };

  return (
    <div style={{ margin: "60px", marginTop: "100px" }}>
      {userData !== null && !modal ? (
        <div class="card row" style={{ textAlign: "left" }}>
          <div>
            <div class="card-header row">
              <span class="card-title col-11">Personal Details</span>
              <button
                className="actionbuttoncustom col-1"
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
          {/* Education Details */}
          <div>
            <div class="card-header">
              <span class="card-title">Education Details</span>
              <button
                onClick={(e) => {
                  showModal(e, "education");
                }}
              >
                Add New
              </button>
            </div>
            <div>
              {userData.education &&
                userData.education.map((item) => (
                  <div key={item.educationId}>
                    <div class="card-header">
                      <span class="card-title">
                        {item.qualification.qualificarionName}
                      </span>{" "}
                      <button
                        onClick={(e) => {
                          showModal(e, "education");
                          setEducation(item);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                    <div class="card-body">
                      <h6> Degree Name : {item.degreeName}</h6>
                      <span>University Name : {item.univesityName}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Work Experience  */}
          <div>
            <div class="card-header">
              <span class="card-title">Work Experience</span>
              <button
                onClick={(e) => {
                  showModal(e, "experience");
                }}
              >
                Add New
              </button>
            </div>
            <div>
              {userData.experience &&
                userData.experience.map((item) => (
                  <div key={item.experienceId}>
                    <div class="">
                      <h5 class="card-title"></h5>
                      <span> Company Name : {item.companyName}</span>
                      <button
                        onClick={(e) => {
                          setModal("experience");
                          setExperience(item);
                        }}
                      >
                        Edit Details
                      </button>
                    </div>
                    <div class="card-body">
                      <span>Designation : {item.jobDesignation}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Project */}
          <div>
            <div class="card-header">
              <span class="card-title">Project</span>
              <button
                onClick={(e) => {
                  showModal(e, "project");
                }}
              >
                Add New
              </button>
            </div>
            <div>
              {userData.project &&
                userData.project.map((item, index) => (
                  <div key={index}>
                    <div class="">
                      <h5 class="card-title"></h5>
                      <span> Project Title : {item.id.projectTitle}</span>
                      <button
                        onClick={(e) => {
                          setModal("project");
                          setProject(item);
                        }}
                      >
                        Edit Details
                      </button>
                    </div>
                    <div class="card-body">
                      <span>Description : {item.projectDescription}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Accomplishment */}
          <div>
            <div class="card-header">
              <span class="card-title">Accomplishment</span>
              <button
                onClick={(e) => {
                  showModal(e, "accomplishment");
                }}
              >
                Add New
              </button>
            </div>
            <div>
              {userData.accomplishment &&
                userData.accomplishment.map((item, index) => (
                  <div key={index}>
                    <div class="">
                      <h5 class="card-title"></h5>
                      <span> Accomplishment Title : {item.title}</span>
                      <button
                        onClick={(e) => {
                          setModal("accomplishment");
                          setAccomplishment(item);
                        }}
                      >
                        Edit Details
                      </button>
                    </div>
                    <div class="card-body">
                      <span>Description : {item.description}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Certification */}
          <div>
            <div class="card-header">
              <span class="card-title">Certification</span>
              <button
                onClick={(e) => {
                  showModal(e, "certification");
                }}
              >
                Add New
              </button>
            </div>
            <div>
              {userData.certificate &&
                userData.certificate.map((item, index) => (
                  <div key={index}>
                    <div class="">
                      <h5 class="card-title"></h5>
                      <span>
                        {" "}
                        Certificate Title : {item.id.certificationName}
                      </span>
                      <button
                        onClick={(e) => {
                          setModal("certification");
                          setCertification(item);
                        }}
                      >
                        Edit Details
                      </button>
                    </div>
                    <div class="card-body">
                      <span>Description : {item.certificationDescription}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
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
            {modal === "education" && (
              <EducationForm
                setModal={setModal}
                education={education}
                setChangeJob={setChangeJob}
              ></EducationForm>
            )}
          </div>
          <div>
            {modal === "experience" && (
              <EditWorkExp
                setModal={setModal}
                experience={experience}
                setChangeJob={setChangeJob}
              ></EditWorkExp>
            )}
          </div>
          <div>
            {modal === "project" && (
              <Project
                setModal={setModal}
                project={project}
                setChangeJob={setChangeJob}
              ></Project>
            )}
          </div>
          <div>
            {modal === "accomplishment" && (
              <Accomplishment
                setModal={setModal}
                accomplishment={accomplishment}
                setChangeJob={setChangeJob}
              ></Accomplishment>
            )}
          </div>
          <div>
            {modal === "certification" && (
              <Certification
                setModal={setModal}
                certification={certification}
                setChangeJob={setChangeJob}
              ></Certification>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobProfile;
