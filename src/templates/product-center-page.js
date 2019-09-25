import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import ProductTitle from "../components/ProductTitle";
import ProductAdvantages from "../components/ProductAdvantages";
import ProductTabCard from "../components/ProductTabCard";
import ProductHoner from "../components/ProductHoner";

const tabItems = [
  { index: "features", name: "产品功能", className: "is-active" },
  { index: "advantages", name: "产品优势", className: "" },
  { index: "structure", name: "解决方案架构", className: "" },
  { index: "multiple", name: "多项架构图", className: "" },
  { index: "scenario", name: "应用场景", className: "" },
  { index: "practice", name: "内部实践", className: "" },
  { index: "honor", name: "荣誉与成就", className: "" },
  { index: "step", name: "使用步骤", className: "" }
];

const ProductCenterTemplate = ({
  image,
  methods,
  advantages,
  structure,
  solutions,
  scenario,
  honer
}) => {
  const [tabs, setTabs] = useState(tabItems);
  const tabSelect = tab => {
    setTabs(
      tabs.map(o =>
        o.index === tab
          ? { ...o, className: "is-active" }
          : { ...o, className: "" }
      )
    );
  };
  return (
    <div className="product-center">
      <div
        className="full-width-image margin-top-0"
        style={{
          height: "580px",
          backgroundImage: `url(${
            !!image ? image.childImageSharp.fluid.src : image
          })`,
          backgroundSize: `cover`
        }}
      >
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <ProductTitle />
          </div>
        </div>
      </div>
      <section className="has-background-black">
        <div className="tabs is-centered">
          <ul>
            {tabs.map((o, i) => (
              <li className={o.className} key={i}>
                <a href={`#${o.index}`} onClick={() => tabSelect(o.index)}>
                  {o.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="features" className="section has-background-grey-lighter">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h3 className="has-text-centered">{methods.heading}</h3>
                <br />
                <ProductTabCard cardInfo={methods.blurbs} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="advantages" className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <ProductAdvantages advInfo={advantages} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="structure" className="section has-background-grey-lighter">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h3 className="has-text-centered">{structure.heading}</h3>
                <br />
                <div
                  className="container has-background-white"
                  style={{
                    boxShadow: "0px 2px 10px 2px rgba(0,0,0,0.15)",
                    padding: "1.5rem 1.5rem"
                  }}
                >
                  <PreviewCompatibleImage imageInfo={structure} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="solution" className="section has-background-white">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h3 className="has-text-centered">{solutions.heading}</h3>
                <br />
                <ProductTabCard cardInfo={solutions.blurbs} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="scenario" className="section has-background-grey-lighter">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h3 className="has-text-centered">{scenario.heading}</h3>
                <br />
                <ProductTabCard cardInfo={scenario.blurbs} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="honor" className="section has-background-white">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h3 className="has-text-centered">{honer.heading}</h3>
                <br />
                <ProductHoner honerInfo={honer.image1} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ProductCenterTemplate.propTypes = {
  image: PropTypes.object,
  methods: PropTypes.object,
  advantages: PropTypes.object,
  structure: PropTypes.object,
  solutions: PropTypes.object,
  scenario: PropTypes.object,
  honer: PropTypes.object
};

const ProductCenter = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <ProductCenterTemplate
        image={frontmatter.image}
        methods={frontmatter.methods}
        advantages={frontmatter.advantages}
        structure={frontmatter.structure}
        solutions={frontmatter.solutions}
        scenario={frontmatter.scenario}
        honer={frontmatter.honer}
      />
    </Layout>
  );
};

ProductCenter.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.object
  })
};

export default ProductCenter;

export const productCenterQuery = graphql`
  query ProductCenter {
    markdownRemark(
      frontmatter: { templateKey: { eq: "product-center-page" } }
    ) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        methods {
          heading
          blurbs {
            heading
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description {
              heading
              description
            }
          }
        }
        advantages {
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
        structure {
          heading
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        solutions {
          heading
          blurbs {
            heading
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
            title
            explanation
            description {
              heading
              description
            }
          }
        }
        scenario {
          heading
          blurbs {
            heading
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
            title
            explanation
            description {
              heading
              description
            }
          }
        }
        honer {
          heading
          image1 {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
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
