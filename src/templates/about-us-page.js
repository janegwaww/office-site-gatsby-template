import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import AboutFeatures from "../components/AboutFeatures";
// import banner from "../img/aboutus1-mobile.png";

const AboutUsTemplate = ({ image, intro, creaters }) => {
  const [isMobile, setIsMobile] = useState(false);
  const companyIntro = intro.description.split(/\s{2}|\\/);
  const headStyle = (width = 280) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: `${width}px`,
    height: "30px",
    margin: "auto",
    boxShadow: isMobile
      ? "unset"
      : "rgba(12,102,255,1) 0.3rem 0px 0px, rgba(12,102,255,1) -0.3rem 0px 0px"
  });
  const companyPara = para => {
    const pstyle = {
      lineHeight: isMobile ? "20px" : "26px",
      letterSpacing: isMobile ? "0.04em" : "0.1em",
      padding: "1em 0em"
    };
    return para.map((o, i) => (
      <p className="has-text-dark is-size-7-mobile" style={pstyle} key={i}>
        {o}
      </p>
    ));
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="about-us">
      <div
        className="full-width-image margin-top-0"
        style={{
          height: isMobile ? "160px" : "500px",
          backgroundImage: `url(${
            !!image ? image.childImageSharp.fluid.src : image
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="about-us-content section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div style={headStyle(540)}>
                <h3 className="about-us-content-head has-text-black is-size-3 has-text-centered is-size-5-5-mobile">
                  {intro.heading}
                </h3>
              </div>
              <br className="is-hidden-mobile" />
              {companyPara(companyIntro)}
            </div>
          </div>
          <AboutFeatures features={intro.blurbs} />
        </div>
      </div>
      <div
        className="section"
        style={{ backgroundColor: "rgba(249,251,253,1)", display: "none" }}
      >
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1 has-text-centered">
              <div style={headStyle(200)}>
                <h3 className="is-size-2 is-size-3-mobile">
                  {creaters.heading}
                </h3>
              </div>
              <br />
              <br />
              <PreviewCompatibleImage imageInfo={creaters.image1} />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutUsTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
    description: PropTypes.string,
    heading: PropTypes.string
  }),
  creaters: PropTypes.shape({
    heading: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  })
};

const AboutUs = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutUsTemplate
        image={frontmatter.image}
        intro={frontmatter.main}
        creaters={frontmatter.creaters}
      />
    </Layout>
  );
};

export default AboutUs;

export const aboutUsQuery = graphql`
  query AboutUs($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        description
        main {
          heading
          description
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
            heading
            text
          }
        }
        creaters {
          heading
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        timeline {
          heading
        }
      }
    }
  }
`;
