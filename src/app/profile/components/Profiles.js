import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProfiles } from "../actions/profileActions";

export const Profiles = ({ profile: { profiles }, getProfiles }) => {
  const profileContent = profiles.map((profile) => (
    <div className="profile bg-light" key={profile._id}>
      <img className="round-img" src={profile.user.avatar} alt="profile_pic" />
      <div>
        <h2>{profile.user.name}</h2>
        <p>
          {profile.status} at {profile.company}
        </p>
        <p>{profile.location}</p>
        <Link
          to={profile._id}
          state={{ profile: profile }}
          className="btn btn-primary"
        >
          View Profile
        </Link>
      </div>
      <ul>
        {profile.skills.map((skill) => (
          <li className="text-primary" key={skill}>
            <i className="fas fa-check"></i>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  ));
  return (
    <section className="container">
      <h1 className="large text-primary">Developers</h1>
      <p className="lead">
        <i className="fab fa-connectdevelop"></i> Browse and connect with
        developers
      </p>
      <div className="profiles">{profileContent}</div>
    </section>
  );
};

Profiles.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = { getProfiles };

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
