import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { v4 } from "uuid";
import Momemt from "react-moment";
import { getProfileById } from "../actions/profileActions";

const Top = ({ profile }) => {
  const {
    user: { avatar },
    name,
    status,
    company,
    location,
    social,
  } = profile;
  return (
    <div className="profile-top bg-primary p-2 ">
      <img className="round-img my-1 " src={avatar} alt="profile pic" />
      <h1 className="large">{name}</h1>
      <p className="lead">
        {status} at {company}
      </p>
      <p>{location}</p>
      <div className="icons my-1">
        {Object.entries(social).map((entry) => (
          <Link
            to={entry[1]}
            replace={false}
            target="_blank"
            action="replace"
            key={entry[0]}
            rel="noopener noreferrer"
          >
            <i className={`fab fa-${entry[0]} fa-2x`}></i>
          </Link>
        ))}
      </div>
    </div>
  );
};

const About = ({ profile }) => {
  const {
    user: { name },
    bio,
    skills,
  } = profile;
  return (
    <div className="profile-about bg-light p-2">
      <h2 className="text-primary">{name}'s Bio</h2>
      <p>{bio}</p>
      <div className="line"></div>
      <h2 className="text-primary">Skill Set</h2>
      <div className="skills">
        {skills.map((skill) => (
          <div className="p-1" key={skill}>
            <i className="fa fa-check"></i> {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

const EducationItem = ({ edu }) => {
  const { school, from, current, to, degree, fieldofstudy, description } = edu;
  return (
    <div>
      <h3>{school}</h3>
      <p>
        {<Momemt format="MMM YYYY">{from}</Momemt>} -{" "}
        {current ? "Current" : <Momemt format="MMM YYYY">{to}</Momemt>}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      <p>
        <strong>Field Of Study: </strong>
        {fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </div>
  );
};

const ExperienceItem = ({ exp }) => {
  const { company, from, current, to, title, description } = exp;
  return (
    <div>
      <h3 className="text-dark">{company}</h3>
      <p>
        {<Momemt format="MMM YYYY">{from}</Momemt>} -{" "}
        {current ? "Current" : <Momemt format="MMM YYYY">{to}</Momemt>}
      </p>
      <p>
        <strong>Position: </strong>
        {title}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </div>
  );
};

export const Education = ({ education }) => {
  return (
    <div className="profile-edu bg-white p-2">
      <h2 className="text-primary">Education</h2>
      {education && education.length > 0 ? (
        education.map((edu) => <EducationItem key={v4()} edu={edu} />)
      ) : (
        <Fragment>
          <h4>NA</h4>
        </Fragment>
      )}
    </div>
  );
};

export const Experience = ({ experience }) => {
  return (
    <div className="profile-exp bg-white p-2">
      <h2 className="text-primary">Experience</h2>
      {experience && experience.length > 0 ? (
        experience.map((exp) => <ExperienceItem key={v4()} exp={exp} />)
      ) : (
        <Fragment>
          <h4>NA</h4>
        </Fragment>
      )}
    </div>
  );
};

const GitItem = ({ repo }) => {
  const { name, description, stars, watchers, forks } = repo;
  return (
    <div className="repo bg-white p-1 my-1">
      <div>
        <h4>
          <Link to="#" target="_blank" rel="noopener noreferrer">
            {name}
          </Link>
        </h4>
        <p>{description}</p>
      </div>
      <div>
        <ul>
          <li className="badge badge-primary">Stars: {stars}</li>
          <li className="badge badge-dark">Watchers: {watchers}</li>
          <li className="badge badge-light">Forks: {forks}</li>
        </ul>
      </div>
    </div>
  );
};

const Github = ({ repos }) => {
  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">
        <i className="fab fa-github"></i> Github Repos
      </h2>
      {repos && repos.length > 0 ? (
        repos.map((repo) => <GitItem key={repo.id} repo={repo} />)
      ) : (
        <Fragment>
          <h4>NA</h4>
        </Fragment>
      )}
    </div>
  );
};

export const DetailedProfile = ({
  profile: { currProfile, repos },
  auth: { user },
  getProfileById,
}) => {
  const { profileId } = useParams();
  useEffect(() => {
    if (!currProfile) getProfileById(profileId);
    else if (currProfile.user._id != profileId) {
      getProfileById(profileId);
    }
  }, [currProfile]);

  if (!currProfile) {
    return (
      <section className="container text-center">
        <h5 className="text text-danger mt-5 " style={{ marginTop: "200px" }}>
          Profile Not Found
        </h5>
      </section>
    );
  }

  const profile = currProfile;
  const { education, experience } = profile;
  return (
    <section className="container">
      <Link to="/profile" className="btn btn-light">
        Back To Profiles
      </Link>
      {user._id === currProfile.user._id && (
        <Link to="/dashboard" className="btn btn-light">
          Edit
        </Link>
      )}
      <div className="profile-grid my-1">
        <Top profile={profile} />
        <About profile={profile} />
        <Experience experience={experience} />
        <Education education={education} />
        <Github repos={repos} />
      </div>
    </section>
  );
};

DetailedProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

const mapDispatchToProps = { getProfileById };

export default connect(mapStateToProps, mapDispatchToProps)(DetailedProfile);
