import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { deleteEducation } from "../../profile/actions/profileActions";
import DateComponent from "../../core/components/DateComponent";
export const DashEdu = ({
  profile: {
    currProfile: { education },
  },
  deleteEducation,
}) => {
  const onDelete = (e) => {
    e.preventDefault();
    deleteEducation(e.target.id);
  };

  const eductionList = education.map((edu) => (
    <tr key={edu._id}>
      <td className="hide-sm text">{edu.school}</td>
      <td className="hide-sm text">{edu.degree}</td>
      <td className="hide-sm text">
        <pre>
          <DateComponent date={edu.date} /> -{" "}
          {edu.current ? "Now" : <DateComponent date={edu.to} />}
        </pre>
      </td>
      <td>
        <button
          className="btn btn-danger"
          type="button"
          id={edu._id}
          onClick={onDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  if (!education || education.length === 0) {
    return (
      <h1 className="text-center mt-2 mb-2">No Education Details Available</h1>
    );
  }
  return (
    <Fragment>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{eductionList}</tbody>
      </table>
    </Fragment>
  );
};

DashEdu.propTypes = {
  profile: PropTypes.object.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = { deleteEducation };

export default connect(mapStateToProps, mapDispatchToProps)(DashEdu);
