import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";

function JobCard({ info = {} }) {
  return (
    <div className="box" style={{ borderRadius: "4px", boxShadow: "unset" }}>
      <div className="" style={{ marginBottom: "6px" }}>
        <p className="is-size-5 is-size-6-mobile">{info.heading}</p>
      </div>
      <p className="is-size-7-5-mobile">{info.date}</p>
      <LinesEllipsis
        className="is-size-7-mobile"
        style={{ maxHeight: "4.5em", overflow: "hidden" }}
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
