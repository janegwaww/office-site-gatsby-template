import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const AboutUsTemplate = ({ image, intro, creaters }) => {
  const createrImage = creaters.image1;

  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `center top`,
          backgroundAttachment: `fixed`,
          backgroundColor: `lightgray`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto"
        }}
      />
      <div className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1 ">
                <h3 className="has-text-black is-size-3 has-text-centered">
                  {intro.heading}
                </h3>
                <p
                  style={{
                    lineHeight: "26px",
                    letterSpacing: "1px",
                    padding: ".2em .1em"
                  }}
                >
                  {intro.description}
                </p>
                <div style={{ height: "50px" }}></div>
                <div className="columns is-multiline">
                  {intro.blurbs.map((o, i) => (
                    <div className="column is-4 has-text-centered" key={i}>
                      <div style={{ width: "156px", height: "156px" }}>
                        <PreviewCompatibleImage imageInfo={o} />
                      </div>

                      <p className="has-text-weight-bold">{o.heading}</p>
                      <p>{o.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="section"
        style={{ backgroundColor: "rgba(249,251,253,1)" }}
      >
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1 has-text-centered">
              <h3 className="has-text-weight-bold is-size-4">
                {creaters.heading}
              </h3>
              <PreviewCompatibleImage
                imageInfo={{
                  image: !!createrImage.image
                    ? createrImage.image.childImageSharp.fluid.src
                    : createrImage.image,
                  alt: createrImage.alt
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = ({ data }) => {
  console.log(data);
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

AboutUs.propTypes = {
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
