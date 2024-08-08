import React, { useState } from "react";
import SearchInput from "../../Component/SearchInput";
import "../../componentsCss/joblist.css";
import Jobpage from "./Jobpage";

const JobList = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const removeJobHandler = (id) => {
    props.removeJobHandler(id);
  };

  const filteredJobs = searchQuery
    ? props.jobs.filter((job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : props.jobs;

  return (
    <>
      <div style={{ backgroundColor: "#f9f9ff" }}>
        <section class="banner-area relative" id="home">
          <div class="overlay overlay-bg"></div>
          <div class="container123">
            <div class="row search-page-top d-flex align-items-center justify-content-center">
              <div class="banner-content col-lg-12">
                <h1>List of internships </h1>
                <h2 class="text-center">Search Results</h2>
                <div className="search-div">
                  <SearchInput setSearchQuery={setSearchQuery} />
                </div>
                <p class="text-center">
                  {filteredJobs.length} Results found for
                  <span>"{searchQuery}"</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="features-area">
          <div class="">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="single-feature">
                  <h4>Search</h4>
                  <p>Discover internship opportunities tailored to your skills and preferences. Use our advanced search tools to find your dream internship.</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-feature">
                  <h4>Apply</h4>
                  <p>Submit your application with ease. Our streamlined process ensures your resume reaches potential employers quickly.</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-feature">
                  <h4>Work</h4>
                  <p>Secure a position that matches your career goals. Start working in an environment that values your expertise and growth.</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-feature">
                  <h4>Get Certified</h4>
                  <p>Enhance your qualifications with professional certifications. Gain the credentials needed to advance in your chosen field.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <Jobpage/>
        </section>
      </div>
    </>
  );
};

export default JobList;
