import React from "react";
import PropTypes from "prop-types";

function ProductTitle({ info = {} }) {
  return (
    <div
      style={{
        display: "flex",
        height: "150px",
        lineHeight: "1",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        padding: "0 5em"
      }}
    >
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="columns">
              <div className="column is-half">
                <h3
                  className="is-size-5-mobile is-size-2-5 has-text-white"
                  style={{
                    lineHeight: "1",
                    padding: "0.25em 0"
                  }}
                >
                  {`${info.heading}`}
                </h3>
                <h6
                  className="is-size-7-mobile is-size-6-5 has-text-white"
                  style={{
                    lineHeight: "1.5",
                    padding: "0.5em 0em"
                  }}
                >
                  {`${info.description}`}
                </h6>
                <br />
                <div className="columns" style={{ padding: "0.25em 0" }}>
                  <div className="column is-4">
                    <a className="button is-blue is-fullwidth" href="#">
                      立即使用
                    </a>
                  </div>
                  <div className="column is-4 has-text-left">
                    <a
                      className="button is-fullwidth"
                      href="#"
                      style={{ backgroundColor: "transparent", color: "white" }}
                    >
                      业务方案咨询
                    </a>
                  </div>
                  <div className="column is-4 has-text-centered">
                    <a
                      className="button is-text "
                      href="#"
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "unset"
                      }}
                    >
                      帮助文档{">"}
                    </a>
                  </div>
                </div>
              </div>
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
