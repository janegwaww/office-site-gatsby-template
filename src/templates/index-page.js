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
    <div>
      <img src={`./img/index-banner.png`} />
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
    {/* <section className="section section--gradient"> */}
    {/* <div className="container"> */}
    {/*   <div className="section"> */}
    {/*     <div className="columns"> */}
    {/*       <div className="column is-10 is-offset-1"> */}
    {/*         <BusinessCase /> */}
    {/*       </div> */}
    {/*     </div> */}
    {/*   </div> */}
    {/* </div> */}
    <img src={`./img/coop.png`} />
    {/* </section> */}
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
