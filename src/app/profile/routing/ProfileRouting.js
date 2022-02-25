import React from "react";
import { Route, Routes } from "react-router-dom";
import AddEdu from "../components/AddEdu";
import AddExp from "../components/AddExp";
import ProfileForm from "../components/ProfileForm";
import Profiles from "../components/Profiles";
import DetailedProfile from "../components/DetailedProfile";
const ProfileRouting = () => {
  return (
    <Routes>
      <Route path="/create-profile" element={<ProfileForm />} />
      <Route path="/update-profile" element={<ProfileForm />} />
      <Route path="/add-experience" element={<AddExp />} />
      <Route path="/add-education" element={<AddEdu />} />
      <Route path="/" element={<Profiles />} />
      <Route path="/:profileId" element={<DetailedProfile />} />
    </Routes>
  );
};

export default ProfileRouting;
