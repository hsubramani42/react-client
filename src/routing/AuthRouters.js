import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterRedux from "../app/auth/components/RegisterRedux";
import LoginRedux from "../app/auth/components/LoginRedux";

export default function AuthRouters() {
  return (
    <Routes>
      <Route path="register" element={<RegisterRedux />} />
      <Route path="login" element={<LoginRedux />} />
    </Routes>
  );
}
