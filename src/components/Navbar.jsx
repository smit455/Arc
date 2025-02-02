// components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} >
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                Arc Tech
            </a>
        </Typography>
        <Button component={Link} to="/users" color="inherit">
          Users
        </Button>
        <Button component={Link} to="/posts" color="inherit">
          Posts
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
