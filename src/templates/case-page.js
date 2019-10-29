import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import CaseCard from "../components/CaseCard";

const CaseTemplate = ({ image, heading, cases }) => {
  return (
    <div className="case-page">
      <div
        className="full-width-image margin-top-0"
        style={{
          height: "600px",
          backgroundImage: `url(${
            !!image ? image.childImageSharp.fluid.src : image
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="section h-section">
        <div className="container">
          <h3 className="is-size-3 is-size-5-mobile has-text-centered has-margin-bottom-40">
            {heading}
          </h3>
          <div className="case-container">
            <div className="columns is-multiline">
              {cases.map((o, i) => (
                <div className="column is-4">
                  <CaseCard info={o} key={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CaseTemplate.propTypes = {
  image: PropTypes.object,
  heading: PropTypes.string,
  cases: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object,
      alt: PropTypes.string,
      head: PropTypes.string,
      content: PropTypes.string
    })
  )
};

const Case = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <CaseTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        cases={frontmatter.cases}
      />
    </Layout>
  );
};

Case.propTypes = {
  data: PropTypes.object
};

export default Case;

export const casesQuery = graphql`
  query Case($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        cases {
          image {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
          head
          content
        }
      }
    }
  }
`;
