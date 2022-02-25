import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProfiles } from "../actions/profileActions";

export const ProfileItem = ({ profile }) => {
  const {
    _id,
    company,
    status,
    location,
    user: { name, avatar },
    skills,
  } = profile;
  return (
    <div className="profile bg-light">
      <img className="round-img" src={avatar} alt="profile_pic" />
      <div>
        <h2>{name}</h2>
        <p>
          {status} at {company}
        </p>
        <p>{location}</p>
        <Link to={_id} state={{ profile: profile }} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill) => (
          <li className="text-primary" key={skill}>
            <i className="fas fa-check"></i>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Profiles = ({ profile: { profiles }, getProfiles }) => {
  return (
    <section className="container">
      <h1 className="large text-primary">Developers</h1>
      <p className="lead">
        <i className="fab fa-connectdevelop"></i> Browse and connect with
        developers
      </p>
      <div className="profiles">
        {profiles &&
          profiles.length > 0 &&
          profiles.map((profile) => (
            <ProfileItem profile={profile} key={profile._id} />
          ))}
      </div>
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
