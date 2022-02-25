import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) navigate("/auth/login");
  });
  return <Component />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  component: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
