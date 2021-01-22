import React from "react";
import BackgroundImageSwitch from "../BackgroundImageSwitch";
const Banner = ({ image }) => {
  return (
    <div>
      <BackgroundImageSwitch
        switchHeight={["500px", "300px"]}
        images={[{ image: image }, { image: image }]}
      >
        <div>sa</div>
      </BackgroundImageSwitch>
    </div>
  );
};

export default Banner;
