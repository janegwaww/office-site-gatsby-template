import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import StudyDirection from "../components/StudyDirection";

const BackgroundInfo = ({ heading = "", bakPara = [] }) => (
  <div className="college-back-info columns is-centered">
    <div className="column is-11 has-text-centered">
      <h3 className="college-back-info-head is-size-3 is-size-5-mobile">
        {heading}
      </h3>
      <br />
      <div className="is-size-6 is-size-7-mobile has-text-left-mobile">
        {bakPara.map((o, i) => (
          <p key={i}>{o}</p>
        ))}
      </div>
    </div>
  </div>
);

const CollegeTemplate = ({ image, background, direction }) => {
  const bakPara = background.description.split(/\s{2}|\\/);
  const [backImage, setBackImage] = useState(
    `${!!image ? image.childImageSharp.fluid.src : image}`
  );
  const [height, setHeight] = useState("600px");
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setBackImage("../img/college-mobile.png");
      setHeight("180px");
    }
  }, []);
  return (
    <div className="college">
      <div
        className="full-width-image margin-top-0"
        style={{
          height: height,
          backgroundImage: `url(${backImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="has-text-centered" style={{ lineHeight: 3 }}>
          <h2 className="has-text-white is-size-3 is-size-6-mobile">
            黑顿研究院
          </h2>
          <div style={{ lineHeight: 1.2, fontSize: "50px" }}>
            <h1 className="has-text-white is-size-6-mobile">
              HAETEK Institute of Machine Intelligence,
            </h1>
            <h1 className="has-text-white is-size-6-mobile">
              Shenzhen, China.
            </h1>
          </div>
        </div>
      </div>
      <div className="college-back section section--gradient has-background-white-ter">
        <div className="container">
          <div className="section is-paddingless">
            <BackgroundInfo heading={background.heading} bakPara={bakPara} />
          </div>
        </div>
      </div>
      <div className="college-study-section section section--gradient">
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
