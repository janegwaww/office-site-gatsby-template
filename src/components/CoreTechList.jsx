import React from "react";
import SectionTitle from "./SectionTitle";

const list = [
  {
    icon: "/img/coretech/kfec.svg",
    title: "知识填充 / 知识纠错",
    context:
      "打破针对语言习惯和语法层面的文本纠错，利用知识解析技术提供知识层面的解析。其主要分为知识纠错和知识填充。",
    href: "/coretech/kfec/"
  }
];

const CoreTechList = ({ items = list }) => {
  return (
    <div className="core-tech-list content">
      <SectionTitle title="核心技术" subtitle="CORE TECHNOLOGY" />

      <div className="has-margin-bottom-60 has-margin-bottom-30-mobile" />
      <div className="columns is-multiline is-variable is-4">
        {items.map((i) => (
          <div key={i.title} className="column is-one-third">
            <div className="h-card core-tech">
              <div className="avatar is-image">
                <img src={i.icon} alt={i.title} />
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
