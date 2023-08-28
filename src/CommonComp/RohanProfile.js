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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
    <div className="row justify-content-center ">
      <div
        className="col-sm-12 col-md-8 "
        style={{ margin: "60px", marginTop: "100px" }}
      >
        {userData !== null && !modal ? (
          <div class="card" style={{ textAlign: "left" }}>
            <div className="shadow-lg">
              <div className="card-header bg-warning d-flex justify-content-between">
                <div>
                  <span className="card-title fw-bold">Personal Details</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    className="fa-lg icon"
                    onClick={(e) => showModal(e, "personal")}
                    icon={faPenToSquare}
                  />
                </div>
              </div>
              <div class="card-body">
                <div>
                  <b>
                    <span style={{ background: "" }}>
                      {userData.firstName + " " + userData.lastName}
                    </span>
                  </b>
                </div>

                <span>
                  <b>Email :</b> {userData.email}
                </span>
                <p>
                  <b>Mobile :</b> {userData.mobile}
                </p>
              </div>
              <div className="card-header bg-warning d-flex justify-content-between">
                <div>
                  <span class="card-title fw-bold">Skills</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    className="fa-lg icon"
                    onClick={(e) => showModal(e, "skills")}
                    icon={faPenToSquare}
                  />
                </div>
              </div>

              <div class="card-body">
                {userData.userSkillSets.length ? (
                  <div>
                    {userData.userSkillSets.map((item) => (
                      <span className="me-2">
                        <button type="button" class="btn btn-success">
                          {item.skill.skillName}
                        </button>
                      </span>
                    ))}
                  </div>
                ) : (
                  <div>You have not yet added any skills</div>
                )}
              </div>
            </div>
            {/* Education Details */}
            <div>
              <div className="card-header bg-warning d-flex justify-content-between">
                <span class="card-title fw-bold">Education Details</span>
                {/* <button
                  onClick={(e) => {
                    showModal(e, "education");
                  }}
                >

                  Add New
                </button> */}

                <FontAwesomeIcon
                  className="fa-lg icon"
                  onClick={(e) => {
                    showModal(e, "education");
                  }}
                  icon={faPenToSquare}
                />
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
              <div className="card-header bg-warning d-flex justify-content-between">
                <span class="card-title fw-bold">Work Experience</span>
                {/* <button
                  onClick={(e) => {
                    showModal(e, "experience");
                  }}
                >
                  Add New
                </button> */}
                <FontAwesomeIcon
                  className="fa-lg icon"
                  onClick={(e) => {
                    showModal(e, "experience");
                  }}
                  icon={faPenToSquare}
                />
              </div>
              <div>
                <Container className="border bg-light">
                  <Row className="  fs-6 fw-bold">
                    <Col>Company Name</Col>
                    <Col>Designation</Col>
                    <Col>Experience</Col>
                  </Row>
                </Container>
                {userData.experience &&
                  userData.experience.map((item) => (
                    <div key={item.experienceId}>
                      <Container className="border">
                        <Row className="fs-5 ms-3 ">
                          <Col>{item.companyName}</Col>
                          <Col>{item.jobDesignation}</Col>
                          <Col>
                            {item.experienceYears} Year {item.experienceMonths}{" "}
                            Months
                          </Col>
                          <Col className="col-md-auto">
                            <FontAwesomeIcon
                              className="btn btn-bg-success text-danger"
                              icon={faTrash}
                            />
                          </Col>
                        </Row>
                      </Container>
                      {/* <span> Company Name : {item.companyName}</span>
                        <button
                          onClick={(e) => {
                            setModal("experience");
                            setExperience(item);
                          }}
                        >
                          Edit Details
                        </button> */}

                      {/* <div class="card-body">
                        <span>Designation : {item.jobDesignation}</span>
                      </div> */}
                    </div>
                  ))}
              </div>
            </div>
            {/* Project */}
            <div>
              <div className="card-header bg-warning d-flex justify-content-between">
                <span class="card-title fw-bold">Project</span>
                {/* <button
                  onClick={(e) => {
                    showModal(e, "project");
                  }}
                >
                  Add New
                </button> */}
                <FontAwesomeIcon
                  className="fa-lg icon"
                  onClick={(e) => {
                    showModal(e, "project");
                  }}
                  icon={faPenToSquare}
                />
              </div>
              <div>
                {userData.project &&
                  userData.project.map((item, index) => (
                    // < key={index}>
                    //   <div class="">
                    //     <h5 class="card-title"></h5>
                    //     <span> Project Title : {item.id.projectTitle}</span>
                    //     <button
                    //       onClick={(e) => {
                    //         setModal("project");
                    //         setProject(item);
                    //       }}
                    //     >
                    //       Edit Details
                    //     </button>
                    //   </div>
                    //   <div class="card-body">
                    //     <span>Description : {item.projectDescription}</span>
                    //   </div>

                    <div>
                      <div className="card-header d-flex justify-content-between bg-light">
                        <div className="">
                          <span className="card-title fw-bold">
                            PROJECT TITLE : {item.id.projectTitle}
                          </span>
                        </div>
                        <div>
                          <FontAwesomeIcon
                            className="fa-lg icon"
                            style={{ float: "right" }}
                            onClick={(e) => {
                              setModal("project");
                              setProject(item);
                            }}
                            icon={faPenToSquare}
                          />
                        </div>
                      </div>

                      <div className="ms-3">
                        <div>
                          <h6>Description : </h6>
                          <span className="ms-4">
                            {item.projectDescription}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {/* Accomplishment */}
            <div>
              <div className="card-header bg-warning d-flex justify-content-between">
                <span class="card-title fw-bold">Accomplishment</span>
                {/* <button
                  onClick={(e) => {
                    showModal(e, "accomplishment");
                  }}
                >
                  Add New
                </button> */}
                <FontAwesomeIcon
                  className="fa-lg icon"
                  onClick={(e) => {
                    showModal(e, "accomplishment");
                  }}
                  icon={faPenToSquare}
                />
              </div>
              <div>
                {userData.accomplishment &&
                  userData.accomplishment.map((item, index) => (
                    <div key={index}>
                      {/* <div class="">
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
                      </div> */}

                      <div className="card-header  d-flex justify-content-between bg-light">
                        <span class="card-title fw-bold">
                          Accomplishment Title : {item.title}
                        </span>
                        <FontAwesomeIcon
                          className="fa-lg icon"
                          onClick={(e) => {
                            setModal("accomplishment");
                            setAccomplishment(item);
                          }}
                          icon={faPenToSquare}
                        />
                      </div>

                      <div className="ms-3">
                        <div>
                          <h6>Description : </h6>
                          <span className="ms-4">{item.description}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {/* Certification */}
            <div>
              <div className="card-header bg-warning d-flex justify-content-between">
                <span class="card-title fw-bold">Certification</span>
                {/* <button
                  onClick={(e) => {
                    showModal(e, "certification");
                  }}
                >
                  Add New
                </button> */}
                <FontAwesomeIcon
                  className="fa-lg icon"
                  onClick={(e) => {
                    showModal(e, "accomplishment");
                  }}
                  icon={faPenToSquare}
                />
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
                        <span>
                          Description : {item.certificationDescription}
                        </span>
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
    </div>
  );
};

export default JobProfile;
