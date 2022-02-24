import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { deleteExperience } from "../../profile/actions/profileActions";
import DateComponent from "../../core/components/DateComponent";
export const DashExp = ({
  profile: {
    currProfile: { experience },
  },
  deleteExperience,
}) => {
  const onDelete = (e) => {
    e.preventDefault();
    deleteExperience(e.target.id);
  };
  const experienceList = experience.map((exp) => (
    <tr key={exp._id}>
      <td className="hide-sm text">{exp.company}</td>
      <td className="hide-sm text">{exp.title}</td>
      <td className="hide-sm text">
        <pre>
          <DateComponent date={exp.date} /> -{" "}
          {exp.current
            ? "Now"
            : (<DateComponent date={exp.to} />).format("DD-MM-YYYY")}
        </pre>
      </td>
      <td>
        <button
          className="btn btn-danger"
          type="button"
          id={exp._id}
          onClick={onDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  if (!experience || experience.length === 0) {
    return (
      <h1 className="text-center mt-2 mb-2">No Experience Details Available</h1>
    );
  }
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
        <tbody>{experienceList}</tbody>
      </table>
    </Fragment>
  );
};

DashExp.propTypes = {
  profile: PropTypes.object.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = { deleteExperience };

export default connect(mapStateToProps, mapDispatchToProps)(DashExp);
