import React from "react";
import { Typography } from "@mui/material";

const MainPage = () => {
  return (
    <div>
      <Typography variant="h4" component="h4" align="center" gutterBottom>
        Welcome to my app
      </Typography>
      <Typography variant="h6" align="center">
        This is a sample app built with React,Redux and Material-UI.
      </Typography>
      <Typography variant="body1" align="center">
        Explore the features, navigate through different sections, and enjoy the experience!
      </Typography>
    </div>
  );
};

export default MainPage;
