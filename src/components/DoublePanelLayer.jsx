import React from "react";
import SectionTitle from "./SectionTitle";

const list = [
  {
    img: "/img/icon/com1.svg",
    name: "算法领先",
    context:
      "面向应用的算法架构，领跑行业的产品数据，与国内外顶级高校、人工智能实验室建立长期合作关系，产品的优秀用数据说话。"
  }
];

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
                  {list.map((o, i) => (
                    <div className="column is-one-third" key={i}>
                      <div className="h-card panel-card">
                        <div className="avatar">
                          <img src={o.img} alt={o.name} />
                        </div>
                        <div className="has-margin-bottom-40 has-margin-bottom-20-mobile" />
                        <div className="name">{o.name}</div>
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
