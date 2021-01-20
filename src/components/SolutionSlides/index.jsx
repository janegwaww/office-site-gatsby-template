import React from "react";
import SectionTitle from "../SectionTitle";
import SlidesTablet from "./SlidesTablet";
import SlidesMobile from "./SlidesMobile";

const SolutionSlides = ({ tabs = [] }) => {
  return (
    <div className="solution-slides">
      <SectionTitle title="应用场景" subtitle="APPLICATION SCENARIOS" />
      <div className="has-margin-bottom-60 has-margin-bottom-30-mobile" />

      <SlidesTablet tabs={tabs} />
      <SlidesMobile tabs={tabs} />
    </div>
  );
};

export default SolutionSlides;
