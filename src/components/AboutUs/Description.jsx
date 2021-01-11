import React from "react";

const Description = ({ intro = {} }) => {
  return (
    <div>
      <div>
        <h3 className="about-us-content-head has-text-black is-size-3 has-text-centered is-size-5-5-mobile">
          <span className="is-hidden-mobile"></span>
          {intro.heading}
          <span className="is-hidden-mobile"></span>
        </h3>
      </div>
      <br className="is-hidden-mobile" />
      {intro.description &&
        intro.description
          .split(/\s{2}|\\/)
          .map((o, i) => (
            <p
              className="company-para has-text-dark is-size-7-mobile"
              key={i}
              dangerouslySetInnerHTML={{ __html: o }}
            ></p>
          ))}
    </div>
  );
};

export default Description;
