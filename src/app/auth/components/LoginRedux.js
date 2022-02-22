import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { userLogin } from "../actions/authActions";

export const LoginRedux = ({ isAuthenticated, userLogin }) => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({});
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    userLogin({ email, password });
  };
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">
              Sign in to your DevConnector account
            </p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email Address"
                  name="email"
                  onChange={onChange}
                />
                <small style={{ color: "red" }}>{error.email}</small>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  name="password"
                  onChange={onChange}
                />
                <small style={{ color: "red" }}>{error.password}</small>
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginRedux.propTypes = {
  isAuthenticated: PropTypes.bool,
  userLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = { userLogin };

export default connect(mapStateToProps, mapDispatchToProps)(LoginRedux);
