import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { v4 } from "uuid";
import Momemt from "react-moment";
const educationRender = (education) => (
  <div key={v4()}>
    <h3>{education.school}</h3>
    <p>
      {<Momemt format="MMM YYYY">{education.from}</Momemt>} -{" "}
      {education.current ? (
        "Current"
      ) : (
        <Momemt format="MMM YYYY">{education.to}</Momemt>
      )}
    </p>
    <p>
      <strong>Degree: </strong>
      {education.degree}
    </p>
    <p>
      <strong>Field Of Study: </strong>
      {education.fieldofstudy}
    </p>
    <p>
      <strong>Description: </strong>
      {education.description}
    </p>
  </div>
);

const experienceRender = (experience) => (
  <div key={v4()}>
    <h3 className="text-dark">{experience.company}</h3>
    <p>
      {<Momemt format="MMM YYYY">{experience.from}</Momemt>} -{" "}
      {experience.current ? (
        "Current"
      ) : (
        <Momemt format="MMM YYYY">{experience.to}</Momemt>
      )}
    </p>
    <p>
      <strong>Position: </strong>
      {experience.title}
    </p>
    <p>
      <strong>Description: </strong>
      {experience.description}
    </p>
  </div>
);

const gitRender = (report) => (
  <div className="repo bg-white p-1 my-1" key={v4()}>
    <div>
      <h4>
        <Link to="#" target="_blank" rel="noopener noreferrer">
          Repo One
        </Link>
      </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        laborum!
      </p>
    </div>
    <div>
      <ul>
        <li className="badge badge-primary">Stars: 44</li>
        <li className="badge badge-dark">Watchers: 21</li>
        <li className="badge badge-light">Forks: 25</li>
      </ul>
    </div>
  </div>
);

export const Profile = () => {
  const { profileId } = useParams();

  const location = useLocation();

  const { profile } = location.state;

  if (!profile) {
    return (
      <section className="container text-center">
        <h5 className="text text-danger mt-5 " style={{ marginTop: "200px" }}>
          Profile Not Found
        </h5>
      </section>
    );
  }

  const { education, experience, githubusername, skills } = profile;

  return (
    <section className="container">
      <Link to="/profile" className="btn btn-light">
        Back To Profiles
      </Link>

      <div className="profile-grid my-1">
        <div className="profile-top bg-primary p-2 ">
          <img
            className="round-img my-1 "
            src={profile.user.avatar}
            alt="profile pic"
          />
          <h1 className="large">{profile.name}</h1>
          <p className="lead">
            {profile.status} at {profile.company}
          </p>
          <p>{profile.location}</p>
          <div className="icons my-1">
            {Object.entries(profile.social).map((entry) => (
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

        <div className="profile-about bg-light p-2">
          <h2 className="text-primary">{profile.user.name}'s Bio</h2>
          <p>{profile.bio}</p>
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

        <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Experience</h2>
          {experience && experience.length > 0 ? (
            experience.map(experienceRender)
          ) : (
            <Fragment>
              <h4>NA</h4>
            </Fragment>
          )}
        </div>

        <div className="profile-edu bg-white p-2">
          <h2 className="text-primary">Education</h2>
          {education && education.length > 0 ? (
            education.map(educationRender)
          ) : (
            <Fragment>
              <h4>NA</h4>
            </Fragment>
          )}
        </div>

        <div className="profile-github">
          <h2 className="text-primary my-1">
            <i className="fab fa-github"></i> Github Repos
          </h2>
        </div>
        {githubusername ? (
          <div>Github</div>
        ) : (
          <Fragment>
            <h4>NA</h4>
          </Fragment>
        )}
      </div>
    </section>
  );
};

Profile.propTypes = {
  // profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  // profile: state.profile,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
