import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BackgroundImageSwitch from "../components/BackgroundImageSwitch";
import CaseCard from "../components/CaseCard";

const CaseTemplate = ({ images, heading, cases }) => {
  return (
    <div className="case-page">
      <BackgroundImageSwitch
        images={images}
        switchHeight={["600px", "222px"]}
      />
      <div className="section h-section">
        <div className="container">
          <h3 className="is-size-3 is-size-5-mobile has-text-centered has-margin-bottom-30 has-margin-bottom-15-mobile">
            {heading}
          </h3>
          <div className="case-container">
            <div className="columns is-multiline">
              {cases.map((o, i) => (
                <div
                  className="column is-one-thirds-desktop is-half-tablet-only"
                  key={i}
                >
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
  images: PropTypes.array,
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

const Case = ({
  data,
  pageContext: {
    intl: { language }
  }
}) => {
  const { frontmatter } = data.markdownRemark;
  const [zh, en] = frontmatter.version;
  return (
    <Layout>
      <CaseTemplate
        images={frontmatter.images}
        heading={{ zh, en }[language].heading}
        cases={{ zh, en }[language].cases}
      />
    </Layout>
  );
};

Case.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.object
  })
};

export default Case;

export const casesQuery = graphql`
  query Case($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        images {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        version {
          heading
          cases {
            image1 {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
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
  }
`;
