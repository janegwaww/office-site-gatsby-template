import React from "react";
import SectionTitle from "./SectionTitle";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const DoublePanelLayer = ({ title = "", subtitle = "", items = [] }) => {
  return (
    <section className="section section--gradient double-layer">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="panel-content">
              <SectionTitle title={title} subtitle={subtitle} />

              <div className="has-margin-bottom-60 has-margin-bottom-30-mobile" />
              <div className="context">
                <div className="columns is-multiline is-variable is-5">
                  {items.map((o, i) => (
                    <div className="column is-one-third" key={i}>
                      <div className="h-card panel-card">
                        <div className="avatar">
                          <PreviewCompatibleImage imageInfo={o} />
                        </div>
                        <div className="has-margin-bottom-40 has-margin-bottom-20-mobile" />
                        <div className="name">{o.title}</div>
                        <div className="context">{o.context}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="has-margin-bottom-60 has-margin-bottom-30-mobile" />
            </div>
          </div>
        </div>
        <div className="above-layer layer-net"></div>
      </div>
      <div className="above-layer layer-plain"></div>
      <div className="down-layer"></div>
    </section>
  );
};

export default DoublePanelLayer;
