import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SeekerTabs from "../components/SeekerTabs";
import SolutionTabs from "../components/SolutionTabs";
import BusinessCase from "../components/BusinessCase.js";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${"./img/banner.png"})`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`,
        backgroundColor: `gray`
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column"
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            /* boxShadow: */
            /*   "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px", */
            /* backgroundColor: "rgb(255, 68, 0)", */
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {`数据场景化搭建`}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            /* boxShadow: */
            /*   "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px", */
            /* backgroundColor: "rgb(255, 68, 0)", */
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {`实现数据的按需汇聚，让应用像阳光，照亮业务场景的每个角落`}
        </h3>
        <div
          style={{
            padding: "0.25em"
          }}
        >
          <a className="button is-white is-normal">了解更多</a>
        </div>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <SeekerTabs scrollItems={[`features`]} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="section section--gradient"
      style={{ backgroundColor: "#333B59" }}
    >
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <SolutionTabs />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <BusinessCase />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="section section--gradient"
      style={{ backgroundColor: "blue" }}
    >
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <div className="has-text-centered">
                  <h3 className="has-text-white is-size-4">99.999999%</h3>
                  <p className="has-text-white">数据可靠性</p>
                </div>
                <div className="has-text-centered">
                  <h3 className="has-text-white is-size-4">1V1</h3>
                  <p className="has-text-white">大客户专享</p>
                </div>
                <div className="has-text-centered">
                  <h3 className="has-text-white is-size-4">7X24</h3>
                  <p className="has-text-white">客户服务支持</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
