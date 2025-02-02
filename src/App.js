import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import UsersTable from "./components/UsersTable";
import MindMap from "./components/MindMap";
import MindMapPost from "./components/MindMapPost";
import PostTable from "./components/PostTable";
import MainPage from "./components/MainPage";

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Container>
        <Routes>
          <Route
            path="/"
            element={<MainPage/>}
          />

          <Route
            path="/users"
            element={
              <>
                <Typography variant="h4" textAlign="center" marginY={2}>
                  Users Table
                </Typography>
                <UsersTable />
                <Typography variant="h4" textAlign="center" marginY={2}>
                  Users Mind Map
                </Typography>
                <MindMap />
              </>
            }
          />

          <Route
            path="/posts"
            element={
              <>
                <Typography variant="h4" textAlign="center" marginY={2}>
                  Posts Table
                </Typography>
                <PostTable />
                <Typography variant="h4" textAlign="center" marginY={2}>
                  Posts Mind Map
                </Typography>
                <MindMapPost />
              </>
            }
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
