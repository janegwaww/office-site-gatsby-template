import React from "react";
import PropTypes from "prop-types";

function JobCard({ info = {} }) {
  return (
    <div className="box">
      <h4>{info.heading}</h4>
      <p>{info.date}</p>
      <br />
      <p>{info.description}</p>
    </div>
  );
}

JobCard.propTypes = {
  info: PropTypes.object
};

export default JobCard;
