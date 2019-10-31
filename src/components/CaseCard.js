import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const CaseCard = ({ info = {} }) => {
  const cardHandle = e => {
    e.preventDefault();
    console.log(e.currentTarget);
  };
  return (
    <div className="case-card" onClick={cardHandle}>
      <div
        className="has-background-grey-lighter"
      >
        <PreviewCompatibleImage imageInfo={{...info,style:{borderRadius:'unset'}}} />
      </div>
      <div style={{ padding: "30px" }}>
        <div className="is-size-6 has-text-gray-333 has-margin-bottom-20">
          {info.head}
        </div>
        <div className="is-size-6-5 has-text-gray-666">
          <LinesEllipsis
            text={`${info.content}`}
            maxLine="6"
            ellipsis="..."
            style={{ lineHeight: "26px" }}
          />
        </div>
      </div>
    </div>
  );
};

CaseCard.propTypes = {
  info: PropTypes.object
};

export default CaseCard;
