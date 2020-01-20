import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";

function JobCard({ info = {} }) {
  return (
    <div className="box" style={{ boxShadow: "unset" }}>
      <div className="" style={{ marginBottom: "6px" }}>
        <p className="is-size-5 is-size-6-mobile">{info.heading}</p>
      </div>
      <p className="is-size-7-5-mobile">{info.date}</p>
      <LinesEllipsis
        className="is-size-7-mobile"
        style={{
          height: "4.5em",
          overflow: "hidden",
          color: "#666666",
          whiteSpace: "pre-wrap",
          textAlign: "left",
          hyphens: "auto"
        }}
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
