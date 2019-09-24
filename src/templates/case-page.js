import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";

const CaseTemplate = ({}) => {
  return (
    <div>
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">核心案例</h1>
            <h2 class="subtitle">不好意思，此页面暂未开发完成...</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

const Case = ({ data }) => {
  return (
    <Layout>
      <CaseTemplate />
    </Layout>
  );
};

export default Case;
