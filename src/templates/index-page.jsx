import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import SeekerTabs from "../components/SeekerTabs";
import BusinessIcon from "../components/BusinessIcon";
import SolutionTabs from "../components/SolutionTabs";
import ContactUs from "../components/ContactUs";
import CompetitiveAdvantages from "../components/CompetitiveAdvantages";

export function IndexPageTemplate({
  header,
  features,
  solution,
  business,
  rate,
  language
}) {
  return (
    <div className="home">
      <Banner info={header} />
      <section className="section section--gradient is-paddingless-mobile">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <SeekerTabs scrollItems={features} language={language} />
            </div>
          </div>
        </div>
      </section>
      <section className="section section--gradient has-background-white-ter is-paddingless-mobile">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <SolutionTabs solutionItems={solution} language={language} />
            </div>
          </div>
        </div>
      </section>
      <CompetitiveAdvantages />
      <section className="business-icon-section section section--gradient">
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
  features: PropTypes.array,
  solution: PropTypes.shape({
    heading: PropTypes.string,
    blurbs: PropTypes.array
  }),
  business: PropTypes.array,
  rate: PropTypes.array
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
        header={content.header}
        features={content.features.blurbs}
        solution={content.solution}
        business={frontmatter.business.blurbs}
        rate={content.rate.blurbs}
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
        version {
          header {
            heading
            description
          }
          features {
            blurbs {
              image {
                childImageSharp {
                  fluid(maxWidth: 1000, quality: 100) {
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
              image1 {
                childImageSharp {
                  fluid(maxWidth: 1024, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              image2 {
                childImageSharp {
                  fluid(maxWidth: 1024, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              image3 {
                childImageSharp {
                  fluid(maxWidth: 1024, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
              description
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
  }
`;
