import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import BusinessIcon from "../components/BusinessIcon";
import ContactUs from "../components/ContactUs";
import CoreTechList from "../components/CoreTechList";
import SolutionSlides from "../components/SolutionSlides";
import DoublePanelLayer from "../components/DoublePanelLayer";

export function IndexPageTemplate({
  coretech,
  solution,
  business,
  compet,
  language
}) {
  return (
    <div className="home">
      <Banner />
      <div className="home-banner-bottom-crossbar" />
      <section className="section section--gradient is-paddingless-mobile">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <CoreTechList items={coretech} />
            </div>
          </div>
        </div>
      </section>
      <section className="section section--gradient is-paddingless-mobile">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <SolutionSlides tabs={solution} />
            </div>
          </div>
        </div>
      </section>
      <DoublePanelLayer
        title="竞争优势"
        subtitle="COMPETITIVE EDGE"
        items={compet}
      />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <BusinessIcon iconItems={business} />
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  );
}

IndexPageTemplate.propTypes = {
  header: PropTypes.object,
  coretech: PropTypes.array,
  solution: PropTypes.array,
  business: PropTypes.array,
  compet: PropTypes.array
};

const IndexPage = ({
  data,
  pageContext: {
    intl: { language }
  }
}) => {
  const { frontmatter } = data.markdownRemark;
  const [zh, en] = frontmatter.version;
  const content = { zh, en }[language];
  return (
    <Layout>
      <IndexPageTemplate
        coretech={content.coretech}
        solution={content.solution}
        business={frontmatter.business}
        compet={content.compet}
        language={language}
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
        business {
          alt
          type
          image {
            childImageSharp {
              fluid(maxWidth: 480, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        version {
          coretech {
            title
            context
            href
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          solution {
            title
            subtitle
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          compet {
            title
            context
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
