import React, { useState } from "react";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const SlidesTablet = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTab = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="slides-tablet columns is-gapless">
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
        <div className="h-icon right-arrow" />
        <div className="tab-items">
          {tabs.map((o, i) => {
            const { title, subtitle, images } = o;
            const [image] = images || [{}];
            return (
              <div
                className={`tab-item ${activeTab === i ? "is-active" : ""}`}
                key={i}
              >
                <div className="columns  is-gapless">
                  <div className="column is-two-fifths">
                    <div className="name">
                      <div className="is-size-2-5 has-text-white has-margin-left-40">
                        {title}
                      </div>
                      <div>
                        {subtitle.map((n) => (
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
                      <PreviewCompatibleImage imageInfo={image} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SlidesTablet;
