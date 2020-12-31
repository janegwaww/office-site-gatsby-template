import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

class CoretechTemplate extends Component {
  render() {
    return <div style={{ height: "100vh" }}>coretech template</div>;
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
