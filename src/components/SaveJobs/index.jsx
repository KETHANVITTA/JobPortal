import React, { useState } from "react";
import Navbar from "../Navbar";

const SaveJobs = () => {
  const jobs = [JSON.parse(localStorage.getItem("Job"))];
  return (
    <div>
      <Navbar />
      <div className="jobs-for-you">
        <div className="job-background">
          <div className="title">
            <h2>Saved Jobs</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveJobs;
