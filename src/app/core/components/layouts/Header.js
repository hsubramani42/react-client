import React, { Component, Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../../auth/actions/authActions";

export const Header = ({ auth: { isAuthenticated }, logout }) => {
  const unAuthSnippet = (
    <Fragment>
      <li className="nav-item">
        <Link className="nav-link" to="/auth/register">
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/auth/login">
          Login
        </Link>
      </li>
    </Fragment>
  );

  const authSnippet = (
    <Link className="nav-link" onClick={logout} to="/auth/login">
      Logout
    </Link>
  );
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark"
      style={{ height: "80px" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          DevConnector
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                {" "}
                Developers
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            {!isAuthenticated ? unAuthSnippet : authSnippet}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
