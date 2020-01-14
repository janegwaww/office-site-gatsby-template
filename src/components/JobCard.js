import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby-plugin-intl";
import LinesEllipsis from "react-lines-ellipsis";

function JobCard({ info = {} }) {
  const handleClick = e => {
    e.preventDefault();
    navigate("/detail/", {
      state: { title: info.heading, content: info.description }
    });
  };
  return (
    <div className="job-card box" onClick={handleClick}>
      <div style={{ marginBottom: "6px" }}>
        <p className="is-size-5 is-size-6-mobile">{info.heading}</p>
      </div>
      <p className="is-size-7-5-mobile">{info.date}</p>
      <LinesEllipsis
        className="is-size-7-mobile"
        style={{ height: "4.5em", overflow: "hidden", color: "#666666" }}
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
