import React from "react";
import Moment from "react-moment";
const DateComponent = ({ date }) => {
  return <Moment format="DD-MM-YYYY">{date}</Moment>;
};

export default DateComponent;
