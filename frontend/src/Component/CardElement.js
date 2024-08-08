import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Button, Typography, IconButton, useTheme } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { saveJob, removeJob } from "../redux/actions/savedJobsActions";
import "../componentsCss/jobpage.css";

const JobCard = ({ jobTitle, internship_id ,description, category, location, id }) => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const savedJobs = useSelector((state) => state.savedJobs.jobs);
  const isFavorite = savedJobs.some((job) => job.id === id);

  const handleFavoriteClick = () => {
    const job = { jobTitle, description, category, location, id };
    if (isFavorite) {
      dispatch(removeJob(id));
    } else {
      dispatch(saveJob(job));
    }
  };

  const handleApplyClick = () => {
    navigate("/applyform", {
      state: { jobTitle, description, category, location, id },
    });
  };

  return (
      <Card sx={{ width:"100%", mb: 5, mt: 3, bgcolor: palette.primary.white }}>
        <CardContent>
          <div className="cardHeading" style={{ display: "flex", alignItems: "center", margin: "10px"}}>
            <Typography className="heading" variant="h5" component="div" style={{ fontWeight: "bolder" }}>
              {jobTitle}
            </Typography>
            {/* style={{ marginLeft: "auto" }} */}
            <IconButton onClick={handleFavoriteClick}>
              {isFavorite ? <FavoriteIcon style={{ color: "red" }} /> : <FavoriteBorderIcon />}
            </IconButton>
            <Button
                disableElevation
                variant="contained"
                sx={{ bgcolor: "#0277bd", color: "#fff" }}
                onClick={handleApplyClick}
            >
              Apply
            </Button>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} />
            <Typography
                sx={{ fontSize: 15, color: palette.secondary.main, fontWeight: 500, marginLeft: "4px" }}
                component="span"
            >
              {location}
            </Typography>
          </div>
          <div style={{ float: "left", margin: "10px" }}>
            <Typography sx={{ mb: 1.7, fontWeight: "bold", float: "left" }} color="text.secondary">
              {category}
            </Typography>
          </div>
          <div className="cardDescription" style={{ float: "left", margin: "10px", width: "100%" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Description:
              <span style={{ fontWeight: "normal" }}>
              {description.split(" ").slice(0, 15).join(" ")}...
            </span>
            </Typography>
          </div>
        </CardContent>
        <div style={{ float: "left", margin: "10px 10px 20px" }}>
          <Button disableElevation variant="contained" size="small">

            <Link className="card-link" to={!!internship_id ? `/internship/${internship_id}`: `/job/${id}`} style={{ color: "white" }}>
              See More
            </Link>
          </Button>
        </div>
      </Card>
  );
};

export default JobCard;
