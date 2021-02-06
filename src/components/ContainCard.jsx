import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage, Link } from "gatsby-plugin-intl";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import LinesEllipsis from "react-lines-ellipsis";

const ContainCard = ({ info = {} }) => {
  return (
    <div className="contain-card columns is-horizontal has-background-white">
      <div className="column is-5">
        <p className="is-size- is-hidden-tablet is-size-6-mobile has-text-centered">
          {info.subHeading}
        </p>
        <figure className="image is-200x150-mobile" style={{ margin: "auto" }}>
          <PreviewCompatibleImage imageInfo={info} />
        </figure>
      </div>
      <div className="column is-7 contain-card-right has-text-centered-mobile">
        <div className="content">
          <p className="is-size-4 is-hidden-mobile">{info.subHeading}</p>
          <LinesEllipsis
            className="is-size-6 has-text-grey has-text-left is-size-7-mobile"
            text={`${info.description}`}
            maxLine="5"
            ellipsis="..."
            style={{
              whiteSpace: "pre-wrap",
              hyphens: "auto",
              textAlign: "justify"
            }}
          />
        </div>
        <Link
          className="button is-white-blue is-size-6 is-size-7-mobile"
          to="/detail/"
          state={{ title: info.subHeading, content: info.description }}
        >
          <FormattedMessage id="home.understandmore" />
        </Link>
      </div>
    </div>
  );
};

ContainCard.propTypes = {
  info: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    alt: PropTypes.string,
    subHeading: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string
  })
};

export default ContainCard;
