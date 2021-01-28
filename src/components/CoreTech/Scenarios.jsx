import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const Scenarios = ({ scen = [] }) => {
  const [active, setActive] = useState(0);

  const handleTab = (value) => {
    setActive(value);
  };

  return (
    <section className="section scenarios">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <SectionTitle title="应用场景" subtitle="Application scenarios" />

            <div className="has-margin-bottom-60 has-margin-bottom-30-mobile" />
            <div className="tabs is-centered">
              <ul>
                {scen.map((o, i) => (
                  <li
                    className={`${active === i ? "is-active" : ""}`}
                    key={o.title}
                    onClick={() => handleTab(i)}
                  >
                    <a>{o.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tab-content">
              {scen.map((o, i) => (
                <div
                  className={`tab-item ${active === i ? "is-active" : ""}`}
                  key={o.title}
                >
                  <div className="columns">
                    <div className="column is-half tab-item-left">
                      <PreviewCompatibleImage imageInfo={o} />
                    </div>
                    <div className="column is-half content">
                      <p>应用说明</p>
                      <p className="is-size-7 has-text-grey">{o.description}</p>
                      <br />
                      <p>产品说明</p>
                      {o.advance.map((i) => (
                        <div
                          className="is-size-7 has-text-grey"
                          key={i}
                        >{`- ${i}`}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scenarios;
