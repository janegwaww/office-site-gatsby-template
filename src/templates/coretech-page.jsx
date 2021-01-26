import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import DoublePanelLayer from "../components/DoublePanelLayer";
import SectionTitle from "../components/SectionTitle";
import Banner from "../components/CoreTech/Banner";
import Scenarios from "../components/CoreTech/Scenarios";
import Cooperater from "../components/CoreTech/Cooperater";

class CoretechTemplate extends Component {
  render() {
    const {
      title,
      subtitle,
      description,
      image,
      intro = {},
      features,
      scena
    } = this.props;

    return (
      <div className="core-tech">
        <Banner image={image} intro={intro} />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <SectionTitle title={title} subtitle={subtitle} />
                <div className="has-margin-bottom-60 has-margin-bottom-30-mobile" />
                <p className="has-text-centered has-text-grey">{description}</p>
              </div>
            </div>
          </div>
        </section>
        <DoublePanelLayer
          title="应用特色"
          subtitle="Application features"
          items={features}
        />
        <Scenarios scen={scena} />
        <Cooperater />
      </div>
    );
  }
}

const CoreTech = ({
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
      <CoretechTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        image={frontmatter.image}
        description={content.description}
        intro={content.intro}
        features={content.features}
        scena={content.scena}
      />
    </Layout>
  );
};

CoreTech.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.object
  })
};

export default CoreTech;

export const coreTechQuery = graphql`
  query CoreTech($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        version {
          intro {
            title
            context
            image {
              childImageSharp {
                fluid(maxWidth: 1170, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          description
          features {
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
          scena {
            title
            image
            description
            advance
          }
        }
      }
    }
  }
`;
