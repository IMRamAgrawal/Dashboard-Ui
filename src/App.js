import React from "react";
import { CssBaseline, Box, Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <div className="no-scrollbar">
        <Navbar />
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Sidebar />
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, bgcolor: "#121212", color: "#fff" }}
          >
            <Dashboard />
          </Box>
        </Box>
      </div>
    </>
  );
}

export default App;