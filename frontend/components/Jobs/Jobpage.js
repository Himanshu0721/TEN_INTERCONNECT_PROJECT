import React, { useEffect, useState } from "react";
import "../../componentsCss/filteroptions.css";
import {
  Box,
  Card,
  Container,
  ListItemIcon,
  MenuItem,
  MenuList,
  Pagination,
  Typography,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { jobLoadAction } from "../../redux/actions/jobAction";
import { Link, useParams } from "react-router-dom";
import CardElement from "../../Component/CardElement";
import LoadingBox from "../../Component/LoadingBox";
import SelectComponent from "../../Component/SelectComponent";
import { jobTypeLoadAction } from "../../redux/actions/jobTypeAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../../componentsCss/jobpage.css";
import axios from "axios";
import api from "../../api/base";
import Filteroptions from "./Filteroptions";
import Loader from "../Bars/Loader";

const Jobpage = () => {
  const [loading, setLoading] = useState(false);
  // const [jobs, setjobs] = useState([]);
  const [jobs, setJob] = useState([]);
  const [internship, setInternship] = useState([]);
  const [category,setcategory]=useState(["All","Jobs","Internships"]);
  const [ipcat,setipCat]=useState("");
  //Below is Remaining
  useEffect(() => {
    const fetchJobs = async (ipcat="") => {
      try {
        setLoading(true);
        const res = await api.get("jobs/all");
        if(ipcat == "Jobs"){
          res.data = res.data.filter((obj)=> obj.job_id);
        }
        if(ipcat == "Internships"){
          res.data = res.data.filter((obj)=> obj.internship_id);
        }
        // console.log("After Filter : ",res.data);
        setJob(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs(ipcat);
  }, [ipcat]);


  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { keyword, location } = useParams();

  const [page, setPage] = useState(1);
  const [cat, setCat] = React.useState("");

  useEffect(() => { }, [keyword, location]);

  // useEffect(() => {
  //   console.log(jobs);
  //   console.log(keyword);
  // }, []);

  const handleChangeCategory = (e) => {
    setCat(e.target.value);
  };


  const filteredJobs =
    jobs &&
    jobs.filter((job) => {
      const matchesKeyword = keyword
        ? job.role_name.toLowerCase().includes(keyword.toLowerCase())
        : true;
      const matchesLocation = location
        ? job.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const matchesCategory = cat ? job.job_type === cat : true;
      return matchesKeyword && matchesLocation && matchesCategory;
    });

  return (
    <>
    {loading ? <LoadingBox /> : (
      <div className="box-container">
        <Container>
          <div className="stack-container">
            <div className="right-section">
              <div className="job-listings">
                <div className="load-box">
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map((job, i) => (
                      <CardElement
                        key={i}
                        id={job.job_id}
                        internship_id={job.internship_id ? job.internship_id : ""}
                        jobTitle={job.role_name}
                        description={job.description }
                        category={job.job_type ? job.job_type : job.internship_Type ? job.internship_Type : "No Category"}
                        location={job.location || job.company_Location}
                      />
                    ))
                  ) : (
                    <Typography>No internships found.</Typography>
                  )}
                </div>
                {/* <div className="pagination-section">
                  <div className="pagination-container">
                    <Pagination
                      color="primary"
                      variant="outlined"
                      page={page}
                      count={page === 0 ? 1 : page}
                      onChange={(event, value) => setPage(value)}
                    />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="left-section">
              <div className="filter-card">
                {/* <div className="filter-heading">
                    <Typography
                      sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                      Filter
                    </Typography>
                  </div>
                  <SelectComponent
                    handleChangeCategory={handleChangeCategory}
                    cat={cat}
                  /> */}
                <Filteroptions filteropts="filteropts1" selectbtn="selectbtn1" content="content1" downarrow="down1" arr={category} setdetail={setipCat} />
              </div>
              <Card className="location-card">
                <Box sx={{ pb: 2 }}>
                  <Typography
                    component="h4"
                    sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                    Filter internships by location
                  </Typography>
                  <MenuList>
                    {/* {setUniqueLocation &&
                        setUniqueLocation.map((location, i) => (
                          <MenuItem key={i}>
                            <ListItemIcon>
                              <LocationOnIcon
                                sx={{
                                  color: palette.secondary.main,
                                  fontSize: 18,
                                }}
                              />
                            </ListItemIcon>
                            <Link
                              style={{ color: palette.secondary.main }}
                              to={`/search/location/${location}`}>
                              {location}
                            </Link>
                          </MenuItem>
                        ))} */}
                  </MenuList>
                </Box>
              </Card>
            </div>
          </div>
        </Container>
      </div>)}
    </>
  );
};

export default Jobpage;
