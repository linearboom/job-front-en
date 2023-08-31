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
import Summary from "./Summary";
import PostData from "../Util/PostData";
// import "./JobProfile.css";

const JobProfile = ({ userData, setJobData, setChangeJob }) => {
  const [modal, setModal] = useState();
  const [experience, setExperience] = useState();
  const [project, setProject] = useState();
  const [accomplishment, setAccomplishment] = useState();
  const [certification, setCertification] = useState();
  const [education, setEducation] = useState();
  const [profileImage, setProfileImage] = useState();
  const [resumeHeadline, setResumeHeadline] = useState();
  const [file, setFile] = useState();
  const [resumeURL, setResumeURL] = useState();

  const RESUME_URL = "http://localhost:8181/job_seeker/uploadResume";

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
  }, [userData]);

  const downloadResume = (e) => {
    e.preventDefault();
    const resumeFilePath = userData.resumePath;
    axios
      .get(
        `http://localhost:8181/job_seeker/getProfileImage?imagePath=${resumeFilePath}`,
        { responseType: "blob" }
      )
      .then((response) => {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        setResumeURL(url);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Resume";
        link.click();
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
        alert("You do not have any resume uploaded in the system");
      });
  };

  const uploadResumeSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("file", file);
    try {
      let res = await axios.post(RESUME_URL, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true, // Enable sending and receiving cookies
      });

      if (res.data) {
        //nav(`/editskilltest?jobId=${res.data.JobId}`);
        alert(res.data);
        setChangeJob(true);
        setModal(null);
      } else {
        alert("Session Expired");
      }
    } catch {
      alert("Connection to the Server Failed");
    }
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

              {/* Resume Headline */}
              <div className="card-header bg-warning d-flex justify-content-between">
                <div>
                  <span className="card-title fw-bold">Summary</span>
                </div>
                <div>
                  <FontAwesomeIcon
                    className="btn btn-lg"
                    onClick={(e) => {
                      showModal(e, "summary");
                      setResumeHeadline(userData.resumeHeadline);
                    }}
                    icon={faPenToSquare}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <pre>
                  {userData.resumeHeadline
                    ? userData.resumeHeadline
                    : "No Summary"}
                </pre>
              </div>

              {/* Resume File Upload */}

              <div className="card-header bg-warning d-flex justify-content-between">
                <span className="card-title fw-bold">Resume</span>

                <form onSubmit={uploadResumeSubmit}>
                  <div className="form-elem mb-3">
                    <label htmlFor="" className="form-label">
                      Your Resume
                    </label>
                    <input
                      name="image"
                      type="file"
                      className="form-control image"
                      id=""
                      accept="pdf/*"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                    />
                    <button className="btn btn-success mt-3" type="submit">
                      Submit
                    </button>
                    <button
                      className="btn btn-primary ms-4 mt-3"
                      onClick={downloadResume}
                    >
                      Download Resume
                    </button>
                  </div>
                </form>
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
                              onClick={async (e) => {
                                //alert("Hello");
                                let data = await PostData(
                                  "http://localhost:8181/job_seeker/deleteEducation",
                                  item
                                );
                                alert(data);
                                setChangeJob(true);
                              }}
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
                              onClick={async (e) => {
                                //alert("Hello");
                                let data = await PostData(
                                  "http://localhost:8181/job_seeker/deleteWorkExp",
                                  item
                                );
                                alert(data);
                                setChangeJob(true);
                              }}
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
                              onClick={async (e) => {
                                //alert("Hello");
                                let data = await PostData(
                                  "http://localhost:8181/job_seeker/deleteProject",
                                  item
                                );
                                alert(data);
                                setChangeJob(true);
                              }}
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
                            onClick={async (e) => {
                              //alert("Hello");
                              let data = await PostData(
                                "http://localhost:8181/job_seeker/deleteAccomplishment",
                                item
                              );
                              alert(data);
                              setChangeJob(true);
                            }}
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
                            onClick={async (e) => {
                              //alert("Hello");
                              let data = await PostData(
                                "http://localhost:8181/job_seeker/deleteCertification",
                                item
                              );
                              alert(data);
                              setChangeJob(true);
                            }}
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
                  userData={userData}
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
            <div>
              {modal === "summary" && (
                <Summary
                  setModal={setModal}
                  summary={resumeHeadline}
                  setChangeJob={setChangeJob}
                ></Summary>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobProfile;
