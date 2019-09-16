import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProductTitle from "../components/ProductTitle";
import ProductAdvantages from "../components/ProductAdvantages";
import ProductTabCard from "../components/ProductTabCard";
import ProductHoner from "../components/ProductHoner";

const tabItems = [
  { index: "0", name: "产品功能", className: "is-active" },
  { index: "1", name: "产品优势", className: "" },
  { index: "2", name: "解决方案架构", className: "" },
  { index: "3", name: "多项架构图", className: "" },
  { index: "4", name: "应用场景", className: "" },
  { index: "5", name: "内部实践", className: "" },
  { index: "6", name: "荣誉与成就", className: "" },
  { index: "7", name: "使用步骤", className: "" }
];

const ProductCenterTemplate = ({ itemInfo }) => {
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
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          height: "580px",
          backgroundImage: `url(${"./img/product-center.png"})`,
          backgroundSize: `cover`
        }}
      >
        <ProductTitle />
      </div>
      <section style={{ backgroundColor: "black" }}>
        <div className="tabs is-centered ">
          <ul>
            {tabs.map((o, i) => (
              <li className={o.className} key={i}>
                <a onClick={() => tabSelect(o.index)} className="">
                  {o.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h3 className="has-text-centered">产品功能</h3>
                <br />
                <ProductTabCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <ProductAdvantages />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h3 className="has-text-centered">方案架构</h3>
                <br />
                <ProductTabCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h3 className="has-text-centered">解决方案</h3>
                <br />
                <ProductTabCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h3 className="has-text-centered">应用场景</h3>
                <br />
                <ProductTabCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h3 className="has-text-centered">荣誉与成就</h3>
                <br />
                <ProductHoner />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductCenter = () => (
  <Layout>
    <ProductCenterTemplate />
  </Layout>
);

ProductCenter.propTypes = {
  itemInfo: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
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
      }
    }
  }
`;
