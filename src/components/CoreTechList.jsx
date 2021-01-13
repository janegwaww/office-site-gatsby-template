import React from "react";
import SectionTitle from "./SectionTitle";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const CoreTechList = ({ items = [] }) => {
  return (
    <div className="core-tech-list content">
      <SectionTitle title="核心技术" subtitle="CORE TECHNOLOGY" />

      <div className="has-margin-bottom-60 has-margin-bottom-30-mobile" />
      <div className="columns is-multiline is-variable is-4">
        {items.map((i) => (
          <div key={i.title} className="column is-one-third">
            <div className="h-card core-tech">
              <div className="avatar is-image">
                <PreviewCompatibleImage imageInfo={i} />
              </div>
              <div className="name">{i.title}</div>
              <div className="content has-ellipsis is-5">{i.context}</div>
              <a className="cover" href={i.href} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreTechList;
