import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Navigate, useMatch, useNavigate } from "react-router-dom";
import { getCurrentProfile, createProfile } from "../actions/profileActions";
import store from "../../../redux/store/index";
const initialState = {
  company: "",
  website: "",
  location: "",
  status: "",
  skills: "",
  githubusername: "",
  bio: "",
  twitter: "",
  facebook: "",
  linkedin: "",
  youtube: "",
  instagram: "",
};

const Profile = ({
  profile: { currProfile, loading },
  createProfile,
  getCurrentProfile,
}) => {
  const [formData, setFormData] = useState(initialState);

  const creatingProfile = useMatch("/profile/create-profile");

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // if there is no currProfile, attempt to fetch one
    if (!currProfile) store.dispatch(getCurrentProfile());

    // if we finished loading and we do have a currProfile
    // then build our currProfileData
    if (!loading && currProfile) {
      const currProfileData = { ...initialState };
      for (const key in currProfile) {
        if (key in currProfileData) currProfileData[key] = currProfile[key];
      }
      for (const key in currProfile.social) {
        if (key in currProfileData)
          currProfileData[key] = currProfile.social[key];
      }
      // the skills may be an array from our API response
      if (Array.isArray(currProfileData.skills))
        currProfileData.skills = currProfileData.skills.join(", ");
      // set local state with the currProfileData
      setFormData(currProfileData);
    }
  }, [loading, getCurrentProfile, currProfile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, navigate, currProfile ? true : false);
  };

  return (
    <Fragment>
      <section className="container text-center">
        <h1 className="large text-primary">
          {creatingProfile ? "Create Your Profile" : "Edit Your Profile"}
        </h1>
        <p className="lead">
          <i className="fas fa-user" />
          <br />
          {creatingProfile
            ? ` Let's get some information to make your profile`
            : " Add some changes to your profile"}
        </p>
        <small>* = required field</small>
      </section>
      <section>
        <form className="form" onSubmit={onSubmit} align="center">
          <div className="form-group">
            <select name="status" value={status} onChange={onChange}>
              <option>* Select Professional Status</option>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor">Instructor or Teacher</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
            <br />
            <small className="form-text">
              Give us an idea of where you are at in your career
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Company"
              name="company"
              value={company}
              onChange={onChange}
            />
            <br />
            <small className="form-text">
              Could be your own company or one you work for
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Website"
              name="website"
              value={website}
              onChange={onChange}
            />
            <br />
            <small className="form-text">
              Could be your own or a company website
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={onChange}
            />
            <br />
            <small className="form-text">
              City & state suggested (eg. Boston, MA)
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Skills"
              name="skills"
              value={skills}
              onChange={onChange}
            />
            <br />
            <small className="form-text">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Github Username"
              name="githubusername"
              value={githubusername}
              onChange={onChange}
            />
            <br />
            <small className="form-text">
              If you want your latest repos and a Github link, include your
              username
            </small>
          </div>
          <div className="form-group">
            <textarea
              placeholder="A short bio of yourself"
              name="bio"
              value={bio}
              onChange={onChange}
            />
            <br />
            <small className="form-text">Tell us a little about yourself</small>
          </div>

          <div className="my-2">
            <button
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              type="button"
              className="btn btn-light"
            >
              Add Social Network Links
            </button>
            <span>Optional</span>
          </div>

          {displaySocialInputs && (
            <Fragment>
              <div className="form-group social-input">
                <i className="fab fa-twitter fa-2x" />
                <br />
                <input
                  type="text"
                  placeholder="Twitter URL"
                  name="twitter"
                  value={twitter}
                  onChange={onChange}
                />
                <br />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-facebook fa-2x" />
                <br />
                <input
                  type="text"
                  placeholder="Facebook URL"
                  name="facebook"
                  value={facebook}
                  onChange={onChange}
                />
                <br />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-youtube fa-2x" />
                <br />
                <input
                  type="text"
                  placeholder="YouTube URL"
                  name="youtube"
                  value={youtube}
                  onChange={onChange}
                />
                <br />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-linkedin fa-2x" />
                <br />
                <input
                  type="text"
                  placeholder="Linkedin URL"
                  name="linkedin"
                  value={linkedin}
                  onChange={onChange}
                />
                <br />
              </div>

              <div className="form-group social-input">
                <i className="fab fa-instagram fa-2x" />
                <br />
                <input
                  type="text"
                  placeholder="Instagram URL"
                  name="instagram"
                  value={instagram}
                  onChange={onChange}
                />
                <br />
              </div>
            </Fragment>
          )}

          <input type="submit" className="btn btn-primary my-1" />
          <br />
          <Link className="btn btn-light my-1" to="/dashboard">
            Go Back
          </Link>
        </form>
      </section>
    </Fragment>
  );
};

Profile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  Profile
);
