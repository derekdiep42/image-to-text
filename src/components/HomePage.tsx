import React from "react";
import { Typography } from "@mui/material";
import logo from "../images/logo.svg";

const HomePage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Typography variant="h3" padding={2}>
        Welcome to React App
      </Typography>
      <Typography variant="body1" paddingBottom={2}>
        This is my image-to-text application built with React, TypeScript, and
        Material-UI.
      </Typography>
      <Typography variant="body1" paddingBottom={1}>
        The recognition tab allows you to call an API with a drawn or imported
        image, and will tell you what text exists in the image.
      </Typography>
      <Typography variant="body1" paddingBottom={1}>
        The records tab shows you local previous records of api calls. This is
        currently only storing data locally, thus will reset on refresh.
      </Typography>
      <img width={100} src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default HomePage;
