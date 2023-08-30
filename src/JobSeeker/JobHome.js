import React, { useState } from "react";
import axios from "axios";
import FetchJobTypes from "../Util/FetchJobTypes"; //USed for sending all the get requests
import JobCard from "../Employer/JobCard";

const JobHome = ({ userData, jobData, setJobData }) => {
  const API_URL =
    "http://localhost:8181/job_seeker/containingTitleNameJobs?titleName="; //Finding the URL

  const [searchJobTitle, setSearchJobTitle] = useState("");
  const [searchresult, setSearchResult] = useState([]);

  const search = async (e) => {
    e.preventDefault();
    const fetchData = async () => {
      const data = await FetchJobTypes(API_URL + searchJobTitle);

      setSearchResult(data.data);
      console.log(searchresult);
    };
    fetchData();
  };

  return (
    <div
      style={{
        marginTop: "80px",
        height: "1000px",
        backgroundImage: `url(${"https://img.freepik.com/premium-photo/searching-new-job-office-chair-isolated-we-are-hiring-concept-generative-ai_834602-21297.jpg?w=900"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="row Align-Center justify-content-center bg-success"
    >
      {userData !== null ? (
        <div className="col-md-8 ">
          <h1 className=" fst-italic mb-2 mt-4">
            Welcome {userData.firstName}
          </h1>
          <div>
            <h5>Search New Jobs</h5>
            <form onSubmit={search}>
              <div class="input-group input-group-lg mb-5 mt-5">
                <input
                  className=" col-lg-6 form-control"
                  type="text"
                  placeholder="Search with Job Title"
                  required
                  id="skill"
                  onChange={(e) => {
                    setSearchJobTitle(e.target.value);
                  }}
                  value={searchJobTitle}
                />
                <button
                  type="submit"
                  className=" btn btn-outline-secondary bg-success text-white"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div>
            {searchresult.length ? (
              searchresult.map((item) => (
                <div key={item.jobId}>
                  <JobCard job={item} setJobData={setJobData}></JobCard>
                </div>
              ))
            ) : (
              <h1>No Results Found</h1>
            )}
          </div>
        </div>
      ) : (
        <div>Kindly Login First</div>
      )}
    </div>
  );
};

export default JobHome;
