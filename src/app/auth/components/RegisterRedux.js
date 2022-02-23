import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Alert } from "../../core/components/Alert";
import { register } from "../actions/authActions";

export const RegisterRedux = ({ isAuthenticated, register }) => {
  const [state, setState] = useState({});
  const [errors, setErrors] = useState({});
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password2 } = state;
    if (password !== password2) {
    } else {
      register({ name, email, password });
    }
  };
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your DevConnector account</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Name"
                  name="name"
                  onChange={onChange}
                  required
                />
                <small style={{ color: "red" }}>{errors.name}</small>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email Address"
                  name="email"
                  onChange={onChange}
                />
                <small style={{ color: "red" }}>{errors.email}</small>
                <br />
                <small className="form-text text-muted">
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </small>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  name="password"
                  onChange={onChange}
                />
                <small style={{ color: "red" }}>{errors.password}</small>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Confirm Password"
                  name="password2"
                  onChange={onChange}
                />
                <small style={{ color: "red" }}>{errors.password2}</small>
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

RegisterRedux.propTypes = {
  isAuthenticated: PropTypes.bool,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterRedux);
