import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { FormattedMessage } from "gatsby-plugin-intl";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import ProductTitle from "../components/ProductTitle";
import BackgroundImageSwitch from "../components/BackgroundImageSwitch";
import ProductTextArea from "../components/ProductTextArea";

const BluETemplate = ({
  header,
  images,
  productvalue,
  searchtemple,
  businessscene
}) => {
  const handleClick = e => {
    console.log(e);
  };
  return (
    <div className="blu-e-search">
      <BackgroundImageSwitch images={images} switchHeight={["580px", "222px"]}>
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-10 is-offset-1">
              <ProductTitle info={header} />
            </div>
          </div>
        </div>
      </BackgroundImageSwitch>
      <section className="section h-section has-background-gray-2">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="product-value">
                <div
                  className="is-size-2-5 is-size-5-mobile has-text-centered has-text-000 is-marginless-mobile"
                  style={{ marginBottom: "30px" }}
                >
                  <FormattedMessage id="bluesearch.productvalue" />
                </div>
                <div className="columns is-mobile">
                  {productvalue.map((o, i) => (
                    <div className="column is-4 has-text-centered" key={i}>
                      <div className="image is-60x60 is-centered">
                        <PreviewCompatibleImage imageInfo={o} />
                      </div>
                      <div className="is-size-5-5 has-text-000 is-size-6-5-mobile">
                        {o.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section h-section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="is-size-2-5 is-size-5-mobile has-text-centered has-margin-bottom-40 has-text-000 is-marginless-mobile">
                <FormattedMessage id="bluesearch.demo" />
              </div>
              <div>
                <ProductTextArea info={searchtemple} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section h-section has-background-gray-4">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="product-scene">
                <div className="is-size-2-5 is-size-5-mobile has-text-centered has-margin-bottom-40 has-text-000">
                  <FormattedMessage id="bluesearch.businessscene" />
                </div>
                <div className="columns is-multiline is-mobile">
                  {businessscene.map((o, i) => (
                    <div
                      className="column is-one-quarter-tablet is-half-mobile has-text-centered"
                      onClick={() => handleClick(o)}
                      key={i}
                    >
                      <div className="scene-card has-background-white">
                        <div className="image is-80x80 is-42x42-mobile">
                          <PreviewCompatibleImage imageInfo={o} />
                        </div>
                        <div className="is-size-5-5 has-text-333 is-size-6-5-mobile">
                          {o.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
BluETemplate.propTypes = {
  header: PropTypes.object,
  images: PropTypes.array,
  productvalue: PropTypes.array,
  searchtemple: PropTypes.array,
  businessscene: PropTypes.array
};

const BluESearch = ({
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
      <BluETemplate
        header={content.header}
        images={frontmatter.images}
        productvalue={content.productvalue}
        searchtemple={frontmatter.searchtemple}
        businessscene={content.businessscene}
      />
    </Layout>
  );
};

BluESearch.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.object
  })
};

export default BluESearch;

export const bluESearchQuery = graphql`
  query bluESearch {
    markdownRemark(frontmatter: { templateKey: { eq: "blu-e-search-page" } }) {
      frontmatter {
        images {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        searchtemple {
          description
          keywords
        }
        version {
          header {
            heading
            subheading
            description
            subdescription
          }
          productvalue {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          businessscene {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
      }
    }
  }
`;
