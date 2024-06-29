import React from "react";
import AnimatedCursor from "react-animated-cursor";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import DM from "./pages/DM";
import GroupProjects from "./pages/GroupProjects";
import PersonalProjects from "./pages/PersonalProjects";
import HomePage from "./pages/homePage";
import AppBar from "./utils/AppBar";

function Layout({ children }) {
  return (
    <>
      <AppBar></AppBar>
      <Outlet></Outlet>
    </>
  );
}
function App() {
  return (
    <div className="App">
      <AnimatedCursor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/designmanifesto" element={<DM />} />
          <Route path="/personalprojects" element={<PersonalProjects />} />
          <Route path="/groupprojects" element={<GroupProjects />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
