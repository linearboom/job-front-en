import React from "react";
import { Modal, Button } from "react-bootstrap";

const ViewJobModal = ({ showModal, hideModal, handleEdit, item, message }) => {
  return (
    <Modal show={showModal} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Viewing Job</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <div className="alert alert-danger">{message}</div> */}

        <div
          className="row justify-content-center align-item-center my-5"
          style={{ height: 500 }}
          id="image"
        >
          <div
            className=" text-center"
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 4px rgba(19, 19, 19,3)",
              borderRadius: 10,
            }}
          >
            <div className="d-flex m-2 px-4 justify-content-between bg-light">
              <div className="fw-semibold">Job Id:</div>
              <div className="mx-2">{item.jobId}</div>
            </div>
            <div className="d-flex m-2 px-4 justify-content-between bg-light">
              <div className="fw-semibold">Job Title:</div>
              <div className="mx-2">{item.jobTitle}</div>
            </div>
            <div className="d-flex m-2 px-4 justify-content-between bg-light">
              <div className="fw-semibold">Post Available:</div>
              <div className="mx-2">{item.postAvailable}</div>
            </div>
            <div className="d-flex m-2 px-4 justify-content-between bg-light">
              <div className="fw-semibold">Job Type:</div>
              <div className="mx-2">{item.jobType?.roleName}</div>
            </div>
            <div className="d-flex m-2 px-4 justify-content-between bg-light">
              <div className="fw-semibold">Designation:</div>
              <div className="mx-2">{item.designation?.designationName}</div>
            </div>
            <div className="d-flex m-2 px-4 justify-content-between bg-light">
              <div className="fw-semibold">Location:</div>
              <div className="mx-2">{item.location?.locationName}</div>
            </div>
            <div className="d-flex m-2 px-4 justify-content-between bg-light">
              <div className="fw-semibold">Posting Date:</div>
              <div className="mx-2">{item.jobPostingDate}</div>
            </div>
            <div className="d-flex m-2 px-4 justify-content-between bg-light">
              <div className="fw-semibold">Last Date:</div>
              <div className="mx-2">{item.lastApplyDate}</div>
            </div>
            {/* <div className="d-flex m-2 px-4 justify-content-between bg-light">
              <div className="fw-semibold">File:</div>
              <div className="mx-2">" "</div>
            </div> */}
            <div className="d-flex m-2 px-4 justify-content-between bg-light">
              <div className="fw-semibold">Minimum Salary:</div>
              <div className="mx-2">{item.minSalary}</div>
            </div>
            <div className="d-flex m-2 px-4 justify-content-between bg-light">
              <div className="fw-semibold">Maximum Salary</div>
              <div className="mx-2">{item.maxSalary}</div>
            </div>
            <div className="d-flex m-2 px-4 justify-content-between bg-light">
              <div className="fw-semibold">Minimum Experience</div>
              <div className="mx-2">{item.minExperience}</div>
            </div>
            <div className="d-flex m-2 px-4 justify-content-between bg-light">
              <div className="fw-semibold">Maximum Experience</div>
              <div className="mx-2">{item.maxExperience}</div>
            </div>
            <div className="d-flex m-2 px-4 justify-content-between bg-light">
              <div className="fw-semibold">Job Active</div>
              <div className="mx-2">{item.active}</div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="default" onClick={hideModal}>
          Okay
        </Button>
        <Button variant="danger" onClick={handleEdit}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewJobModal;
