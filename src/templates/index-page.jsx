import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Banner from "../components/Banner";
import Layout from "../components/Layout";
import SeekerTabs from "../components/SeekerTabs";
import BusinessIcon from "../components/BusinessIcon";
import SolutionTabs from "../components/SolutionTabs";

const RatePanel = ({ rateItems = [] }) => {
  const Item = ({ info = {} }) => (
    <div className="rate-panel-item has-text-centered">
      <p className="is-size-3 has-text-white is-size-5-5-mobile">
        {info.description}
      </p>
      <div
        style={{
          width: "2rem",
          borderTop: "solid .2rem white",
          margin: "2px auto 0.8rem"
        }}
      />
      <p className="heading has-text-white is-size-6 is-size-7-mobile">
        {info.heading}
      </p>
    </div>
  );
  return (
    <div
      className="rate-panel level is-mobile is-paddingless-tablet"
      style={{ padding: "0rem 1rem" }}
    >
      <div className="level-left">
        <Item info={rateItems[0]} />
      </div>
      <div className="level-item">
        <Item info={rateItems[1]} />
      </div>
      <div className="level-right">
        <Item info={rateItems[2]} />
      </div>
    </div>
  );
};

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
      <section className="business-icon-section section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <BusinessIcon iconItems={business} />
            </div>
          </div>
        </div>
      </section>
      <section className="rate-panel-section section has-background-link is-paddingless-mobile">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1 is-paddingless-tablet">
              <RatePanel rateItems={rate} />
            </div>
          </div>
        </div>
      </section>
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
