import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SeekerTabs from "../components/SeekerTabs";
import SolutionTabs from "../components/SolutionTabs";
import BusinessCase from "../components/BusinessCase.js";

export const IndexPageTemplate = ({
  image,
  services,
  features,
  solution,
  business,
  rate
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image ? image.childImageSharp.fluid.src : image
        })`,
        backgroundAttachment: `fixed`,
        backgroundSize: "contain"
      }}
    ></div>
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
      className="section"
      style={{
        backgroundColor: "blue",
        backgroundImage: `url(${"./img/persent.svg"})`,
        height: "184px",
        padding: "1.5em 1.5em"
      }}
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
  services: PropTypes.array,
  features: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  solution: PropTypes.shape({
    heading: PropTypes.string,
    blurbs: PropTypes.array
  }),
  business: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  rate: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  console.log(data);
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        services={frontmatter.services}
        features={frontmatter.features}
        solution={frontmatter.solution}
        business={frontmatter.business}
        rate={frontmatter.rate}
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
        services {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heading
          description
        }
        features {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
            subHeading
            description
          }
        }
        solution {
          heading
          blurbs {
            heading
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
          }
        }
        business {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        rate {
          blurbs {
            heading
            description
          }
        }
      }
    }
  }
`;
