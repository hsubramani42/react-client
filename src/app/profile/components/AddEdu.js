import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { addEducation } from "../actions/profileActions";
import { Link, useNavigate } from "react-router-dom";

export const AddEdu = ({ addEducation }) => {
  const [formData, setFormData] = useState({ current: false });
  const navigate = useNavigate();
  const onChange = (e) => {
    if (e.target.name === "current")
      setFormData({ ...formData, [e.target.name]: !formData.current });
    else setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addEducation(formData, navigate);
  };

  return (
    <Fragment>
      <h1 className="large text-primary text-center">Add Your Education</h1>
      <p className="lead text-center">
        <i className="fas fa-graduation-cap"></i> Add any school, bootcamp, etc
        that you have attended
        <br />
        <small className="text-center">* = required field</small>
      </p>

      <form className="form" align="center" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Field Of Study"
            name="fieldofstudy"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>From Date</label>
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
            Current School or Bootcamp
          </p>
        </div>
        {!formData.current && (
          <div className="form-group">
            <label>To Date </label>
            <input type="date" name="to" onChange={onChange} />
          </div>
        )}
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            onChange={onChange}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddEdu.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { addEducation })(AddEdu);
