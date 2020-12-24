import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { FormattedMessage } from "gatsby-plugin-intl";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import ProductTitle from "../components/ProductTitle";
import ProductMethodTitle from "../components/ProductMethodTitle";
import ProductAdvantageTable from "../components/ProductAdvantageTable";
import ProductSeekerBanner from "../components/ProductSeekerBanner";
import BackgroundImageSwitch from "../components/BackgroundImageSwitch";

const SeekerTabContent = ({ method, advantage, imageInfo = {} }) => {
  return (
    <div>
      <section className="section h-section has-background-grey-1">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <ProductMethodTitle method={method} />
            </div>
          </div>
        </div>
      </section>
      <section className="section h-section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <ProductAdvantageTable tableInfo={advantage} />
            </div>
          </div>
        </div>
      </section>
      <section className="seeker-banner">
        <ProductSeekerBanner bannerInfo={imageInfo} />
      </section>
    </div>
  );
};

const InfoPlusTabContent = ({ method, advantage, imageInfo }) => {
  return (
    <div>
      <section className="section h-section has-background-grey-1">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <ProductMethodTitle method={method} />
            </div>
          </div>
        </div>
      </section>
      <section className="section h-section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <ProductAdvantageTable tableInfo={advantage} />
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-grey-1 h-section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="is-size-2-5 is-size-5-mobile has-text-centered has-margin-bottom-40 has-margin-bottom-15-mobile">
                <FormattedMessage id="product.solutionarchitecture" />
              </div>
              <PreviewCompatibleImage
                imageInfo={{ ...imageInfo, style: { borderRadius: "unset" } }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const HDPPTabContent = ({ method, datapool }) => {
  return (
    <div>
      <section className="section h-section has-background-grey-1">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <ProductMethodTitle method={method} />
            </div>
          </div>
        </div>
      </section>
      <section className="section h-section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="is-size-2-5 is-size-5-mobile has-text-centered has-margin-bottom-30 has-margin-bottom-15-mobile">
                <FormattedMessage id="product.datapool" />
              </div>
              <div className="data-pool-cards columns is-multiline is-mobile">
                {datapool.map((o, i) => (
                  <div
                    className={`column is-one-thirds-tablet is-half-mobile`}
                    key={i}
                  >
                    <figure className="image is-48x48 is-42x42-mobile margin-auto">
                      <PreviewCompatibleImage
                        imageInfo={{ ...o, style: { borderRadius: "unset" } }}
                      />
                    </figure>
                    <div className="data-pool-cards-head is-size-6 is-size-6-mobile has-text-centered has-text-333">
                      {o.head}
                    </div>
                    <div
                      className="data-pool-cards-text is-size-6-5 has-text-666 is-size-7-mobile"
                      style={{ hyphens: "auto" }}
                    >
                      {o.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const TabTitle = ({ info, language }) => {
  return (
    <>
      <a className="is-size-6-5-mobile is-hidden-tablet">
        <p className="is-size-7-mobile">{info.subname}</p>
        {language === "zh" && <p>{info.name}</p>}
      </a>
      <a className="is-size-6 is-size-6-5-mobile is-hidden-mobile">{`${info.name}(${info.subname})`}</a>
    </>
  );
};

class ProductCenterTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: {},
      tabs: this.props.tabs.map(i =>
        i.index === "seeker" ? { ...i, className: "is-active" } : i
      )
    };
  }

  componentDidMount() {
    this.setState({ activeTab: { seeker: "is-active" } });
  }

  handleTab = index => {
    const { tabs } = this.state;
    this.setState({
      activeTab: { [index]: "is-active" },
      tabs: tabs.map(i =>
        i.index === index
          ? { ...i, className: "is-active" }
          : { ...i, className: "" }
      )
    });
  };

  render() {
    const {
      images,
      header,
      methods,
      advantages,
      banner,
      datapool,
      language
    } = this.props;
    const { activeTab, tabs } = this.state;
    return (
      <div className="product-center">
        <BackgroundImageSwitch
          images={images}
          switchHeight={["580px", "222px"]}
        >
          <div className="container">
            <div className="columns is-mobile">
              <div className={`column is-10 is-offset-1`}>
                <ProductTitle info={header} />
              </div>
            </div>
          </div>
        </BackgroundImageSwitch>
        {/* tabs */}
        <section className="has-background-black h-product-navbar">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="tabs is-left is-around-mobile">
                  <ul>
                    {tabs.map((o, i) => (
                      <li
                        key={i}
                        onClick={() => this.handleTab(o.index)}
                        className={o.className}
                      >
                        <TabTitle info={o} language={language} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* tabs content */}
        <div className="tabs-content">
          <div className={`tab-content ${activeTab.seeker}`}>
            <SeekerTabContent
              method={methods[0]}
              advantage={advantages[0]}
              imageInfo={banner.seeker}
            />
          </div>
          <div className={`tab-content ${activeTab.infoplus}`}>
            <InfoPlusTabContent
              method={methods[1]}
              advantage={advantages[1]}
              imageInfo={banner.infoplus}
            />
          </div>
          <div className={`tab-content ${activeTab.hdpp}`}>
            <HDPPTabContent method={methods[2]} datapool={datapool} />
          </div>
        </div>
      </div>
    );
  }
}

ProductCenterTemplate.propTypes = {
  images: PropTypes.array,
  header: PropTypes.object,
  tabs: PropTypes.array,
  methods: PropTypes.array,
  advantages: PropTypes.array,
  banner: PropTypes.object,
  datapool: PropTypes.array
};

const ProductCenter = ({
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
      <ProductCenterTemplate
        images={frontmatter.images}
        banner={frontmatter.productbanner}
        header={content.header}
        tabs={content.tabs}
        methods={content.methods}
        advantages={content.advantages}
        datapool={content.datapool}
        language={language}
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
        productbanner {
          seeker {
            image1 {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
            seekerslider {
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
          infoplus {
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
        version {
          header {
            heading
            subheading
            description
            subdescription
          }
          tabs {
            name
            subname
            index
          }
          methods {
            heading
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
            description
          }
          advantages {
            heading
            index
            description {
              th
              tr
              tc
            }
          }
          datapool {
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
            head
            content
          }
        }
      }
    }
  }
`;
