import React, { useState } from "react";
import axios from "axios";
import FetchJobTypes from "../Util/FetchJobTypes"; //USed for sending all the get requests
import JobCard from "../Employer/JobCard";

const JobHome = ({ userData }) => {
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
    alert(searchJobTitle);
  };

  return (
    <div style={{ marginTop: "80px" }}>
      {userData !== null ? (
        <div>
          <h1>Welcome {userData.firstName}</h1>
          <div>
            <h5>Search for New Jobs</h5>
            <form onSubmit={search}>
              <div
                className="px-4 row"
                style={{ marginTop: "30px", justifyContent: "center" }}
              >
                <input
                  className=" col-lg-6"
                  type="text"
                  placeholder="Search with Job Title"
                  required
                  id="skill"
                  onChange={(e) => {
                    setSearchJobTitle(e.target.value);
                  }}
                  value={searchJobTitle}
                />
                <button type="submit" className=" col-1">
                  Search
                </button>
              </div>
            </form>
          </div>
          <div>
            {searchresult.length > 1 ? (
              searchresult.map((item) => (
                <div key={item.jobId}>
                  <JobCard element={item}></JobCard>
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