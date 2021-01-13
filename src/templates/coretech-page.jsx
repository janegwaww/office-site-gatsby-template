import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BackgroundImageSwitch from "../components/BackgroundImageSwitch";
import DoublePanelLayer from "../components/DoublePanelLayer";
import SectionTitle from "../components/SectionTitle";

class CoretechTemplate extends Component {
  render() {
    return (
      <div className="core-tech">
        <BackgroundImageSwitch
          switchHeight={["570px", "190px"]}
          images={[
            { image: "/img/index-banner.png" },
            { image: "/img/index-banner-mobile.png" }
          ]}
        />
        <div style={{ height: "300px" }}>
          <SectionTitle
            title="视频封面合成"
            subtitle="Video cover composition"
          />
        </div>
        <DoublePanelLayer title="应用特色" subtitle="Application features" />
        <div style={{ height: "600px" }}>
          <SectionTitle title="应用场景" subtitle="Application scenarios" />
        </div>
        <div style={{ height: "300px" }}>
          <SectionTitle title="合作案例" subtitle="Cooperation cases" />
        </div>
      </div>
    );
  }
}

const CoreTech = ({
  pageContext: {
    intl: { language }
  }
}) => {
  return (
    <Layout>
      <CoretechTemplate />
    </Layout>
  );
};

export default CoreTech;

/* export const coreTechQuery =  */
