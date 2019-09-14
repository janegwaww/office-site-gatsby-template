import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

function ServiceBox({ services = [] }) {
  const Item = ({ info = {} }) => (
    <div className="column is-3">
      <article className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <PreviewCompatibleImage imageInfo={info} className="is-rounded" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong className="is-size-6">{info.heading}</strong>
              <br />
              <span className="is-size-7">{info.description}</span>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
  return (
    <div>
      {services.length === 0 ? null : (
        <div className="box">
          <div className="columns is-gapless">
            {services.map((o, i) => (
              <Item key={i} info={o} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

ServiceBox.propTypes = {
  services: PropTypes.array
};

export default ServiceBox;
