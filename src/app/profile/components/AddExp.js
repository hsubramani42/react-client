import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addExperience } from "../actions/profileActions";
export const AddExp = ({ addExperience }) => {
  const [formData, setFormData] = useState({ current: false });
  const navigate = useNavigate();
  const onChange = (e) => {
    if (e.target.name === "current")
      setFormData({ ...formData, [e.target.name]: !formData.current });
    else setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addExperience(formData, navigate);
  };

  return (
    <section className="container text-center">
      <h1 className="large text-primary">Add An Experience</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Job Title"
            name="title"
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Company"
            name="company"
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" onChange={onChange} />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              value=""
              onChange={onChange}
            />{" "}
            Current Job
          </p>
        </div>
        {!formData.current && (
          <div className="form-group">
            <h4>To Date</h4>
            <input type="date" name="to" onChange={onChange} />
          </div>
        )}
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </section>
  );
};

AddExp.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { addExperience };

export default connect(mapStateToProps, mapDispatchToProps)(AddExp);
