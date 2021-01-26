import React from "react";
import SectionTitle from "../SectionTitle";
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const images = [
  {
    image: "/img/coretech/coop-icon1.png",
    alt: "coop"
  },
  {
    image: "/img/coretech/coop-icon2.png",
    alt: "coop"
  }
];

const Cooperater = () => {
  return (
    <section className="section section--gradient cooperater">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <SectionTitle title="合作案例" subtitle="Cooperation cases" />

            <div className="has-margin-bottom-60 has-margin-bottom-30-mobile" />
            <div className="coop-icons">
              {images.map((o) => (
                <div key={o.image} className="coop-img">
                  <PreviewCompatibleImage imageInfo={o} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cooperater;
