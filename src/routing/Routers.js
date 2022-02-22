import React from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "../app/core/components/layouts/Landing";
import AuthRouters from "../routing/AuthRouters";

import DashboardRouter from "../app/dashboard/routings/DashboardRouter";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth/*" element={<AuthRouters />} />
      <Route path="/dashboard/*" element={<DashboardRouter />} />
    </Routes>
  );
};
