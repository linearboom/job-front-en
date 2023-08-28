import React, { useState } from "react";
import axios from "axios";

const EmployerProfile = ({ employerData, setChangeEmployer }) => {
  // const employerProfile = {
  //   firstName: "Raj",
  //   lastName: "Chaudhary",
  //   mobile: "8850793097",
  //   organizationName: "Cdac",
  //   address: "Kharghar",
  // };

  const API_UPDATE = "http://localhost:8181/employer/update";
  const [employerProfileUpdate, setemployerProfileUpdate] =
    useState(employerData);

  const submit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(API_UPDATE, employerProfileUpdate, {
        withCredentials: true,
      });
      alert("Data Updated");
      setChangeEmployer(true);
    } catch {
      alert("Server Error");
    }
  };
  return (
    <div>
      <div
        id="postnewjob"
        style={{
          marginTop: "30px",
          marginLeft: "15%",
          marginRight: "15%",
          marginBottom: "30px",
        }}
      >
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "650px" }}
          id="image"
        >
          <div
            className="col-sm-12 col-lg-10  text-center "
            style={{
              backgroundColor: "white",
              boxShadow: "0 2px 4px rgba(19, 19, 19, 3)",
              borderRadius: "10px",
            }}
          >
            <img
              // src={require("./Logo.jpg")}
              alt=""
              width="50px"
              style={{ marginTop: "40px" }}
            />
            <h4 style={{ marginTop: "20px" }}>Edit Your Profile</h4>
            <p className="my-4">Enter the following details to continue</p>
            <form
              id="empEdit"
              className="inventorylogin mb-2"
              onSubmit={submit}
            >
              <div className="row d-flex justify-content-center align-items-center">
                {/* firstName */}
                <div
                  className="px-4 col-sm-12 col-lg-6 text-center "
                  style={{ marginTop: "30px" }}
                >
                  <label>First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Your First Name "
                    required
                    id="empEdit"
                    onChange={(e) =>
                      setemployerProfileUpdate({
                        ...employerProfileUpdate,
                        firstName: e.target.value,
                      })
                    }
                    value={employerProfileUpdate.firstName}
                  />
                </div>

                {/* lastName */}
                <div
                  className="px-4 col-sm-12 col-lg-6 text-center "
                  style={{ marginTop: "30px" }}
                >
                  <label>Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Your Last Name "
                    required
                    id="empEdit"
                    onChange={(e) =>
                      setemployerProfileUpdate({
                        ...employerProfileUpdate,
                        lastName: e.target.value,
                      })
                    }
                    value={employerProfileUpdate.lastName}
                  />
                </div>
              </div>

              <div className="row d-flex justify-content-center align-items-center">
                {/* mobile */}
                <div
                  className="px-4 col-sm-12 col-lg-6 text-center "
                  style={{ marginTop: "30px" }}
                >
                  <label>Mobile Number</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Your Contact Number"
                    required
                    id="empEdit"
                    onChange={(e) =>
                      setemployerProfileUpdate({
                        ...employerProfileUpdate,
                        mobile: e.target.value,
                      })
                    }
                    value={employerProfileUpdate.mobile}
                  />
                </div>

                {/* organizationName */}
                <div
                  className="px-4 col-sm-12 col-lg-6 text-center "
                  style={{ marginTop: "30px" }}
                >
                  <label>Organization Number</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Organization Number"
                    required
                    id="empEdit"
                    onChange={(e) =>
                      setemployerProfileUpdate({
                        ...employerProfileUpdate,
                        organizationName: e.target.value,
                      })
                    }
                    value={employerProfileUpdate.organizationName}
                  />
                </div>
              </div>

              {/* address */}
              {/* <div className="px-4" style={{ marginTop: "30px" }}>
                <label>Address</label>
                <textarea
                  className="form-control"
                  type="textarea"
                  placeholder="Address"
                  required
                  id="empEdit"
                  onChange={(e) =>
                    setemployerProfileUpdate({
                      ...employerProfileUpdate,
                      address: e.target.value,
                    })
                  }
                  value={employerProfileUpdate.address}
                />
              </div> */}

              <div className="px-4" style={{ marginTop: "20px" }}>
                <button
                  type="submit"
                  className="btn container-fluid"
                  style={{ backgroundColor: "#ffd400" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerProfile;
