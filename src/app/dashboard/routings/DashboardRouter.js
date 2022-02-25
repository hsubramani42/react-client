import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../component/Dashboard";
import PrivateRoute from "../../core/routers/PrivateRoute";
const DashboardRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<PrivateRoute component={Dashboard}></PrivateRoute>}
      />
    </Routes>
  );
};

export default DashboardRouter;
