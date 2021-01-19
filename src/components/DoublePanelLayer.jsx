import React from "react";
import SectionTitle from "./SectionTitle";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const DoublePanelLayer = ({ title = "", subtitle = "", items = [] }) => {
  return (
    <section className="section section--gradient double-layer is-paddingless-mobile">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="panel-content">
              <SectionTitle title={title} subtitle={subtitle} />

              <div className="has-margin-bottom-60 has-margin-bottom-30-mobile" />
              <div className="context">
                <div className="columns is-multiline is-variable is-5-tablet is-2-mobile is-mobile">
                  {items.map((o, i) => (
                    <div
                      className="column is-one-third-touch is-half-mobile"
                      key={i}
                    >
                      <div className="h-card panel-card">
                        <div className="avatar">
                          <PreviewCompatibleImage imageInfo={o} />
                        </div>
                        <div className="has-margin-bottom-40 has-margin-bottom-10-mobile" />
                        <div className="name is-size-6-mobile">{o.title}</div>
                        <div className="context is-size-6-5-mobile">
                          {o.context}
                        </div>
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
