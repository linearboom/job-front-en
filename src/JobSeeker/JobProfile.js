import React, { useDebugValue, useState, useEffect } from "react";
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
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BorderStyle from "pdf-lib/cjs/core/annotation/BorderStyle";
import axios from "axios";
// import "./JobProfile.css";

const JobProfile = ({ userData, setJobData, setChangeJob }) => {
  const [modal, setModal] = useState();
  const [experience, setExperience] = useState();
  const [project, setProject] = useState();
  const [accomplishment, setAccomplishment] = useState();
  const [certification, setCertification] = useState();
  const [education, setEducation] = useState();
  const [profileImage, setProfileImage] = useState();

  const showModal = (e, item) => {
    setModal(item);
  };

  useEffect(() => {
    // Make a GET request to the server endpoint that serves the image
    const imagePath = userData.profileImagePath;
    axios
      .get(
        `http://localhost:8181/job_seeker/getProfileImage?imagePath=${imagePath}`,
        {
          responseType: "arraybuffer", // Set the response type to 'arraybuffer' for binary data
        }
      )
      .then((response) => {
        const imageBlob = new Blob([response.data], { type: "image/jpeg" }); // Change the content type as needed
        const imageUrl = URL.createObjectURL(imageBlob);
        setProfileImage(imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);

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
                    className="btn btn-lg"
                    onClick={(e) => showModal(e, "personal")}
                    icon={faPenToSquare}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="col-md-9 col-sm-12 m-4 ">
                  {" "}
                  <div>
                    <b>
                      <span>
                        {userData.firstName + " " + userData.lastName}
                      </span>
                    </b>
                  </div>
                  <div>
                    {" "}
                    <b>Email :</b> {userData.email}
                  </div>
                  <div>
                    {" "}
                    <b>Mobile :</b> {userData.mobile}
                  </div>
                </div>
                {/* {/* add Image *  <div>/} */}
                <div className="col-md-3">
                  <img
                    src={profileImage}
                    alt=""
                    style={{
                      height: "160px",
                      width: "120px",
                      borderRadius: "100px",
                    }}
                  />
                </div>
              </div>
              {/* skill */}
              <div className="card-header bg-warning d-flex justify-content-between">
                <div>
                  <span class="card-title fw-bold">Skills</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    className="btn text-success btn-lg"
                    onClick={(e) => showModal(e, "skills")}
                    icon={faPlus}
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
                  className="btn text-success btn-lg"
                  onClick={(e) => {
                    showModal(e, "education");
                  }}
                  icon={faPlus}
                />
              </div>
              <Container className="border bg-light">
                <Row className="  fs-6 fw-bold text-center">
                  <Col>Degree Name</Col>
                  <Col>Branch</Col>
                  <Col>Percentage</Col>
                  <Col>University</Col>
                  <Col></Col>
                </Row>
              </Container>
              <div>
                {userData.education &&
                  userData.education.map((item) => (
                    <div key={item.educationId}>
                      <div></div>
                      {/* new */}
                      <Container className="border">
                        <Row className="fs-5 text-center">
                          <Col> {item.degreeName}</Col>
                          <Col>{item.major}</Col>

                          <Col>
                            <span className="ms-3">{item.percentage}</span>
                          </Col>
                          <Col>
                            <span>{item.universityName}</span>
                          </Col>
                          <Col className="text-end">
                            <FontAwesomeIcon
                              className="btn text-success btn-lg"
                              onClick={(e) => {
                                showModal(e, "education");
                                setEducation(item);
                              }}
                              icon={faPenToSquare}
                            />
                            <FontAwesomeIcon
                              className="btn text-danger btn-lg"
                              icon={faTrash}
                            />
                          </Col>
                        </Row>
                      </Container>
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
                  className="btn text-success btn-lg"
                  onClick={(e) => {
                    showModal(e, "experience");
                  }}
                  icon={faPlus}
                />
              </div>
              <div>
                <Container className="border bg-light">
                  <Row className="  fs-6 fw-bold text-center">
                    <Col>Company Name</Col>
                    <Col>Designation</Col>
                    <Col>Experience</Col>
                    <Col></Col>
                  </Row>
                </Container>
                {userData.experience &&
                  userData.experience.map((item) => (
                    <div key={item.experienceId}>
                      <Container className="border">
                        <Row className="fs-5 text-center ">
                          <Col>{item.companyName}</Col>
                          <Col>{item.jobDesignation}</Col>
                          <Col>
                            {item.experienceYears} Year {item.experienceMonths}{" "}
                            Months
                          </Col>
                          <Col className="text-end">
                            <FontAwesomeIcon
                              className="btn text-success btn-lg"
                              onClick={(e) => {
                                setModal("experience");
                                setExperience(item);
                              }}
                              icon={faPenToSquare}
                            />
                            <FontAwesomeIcon
                              className="btn text-danger btn-lg"
                              icon={faTrash}
                            />
                          </Col>
                        </Row>
                      </Container>
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
                  className="btn text-success btn-lg"
                  onClick={(e) => {
                    showModal(e, "project");
                  }}
                  icon={faPlus}
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
                        <div className="d-flex">
                          <div>
                            <FontAwesomeIcon
                              className="btn text-success  btn-lg"
                              style={{ float: "right" }}
                              onClick={(e) => {
                                setModal("project");
                                setProject(item);
                              }}
                              icon={faPenToSquare}
                            />
                          </div>
                          <div>
                            <FontAwesomeIcon
                              className="btn text-danger btn-lg"
                              icon={faTrash}
                            />
                          </div>
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
                  className="btn text-success btn-lg"
                  onClick={(e) => {
                    showModal(e, "accomplishment");
                  }}
                  icon={faPlus}
                />
              </div>
              <div>
                {userData.accomplishment &&
                  userData.accomplishment.map((item, index) => (
                    <div key={index}>
                      <div className="card-header  d-flex justify-content-between bg-light">
                        <span class="card-title fw-bold">
                          Accomplishment Title : {item.title}
                        </span>
                        <div>
                          <FontAwesomeIcon
                            className="btn text-success btn-lg"
                            onClick={(e) => {
                              setModal("accomplishment");
                              setAccomplishment(item);
                            }}
                            icon={faPenToSquare}
                          />
                          <FontAwesomeIcon
                            className="btn text-danger btn-lg"
                            icon={faTrash}
                          />
                        </div>
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
                  className="btn text-success btn-lg"
                  onClick={(e) => {
                    showModal(e, "certification");
                  }}
                  icon={faPlus}
                />
              </div>
              <div>
                {userData.certificate &&
                  userData.certificate.map((item, index) => (
                    <div key={index}>
                      <div className="card-header  d-flex justify-content-between bg-light">
                        <span class="card-title fw-bold">
                          Accomplishment Title : {item.id.certificationName}
                        </span>
                        <div>
                          <FontAwesomeIcon
                            className="btn text-success btn-lg"
                            onClick={(e) => {
                              setModal("certification");
                              setCertification(item);
                            }}
                            icon={faPenToSquare}
                          />
                          <FontAwesomeIcon
                            className="btn text-danger btn-lg"
                            icon={faTrash}
                          />
                        </div>
                      </div>

                      <div className="ms-3">
                        <div>
                          <h6>Description : </h6>
                          <span className="ms-4">
                            {" "}
                            {item.certificationDescription}
                          </span>
                        </div>
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
                <EditPersonal
                  setModal={setModal}
                  setChangeJob={setChangeJob}
                ></EditPersonal>
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
