import React from "react";
import SectionTitle from "../SectionTitle";

const Vision = ({ intro }) => {
  return (
    <section className="section is-hidden-desktop vision">
      <SectionTitle title="使命与愿景" subtitle="MISSION&VISION" />
      <br />
      <div>
        {intro.subdescription.map((o, i) => (
          <div key={i} className={`item-${i + 1}`}>
            <p className="name">{o.title}</p>
            <p className="has-text-grey">{o.content}</p>
            <br />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
