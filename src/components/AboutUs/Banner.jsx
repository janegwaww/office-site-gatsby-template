import React from "react";
import BackgroundImageSwitch from "../BackgroundImageSwitch";

const Banner = ({ intro, image }) => {
  return (
    <BackgroundImageSwitch
      images={[{ image: image }, { image: image }]}
      switchHeight={["800px", "300px"]}
    >
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="banner-content">
              <p className="has-text-white has-text-centered is-size-5-mobile is-hidden-tablet">
                关于黑顿
              </p>
              <p className="has-text-white has-text-centered is-size-2-5-tablet is-size-5-mobile">
                {intro.heading}
              </p>
              <br className="is-hidden-touch" />
              {intro.descriptions.map((o, i) => (
                <div className="description" key={i}>
                  <p
                    className="has-text-white has-text-centered is-size-6"
                    key={i}
                  >
                    {o}
                  </p>
                  {[1, 5, 7].includes(i) && <br />}
                </div>
              ))}
            </div>
          </div>
        </div>
        <br className="is-hidden-touch" />
        <br className="is-hidden-touch" />
        <div className="sub-description">
          {intro.subdescription.map((o, i) => (
            <div
              key={i}
              className={`has-text-white has-text-centered item-${i + 1}`}
            >
              <p className="name">{o.title}</p>
              <p className="is-size-4">{o.content}</p>
            </div>
          ))}
        </div>
      </div>
    </BackgroundImageSwitch>
  );
};

export default Banner;
