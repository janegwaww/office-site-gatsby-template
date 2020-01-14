import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby-plugin-intl";
import Layout from "../../components/Layout";

const DetailTemplate = ({ title = "", content = "" }) => {
  return (
    <section className="hero is-light is-bold is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{content}</h2>
        </div>
      </div>
      <div className="hero-foot">
        <Link className="button is-text" onClick={() => window.history.back()}>
          返回
        </Link>
      </div>
    </section>
  );
};
DetailTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

const Detail = ({ location }) => {
  const { title, content } = location.state || {};
  return (
    <Layout>
      <DetailTemplate title={title} content={content} />
    </Layout>
  );
};

export default Detail;
