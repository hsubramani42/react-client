import React from "react";
import { Route, Routes } from "react-router-dom";
import AddEdu from "../components/AddEdu";
import AddExp from "../components/AddExp";
import Profile from "../components/Profile";

const ProfileRouting = () => {
  return (
    <Routes>
      <Route path="/create-profile" element={<Profile />} />
      <Route path="/update-profile" element={<Profile />} />
      <Route path="/add-experience" element={<AddExp />} />
      <Route path="/add-education" element={<AddEdu />} />
    </Routes>
  );
};

export default ProfileRouting;
