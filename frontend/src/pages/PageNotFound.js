import { Box } from "@mui/material";
import React from "react";
import Footerbar from "../components/Bars/Footerbar.js";
import Navbar from "../components/Bars/Navbar.js";

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "81vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Page not found!</h1>
      </Box>
    </>
  );
};

export default PageNotFound;
