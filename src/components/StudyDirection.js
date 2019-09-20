import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function StudyDirection({ heading = "", dir = [] }) {
  return (
    <div className="columns">
      <div className="column is-10 is-offset-1 has-text-centered">
        <h3 className=" is-size-2 has-text-weight-bold">{heading}</h3>
        <br />
        <br />
        <div class="tabs is-centered is-fullwidth is-large">
          <ul>
            <li class="is-active">
              <a>网络结构进化策略</a>
            </li>
            <li>
              <a>信息智能</a>
            </li>
            <li>
              <a>推衍引擎</a>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="is-size-3">{dir[0].description.split(":")[0]}</div>
          <p className="is-size-7">{dir[0].description.split(":")[1]}</p>
        </div>
      </div>
    </div>
  );
}

StudyDirection.propTypes = {
  heading: PropTypes.string,
  dir: PropTypes.array
};

export default StudyDirection;
