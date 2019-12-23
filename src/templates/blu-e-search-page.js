import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import ProductTitle from "../components/ProductTitle";
import BackgroundImageSwitch from "../components/BackgroundImageSwitch";

const BluETemplate = ({
  header,
  images,
  productvalue,
  searchtemple,
  businessscene
}) => {
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
    </div>
  );
};

const BluESearch = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <BluETemplate
        header={frontmatter.header}
        images={frontmatter.images}
        productvalue={frontmatter.productvalue}
        searchtemple={frontmatter.searchtemple}
        businessscene={frontmatter.businessscene}
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
        header {
          heading
          description
        }
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
        searchtemple
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
`;
