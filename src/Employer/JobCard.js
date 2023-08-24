import React from "react";
import "../style.css";

// Rohan

import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faDollarSign,
  faLocationDot,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";

const JobCard = ({ setJob }) => {
  const job = {
    jobId: 49,
    jobTitle: "Test",
    jobDescription: "Test",
    postAvail: 1,
    jobType: {
      jobType: 1,
      roleName: "FULL TIME",
    },
    skills: [
      {
        id: {
          jobId: 49,
          skillSetId: 2,
        },
        skillSet: {
          skillSetId: 2,
          skillName: "Java",
          skillApproved: "1",
        },
      },
    ],
    designation: {
      designationID: 5,
      designationName: "TEST",
      designationApproved: "0",
    },
    industryId: 0,
    wfhPreference: 0,
    location: null,
    jobPostingDate: "2023-08-23",
    lastApplyDate: null,
    minSalary: 0.0,
    maxSalary: 10000.0,
    minExperience: 0,
    maxExperience: 2,
    qualificationType: null,
    qualificationType2: null,
    active: true,
  };
  return (
    <div style={{ marginTop: "80px" }}>
      <div className="job-item p-4 mb-4">
        <div className="row g-4">
          <div className="col-sm-12 col-md-8 d-flex align-items-center">
            <img
              className="flex-shrink-0 img-fluid border rounded"
              src="./images/com-logo-4.jpg"
              alt=""
              style={{ width: "80px", height: "80px" }}
            />
            <div className="text-start ps-4">
              <h5 className="mb-3">{job.jobTitle}</h5>
              <span className="text-truncate me-3">
                <i className="fa fa-map-marker-alt text-primary me-2"></i>
                Mumbai,Maharashtra
              </span>
              <span className="text-truncate me-3">
                <i className="far fa-clock text-primary me-2"></i>
                {job.jobType.roleName}
              </span>
              <span className="text-truncate me-0">
                <i className="far fa-money-bill-alt text-primary me-2"></i>₹
                {job.minSalary} - ₹{job.maxSalary} a month
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
            <div className="d-flex mb-3">
              <a className="btn btn-light btn-square me-3" href="">
                <i className="far fa-heart text-primary"></i>
              </a>
              <a
                className="btn btn-primary"
                href="http://localhost:3000/job-detail"
              >
                Apply Now
              </a>
            </div>
            <small className="text-truncate">
              <i className="far fa-calendar-alt text-primary me-2"></i>
              Deadline:{" "}
              {job.lastApplyDate ? job.lastApplyDate : "Not Mentioned"}
            </small>
          </div>
        </div>
      </div>

      {/* <div className="row justify-content-center">
        <div className=" col-sm-12 col-md-6">
          <Card>
            <Card.Header>
              <Nav variant="pills" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="#first">Delete Job</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#link">Update Job</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>Name of the Position</Card.Title>
              <div>
                <span>
                  <FontAwesomeIcon icon={faBriefcase} /> Experience &nbsp;
                </span>
                <span>
                  <FontAwesomeIcon icon={faDollarSign} /> salary &nbsp;
                </span>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} /> location &nbsp;
                </span>
              </div>
              <div>
                {" "}
                <span>
                  <FontAwesomeIcon icon={faNoteSticky} /> discription
                </span>
              </div>
              <div>
                <span>skill1 &nbsp;</span>
                <span>skill2 &nbsp;</span>
                <span>skill3 &nbsp;</span>
                <span>skill4 &nbsp;</span>
                <span>skill5 &nbsp;</span>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div> */}
    </div>
  );
};

export default JobCard;