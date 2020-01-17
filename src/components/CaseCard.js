import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const CaseCard = ({ info = {} }) => {
  const [maxLine, setMaxLine] = useState("");
  const [headimg, setHeadimg] = useState({ image: "", alt: "" });
  const cardHandle = e => {
    e.preventDefault();
    console.log(e.currentTarget);
  };
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setHeadimg({ ...info, image: info.image2 });
      setMaxLine("3");
    } else {
      setHeadimg({ ...info, image: info.image1 });
      setMaxLine("6");
    }
  }, []);
  return (
    <div className="case-card" onClick={cardHandle}>
      <div className="has-background-grey-lighter">
        <PreviewCompatibleImage
          imageInfo={{ ...headimg, style: { borderRadius: "unset" } }}
        />
      </div>
      <div className="has-padding-30 has-padding-20-mobile">
        <div className="is-size-6 has-text-gray-333 has-margin-bottom-20 has-margin-bottom-10-mobile is-size-5-5-mobile">
          {info.head}
        </div>
        <div className="is-size-6-5 has-text-gray-666">
          <LinesEllipsis
            text={`${info.content}`}
            maxLine={maxLine}
            ellipsis="..."
            style={{ lineHeight: "26px", whiteSpace: "pre-wrap" }}
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
