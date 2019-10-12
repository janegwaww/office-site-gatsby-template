import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import StudyDirection from "../components/StudyDirection";

const BackgroundInfo = ({ heading = "", bakPara = [] }) => (
  <div className="columns is-centered">
    <div className="column is-11 has-text-centered">
      <div className="content">
        <h3 className=" is-size-3 is-size-5-mobile">{heading}</h3>
      </div>
      <div className="is-size-6 is-size-7-mobile">
        {bakPara.map((o, i) => (
          <p key={i}>{o}</p>
        ))}
      </div>
    </div>
  </div>
);

const CollegeTemplate = ({ image, background, direction, isMobile }) => {
  const bakPara = background.description.split(/\s{2}|\\/);
  const [backImage, setBackImage] = useState(
    `${!!image ? image.childImageSharp.fluid.src : image}`
  );
  useEffect(() => {});
  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${backImage})`,
          backgroundSize: "100% 100%"
        }}
      >
        <div className="has-text-centered" style={{ lineHeight: 3 }}>
          <h2 className="has-text-white is-size-3 is-size-5-5-mobile">
            黑顿研究院
          </h2>
          <div style={{ lineHeight: 1.2, fontSize: "50px" }}>
            <h1 className="has-text-white is-size-4-5-mobile">
              HAETEK Institute of Machine Intelligence,
            </h1>
            <h1 className="has-text-white is-size-4-5-mobile">
              Shenzhen, China.
            </h1>
          </div>
        </div>
      </div>
      <div className="section section--gradient has-background-white-ter">
        <div className="container">
          <div className="section is-paddingless-mobile">
            <BackgroundInfo heading={background.heading} bakPara={bakPara} />
          </div>
        </div>
      </div>
      <div className="section section--gradient">
        <div className="container" style={{}}>
          <StudyDirection dirInfo={direction} />
        </div>
      </div>
    </div>
  );
};

CollegeTemplate.propTypes = {
  image: PropTypes.object,
  background: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  }),
  direction: PropTypes.shape({
    heading: PropTypes.string,
    blurbs: PropTypes.array
  })
};

const College = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <CollegeTemplate
        image={frontmatter.image}
        background={frontmatter.background}
        direction={frontmatter.direction}
      />
    </Layout>
  );
};

export default College;

export const collegeQuery = graphql`
  query College($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        background {
          heading
          description
        }
        direction {
          heading
          blurbs {
            image1 {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
            heading
            article {
              heading
              label
              link
              content
            }
          }
        }
      }
    }
  }
`;
