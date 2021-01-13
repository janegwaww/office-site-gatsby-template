import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const SolutionSlides = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTab = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="solution-slides">
      <SectionTitle title="应用场景" subtitle="APPLICATION SCENARIOS" />
      <div className="has-margin-bottom-60 has-margin-bottom-30-mobile" />

      <div className="slides columns is-gapless">
        <div className="slides-head column is-one-fifth">
          <div className="image is-50x50">
            <img src="/img/logo-icon.png" alt="logo" />
          </div>
          <div className="tabs is-verticle">
            <ul>
              {tabs.map((o, i) => (
                <li
                  key={i}
                  onClick={() => handleTab(i)}
                  className={`${activeTab === i ? "is-active" : ""}`}
                >
                  <a>{o.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="v-tab-content column is-four-fifths">
          <div className="right-arrow" />
          <div className="tab-items">
            {tabs.map((o, i) => (
              <div
                className={`tab-item ${activeTab === i ? "is-active" : ""}`}
                key={i}
              >
                <div className="columns  is-gapless">
                  <div className="column is-two-fifths">
                    <div className="name">
                      <div className="is-size-2-5 has-text-white has-margin-left-40">
                        {o.title}
                      </div>
                      <div>
                        {o.subtitle.map((n) => (
                          <div
                            className="is-size-4 has-text-white has-margin-left-40"
                            key={n}
                          >
                            {n}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="img column is-three-fifths">
                    <div className="image">
                      <PreviewCompatibleImage imageInfo={o} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSlides;
