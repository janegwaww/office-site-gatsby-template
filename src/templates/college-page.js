import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const BackgroundInfo = ({ heading = "", bakPara = [] }) => (
  <div className="columns">
    <div className="column is-10 is-offset-1 has-text-centered">
      <h3 className=" is-size-2 has-text-weight-bold">{heading}</h3>
      <br />
      <div className="is-size-6">
        {bakPara.map((o, i) => (
          <p key={i}>{o}</p>
        ))}
      </div>
    </div>
  </div>
);

const Direction = ({ heading = "", dir = [] }) => (
  <div className="columns">
    <div className="column is-10 is-offset-1 has-text-centered">
      <h3 className=" is-size-2 has-text-weight-bold">{heading}</h3>
      <br />
      <br />
      <div className="columns is-multiline">
        {dir.map((o, i) => (
          <div className="column is-half" key={i}>
            <div className="columns">
              <div
                className="column is-5"
                style={{ width: "120px", height: "120px" }}
              >
                <PreviewCompatibleImage imageInfo={o} />
              </div>
              <div className="column is-7 has-text-left">
                <p className="is-size-6">{o.heading}</p>
                <br />
                {o.description.split(":").map((o, i) => (
                  <p className="is-size-7" key={i}>
                    {o}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CollegeTemplate = ({ image, background, direction }) => {
  const bakPara = background.description.split(/\s{2}|\\/);
  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          height: "580px",
          backgroundImage: `url(${
            !!image ? image.childImageSharp.fluid.src : image
          })`,
          backgroundSize: "cover"
        }}
      />
      <div className="section section--gradient has-background-white-ter">
        <div className="container">
          <div className="section">
            <BackgroundInfo heading={background.heading} bakPara={bakPara} />
          </div>
        </div>
      </div>
      <div className="section section--gradient">
        <div className="container">
          <div className="section">
            <Direction heading={direction.heading} dir={direction.blurbs} />
          </div>
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
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
            heading
            description
          }
        }
      }
    }
  }
`;
