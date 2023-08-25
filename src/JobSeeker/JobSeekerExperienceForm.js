import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function JobSeekerExperienceForm() {
  let [experience, setExperience] = useState(false);
  let [country, setCountry] = useState(false);
  const [jobExperiencee, setJobExperince] = useState({
    name: "",
    year: 0,
    month: 0,
    salary: "",
    jobtype: "",
    cityname: "",
    country: "",
    location: "",
    mobNum: "",
  });

  const reset = () => {
    let resetfields = {
      name: "",
      year: "",
      month: "",
      salary: "",
      jobtype: "",
      cityname: "",
      country: "",
      location: "",
      mobNum: "",
    };
    setJobExperince(resetfields);
  };

  return (
    <div className="row justify-content-center m-3">
      {" "}
      <div className="col-sm-12 col-md-9 ">
        <h3>Basic Details*</h3>
        <form id="job-seeker-exp">
          <label className="">Name*</label>
          <input
            type="text"
            placeholder="enter your name"
            className="form-control form-control-lg"
            value={jobExperiencee.name}
            onChange={(e) => {
              const newname = { ...jobExperiencee, name: e.target.value };
              setJobExperince(newname);
            }}
          />
          <div className="row mt-3">
            <div className="col-sm-12 col-md-4">
              <label htmlFor="" className="col-md-5">
                <input
                  type="radio"
                  name="jobtype"
                  value={jobExperiencee.jobtype}
                  onChange={(e) => {
                    const newjobtype = {
                      ...jobExperiencee,
                      jobtype: e.target.value,
                    };
                    setJobExperince(newjobtype);
                    setExperience(false);
                  }}
                />{" "}
                fresher
              </label>
              <label htmlFor="" className="col-md-5">
                <input
                  type="radio"
                  name="jobtype"
                  value={jobExperiencee.jobtype}
                  onChange={(e) => {
                    const newjobtype = {
                      ...jobExperiencee,
                      jobtype: e.target.value,
                    };
                    setJobExperince(newjobtype);
                    setExperience(true);
                  }}
                />{" "}
                Experience
              </label>
            </div>

            <div>
              {experience ? (
                <ShowExperience
                  jobExperiencee={jobExperiencee}
                  setJobExperience={setJobExperince}
                />
              ) : (
                <h1> </h1>
              )}
            </div>
          </div>

          <div>
            <div htmlFor="">Current Location*</div>
            <div className="row mt-3">
              <div className="col-sm-12 col-md-4">
                <label htmlFor="" className="col-md-5">
                  <input
                    type="radio"
                    name="location"
                    value={jobExperiencee.location}
                    onChange={(e) => {
                      const newlocation = {
                        ...jobExperiencee,
                        location: e.target.value,
                      };
                      setJobExperince(newlocation);
                      setCountry(false);
                    }}
                  />
                  {"  "}
                  India
                </label>
                <label>
                  {" "}
                  <input
                    type="radio"
                    name="location"
                    value={jobExperiencee.location}
                    onChange={(e) => {
                      const newlocation = {
                        ...jobExperiencee,
                        location: e.target.value,
                      };
                      setJobExperince(newlocation);
                      setCountry(true);
                    }}
                  />{" "}
                  Outside India
                </label>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <input
                type="text"
                placeholder="enter city name"
                className="form-control form-control-lg"
                value={jobExperiencee.cityname}
                onChange={(e) => {
                  const newcityname = {
                    ...jobExperiencee,
                    cityname: e.target.value,
                  };
                  setJobExperince(newcityname);
                }}
              />
            </div>

            <div className="col-md-6">
              {country ? (
                <input
                  type="text"
                  placeholder="enter country name"
                  className="form-control form-control-lg"
                  value={jobExperiencee.country}
                  onChange={(e) => {
                    const newcountry = {
                      ...jobExperiencee,
                      country: e.target.value,
                    };
                    setJobExperince(newcountry);
                  }}
                />
              ) : (
                <h1> </h1>
              )}
            </div>
          </div>

          <div className="mt-3">
            <label htmlFor="">Mobile Number*</label>
            <input
              type="text"
              value={jobExperiencee.mobNum}
              placeholder="enter mobile num"
              className="form-control form-control-lg mt-3"
              onChange={(e) => {
                const newmobNum = { ...jobExperiencee, mobNum: e.target.value };
                setJobExperince(newmobNum);
              }}
            />
          </div>

          <div className="mt-5">
            <input
              className="m-3 btn btn-primary btn-lg"
              type="button"
              value="cancel"
              onClick={reset}
            />
            <input
              className="m-3 btn btn-primary btn-lg"
              type="submit"
              value="save"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

function ShowExperience({ jobExperiencee, setJobExperience }) {
  return (
    <>
      <div className="row m-3">
        <label htmlFor="">Total Experiencee*</label>
        <div className="col-md-6">
          <Form.Select
            aria-label="Default select example"
            value={jobExperiencee.year}
            onChange={(e) => {
              const newyear = { ...jobExperiencee, year: e.target.value };
              setJobExperience(newyear);
            }}
          >
            <option>Select Year</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="1">4</option>
            <option value="2">5</option>
            <option value="3">6+</option>
          </Form.Select>
        </div>

        <div className="col-md-6">
          <Form.Select
            aria-label="Default select example"
            value={jobExperiencee.month}
            onChange={(e) => {
              const newmonth = { ...jobExperiencee, month: e.target.value };
              setJobExperience(newmonth);
            }}
          >
            <option>Select Months</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="1">4</option>
            <option value="2">5</option>
            <option value="3">6</option>
            <option value="1">7</option>
            <option value="2">8</option>
            <option value="3">9</option>
            <option value="1">10</option>
            <option value="2">11</option>
            <option value="3">12</option>
          </Form.Select>
        </div>
        <div>
          <InputGroup className="pt-3">
            <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
            <Form.Control
              placeholder="salary"
              aria-label="salary"
              aria-describedby="basic-addon1"
              value={jobExperiencee.salary}
              onChange={(e) => {
                const newsalary = { ...jobExperiencee, salary: e.target.value };
                setJobExperience(newsalary);
              }}
            />
          </InputGroup>
        </div>
      </div>
    </>
  );
}

export default JobSeekerExperienceForm;
