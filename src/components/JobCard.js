import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";

function JobCard({ info = {} }) {
  return (
    <div className="box" style={{ borderRadius: "4px", boxShadow: "unset" }}>
      <div className="" style={{ marginBottom: "6px" }}>
        <p className="is-size-5">{info.heading}</p>
      </div>
      <p>{info.date}</p>
      <LinesEllipsis
        style={{ height: "4.5em" }}
        text={`${info.description}`}
        maxLine="3"
        ellipsis="..."
      />
    </div>
  );
}

JobCard.propTypes = {
  info: PropTypes.object
};

export default JobCard;
