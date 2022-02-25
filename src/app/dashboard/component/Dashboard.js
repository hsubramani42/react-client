import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import { DashOption } from "./DashOption";
import store from "../../../redux/store/index";
import {
  getCurrentProfile,
  deleteAccount,
} from "../../profile/actions/profileActions";
import { Link } from "react-router-dom";
import DashExp from "./DashExp";
import DashEdu from "./DashEdu";

export const Dashboard = ({
  auth: { user },
  profile: { currProfile, loading },
  deleteAccount,
}) => {
  useEffect(() => {
    if (!currProfile) {
      store.dispatch(getCurrentProfile());
    }
  }, [currProfile]);
  const profileDisplay = (
    <Fragment>
      <DashOption />
      <DashExp />
      <DashEdu />
      <pre className="my-2">
        <button
          className="btn btn-danger"
          onClick={(e) => {
            e.preventDefault();
            deleteAccount();
          }}
        >
          <i className="fas fa-user-minus"></i> Delete My Account
        </button>
      </pre>
    </Fragment>
  );
  const profileCreate = (
    <>
      <p>You have not yet setup a profile, please add some info</p>
      <Link to="/profile/create-profile" className="btn btn-primary my-1">
        Create Profile
      </Link>
    </>
  );
  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> {user && user.name}
      </p>
      {currProfile ? profileDisplay : profileCreate}
    </section>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

const mapDispatchToProps = { getCurrentProfile, deleteAccount };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
