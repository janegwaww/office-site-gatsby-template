import React from "react";
import SectionTitle from "../SectionTitle";

const Introduction = ({ intro }) => {
  return (
    <div className="haetek-introduction is-hidden-desktop has-background-white-ter">
      <section className="section">
        <SectionTitle title="黑顿简介" subtitle="HAETEK INTRODUCTION" />

        <br />
        <div>
          {intro.descriptions.map((o, i) => (
            <div className="" key={i}>
              <p className="has-text-grey has-text-centered is-size-7" key={i}>
                {o}
              </p>
              {[1, 5, 7].includes(i) && <br />}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Introduction;
