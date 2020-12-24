import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby-plugin-intl";
import LinesEllipsis from "react-lines-ellipsis";
import { useMediaQuery } from "react-responsive";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const CaseCard = ({ info = {} }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
  const headimg = isTabletOrMobile
    ? { ...info, image: info.image2 }
    : { ...info, image: info.image1 };
  const cardHandle = e => {
    e.preventDefault();
    navigate("/detail/", {
      state: { title: info.head, content: info.content }
    });
  };
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
            maxLine={`${isTabletOrMobile ? 3 : 6}`}
            ellipsis="..."
            style={{
              lineHeight: "26px",
              whiteSpace: "pre-wrap",
              hyphens: "auto"
            }}
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
