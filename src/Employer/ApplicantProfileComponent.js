import React, { useEffect, useState } from "react";
import axios from "axios";

const ApplicantProfileComponent = ({}) => {
  return (
    <div>
      <div className="row">
        <div className=" row col-4">
          <div className="d-flex justify-content-between bg-light">
            <p className="fw-semibold">Applicant Name</p>
            <p className="mx-2">Raj</p>
          </div>
          <div className="d-flex justify-content-between bg-light">
            <p className="fw-semibold">Date Of Birth</p>
            <p className="mx-2">Raj</p>
          </div>
          <div className="d-flex justify-content-between bg-light">
            <h6 className="fw-semibold">Date Of Birth</h6>
            <p className="mx-2">Raj</p>
          </div>
        </div>
        <div className="col-8">Hi</div>
      </div>
    </div>
  );
};

export default ApplicantProfileComponent;
