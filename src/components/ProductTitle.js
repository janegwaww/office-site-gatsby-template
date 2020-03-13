import React from "react";
import PropTypes from "prop-types";
import { Link, useIntl } from "gatsby-plugin-intl";
import { useMediaQuery } from "react-responsive";

function ProductTitle({ info = {} }) {
  const { formatMessage } = useIntl();
  const isMobile = useMediaQuery({ query: "(max-width:1024px)" });
  return (
    <div className="product-title">
      <div className="columns is-mobile">
        <div className={`column ${isMobile ? "is-7" : "is-6"}`}>
          <div className="has-margin-bottom-15-mobile">
            <h3
              className="is-size-5-5-mobile is-size-2-5 has-text-white is-size-4-touch is-hidden-tablet"
              style={{ lineHeight: "1", padding: "0.25em 0" }}
            >
              {info.subheading}
            </h3>
            <h3
              className="is-size-5-5-mobile is-size-2-5 has-text-white is-size-4-touch is-hidden-mobile"
              style={{ lineHeight: "1", padding: "0.25em 0" }}
            >
              {info.heading}
            </h3>
            <h6
              className="is-size-7-mobile is-size-6-5 has-text-white"
              style={{
                lineHeight: "1.5",
                padding: "0.5em 0em",
                hyphens: "auto"
              }}
            >
              {isMobile ? info.subdescription : info.description}
            </h6>
          </div>
          <br className="is-hidden-mobile" />
          <div className="product-title-buttons columns is-mobile is-multiline is-size-7-5-mobile">
            <div className={`column ${isMobile ? "is-6" : "is-4"}`}>
              <a
                className="button is-blue is-size-7-5-mobile"
                href="http://seeker.haetek.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                &ensp;&ensp;
                {`${formatMessage({ id: "product.usenow" })}`}
                &ensp;&ensp;
              </a>
            </div>
            <div className={`column ${isMobile ? "is-6" : "is-4"}`}>
              <Link
                className="button is-size-7-5-mobile is-transparent"
                to="/productcenter/advisory/"
              >
                {formatMessage({ id: "product.solutionconsulting" })}
              </Link>
            </div>
            <div
              className={`column ${
                isMobile ? "is-6" : "is-4"
              } has-text-centered`}
            >
              {/*   <a */}
              {/*     className="button is-text is-size-7-5-mobile" */}
              {/*     style={{ */}
              {/*       backgroundColor: "transparent", */}
              {/*       color: "white", */}
              {/*       border: "unset", */}
              {/*       textDecoration: "none", */}
              {/*     }} */}
              {/*   > */}
              {/*     帮助文档{">"} */}
              {/*   </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductTitle.propTypes = {
  titleInfo: PropTypes.object
};

export default ProductTitle;
