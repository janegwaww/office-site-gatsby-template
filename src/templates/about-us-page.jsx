import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ContactUs from "../components/ContactUs";
import History from "../components/AboutUs/History";
import Address from "../components/AboutUs/Address";
import Banner from "../components/AboutUs/Banner";
import Introduction from "../components/AboutUs/Introduction";
import Vision from "../components/AboutUs/Vision";

const AboutUsTemplate = ({ image, intro }) => {
  return (
    <div className="about-us">
      <Banner image={image} intro={intro} />
      <Introduction intro={intro} />
      <Vision intro={intro} />
      <History />
      <div className="about-us-content section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Address />
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

AboutUsTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  intro: PropTypes.object
};

const AboutUs = ({
  data,
  pageContext: {
    intl: { language }
  }
}) => {
  const { frontmatter } = data.markdownRemark;
  const [zh, en] = frontmatter.version;
  return (
    <Layout>
      <AboutUsTemplate image={frontmatter.image} intro={{ zh, en }[language]} />
    </Layout>
  );
};

AboutUs.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.object
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
        version {
          heading
          descriptions
          subdescription {
            title
            content
          }
        }
      }
    }
  }
`;
