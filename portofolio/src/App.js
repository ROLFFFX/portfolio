import { Outlet } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import AppBar from "./utils/AppBar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import DM from "./pages/DM";
import PersonalProjects from "./pages/PersonalProjects";
import GroupProjects from "./pages/GroupProjects";

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
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/designmanifesto" element={<DM />} />
          <Route path="/personalprojects" element={<PersonalProjects />} />
          <Route path="/groupprojects" element={<GroupProjects />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
