import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";

export const DashExp = (props) => {
  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tech Guy Web Solutions</td>
            <td className="hide-sm">Senior Developer</td>
            <td className="hide-sm">02-03-2009 - 01-02-2014</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Traversy Media</td>
            <td className="hide-sm">Instructor & Developer</td>
            <td className="hide-sm">02-03-2015 - Now</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

DashExp.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashExp);
