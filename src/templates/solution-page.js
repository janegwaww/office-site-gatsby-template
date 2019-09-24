import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";

const SolutionTemplate = ({}) => {
  return (
    <div>
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">解决方案</h1>
            <h2 class="subtitle">不好意思，此页面暂未开发完成...</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

const Solution = ({ data }) => {
  return (
    <Layout>
      <SolutionTemplate />
    </Layout>
  );
};

export default Solution;
