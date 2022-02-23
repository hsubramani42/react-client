import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import store from "../../../redux/store";
import setAuthToken from "../../../utils/setAuthToken";
import { loadUser } from "../../auth/actions/authActions";
import { DashEdu } from "./DashEdu";
import { DashExp } from "./DashExp";
import { DashOption } from "./DashOption";

export const Dashboard = ({ auth: { user } }) => {
  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> {user && user.name}
      </p>
      <DashOption />
      <DashExp />
      <DashEdu />
      <div className="my-2">
        <button className="btn btn-danger">
          <i className="fas fa-user-minus"></i>
          Delete My Account
        </button>
      </div>
    </section>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
