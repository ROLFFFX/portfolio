import React from "react";
import AnimatedCursor from "react-animated-cursor";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import DM from "./pages/hci/DM";
import GroupProjects from "./pages/hci/GroupProjects";
import PersonalProjects from "./pages/hci/PersonalProjects";
import HomePage from "./pages/hci/homePage";
import AppBar from "./utils/AppBar";
import LandingPage from "./pages/LandingPage";

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
        <Route path="/" element={<LandingPage />} />
        <Route path="/hci" element={<Layout />}>
          <Route path="/hci" element={<HomePage />} />
          <Route path="/hci/designmanifesto" element={<DM />} />
          <Route path="/hci/personalprojects" element={<PersonalProjects />} />
          <Route path="/hci/groupprojects" element={<GroupProjects />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
