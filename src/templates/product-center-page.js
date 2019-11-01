import React, {Component} from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import ProductTitle from "../components/ProductTitle";
import ProductMethodTitle from "../components/ProductMethodTitle";
import ProductAdvantageTable from "../components/ProductAdvantageTable";

const SeekerTabContent = ({method, advantage, imageInfo = {}}) => {
  const {image} = imageInfo;
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
      <section>
        <div
          style={{
            height: "698px",
            backgroundImage: `url(${
              !!image ? image.childImageSharp.fluid.src : image
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </section>
    </div>
  );
};

const InfoPlusTabContent = ({method, advantage, imageInfo}) => {
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
      <section className="section has-background-grey-1">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="is-size-2-5 has-text-centered has-margin-bottom-40">
                方案架构
              </div>
              <PreviewCompatibleImage
                imageInfo={{...imageInfo, style: {borderRadius: "unset"}}}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const HDPPTabContent = ({method, datapool}) => (
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
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="is-size-2-5 has-text-centered has-margin-bottom-40">
              数据池
            </div>
            <div className="columns is-multiline">
              {datapool.map((o, i) => (
                <div className="column is-4" key={i}>
                  <figure className="image is-48x48 margin-auto">
                    <PreviewCompatibleImage imageInfo={o} />
                  </figure>
                  <div
                    className="is-size-6 has-text-centered has-text-333"
                    style={{lineHeight: "21px", padding: "20px"}}
                  >
                    {o.head}
                  </div>
                  <div
                    className="is-size-6-5 has-text-666"
                    style={{lineHeight: "26px"}}
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

class ProductCenterTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: {},
      tabs: this.props.tabs.map(i =>
        i.index === "seeker" ? {...i, className: "is-active"} : i,
      ),
    };
  }

  componentDidMount() {
    this.setState({activeTab: {seeker: "is-active"}});
  }

  handleTab = index => {
    const {tabs} = this.state;
    this.setState({
      activeTab: {[index]: "is-active"},
      tabs: tabs.map(i =>
        i.index === index
          ? {...i, className: "is-active"}
          : {...i, className: ""},
      ),
    });
  };

  render() {
    const {image, header, methods, advantages, banner, datapool} = this.props;
    const {activeTab, tabs} = this.state;
    return (
      <div className="product-center">
        <div
          className="full-width-image margin-top-0"
          style={{
            height: "580px",
            backgroundImage: `url(${
              !!image ? image.childImageSharp.fluid.src : image
            })`,
            backgroundSize: `cover`,
          }}
        >
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <ProductTitle info={header} />
            </div>
          </div>
        </div>
        {/* tabs */}
        <section className="has-background-black">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="tabs-header">
                  <div className="tabs is-left">
                    <ul>
                      {tabs.map((o, i) => (
                        <li
                          key={i}
                          onClick={() => this.handleTab(o.index)}
                          className={o.className}
                        >
                          <a>{o.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
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
              imageInfo={banner[0]}
            />
          </div>
          <div className={`tab-content ${activeTab.infoplus}`}>
            <InfoPlusTabContent
              method={methods[1]}
              advantage={advantages[1]}
              imageInfo={banner[1]}
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
  image: PropTypes.object,
  header: PropTypes.object,
  tabs: PropTypes.array,
  methods: PropTypes.array,
  advantages: PropTypes.array,
  banner: PropTypes.array,
  datapool: PropTypes.array,
};

const ProductCenter = ({data}) => {
  const {frontmatter} = data.markdownRemark;
  return (
    <Layout>
      <ProductCenterTemplate
        image={frontmatter.image}
        header={frontmatter.header}
        tabs={frontmatter.tabs}
        methods={frontmatter.methods}
        advantages={frontmatter.advantages}
        banner={frontmatter.productbanner}
        datapool={frontmatter.datapool}
      />
    </Layout>
  );
};

ProductCenter.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.object,
  }),
};

export default ProductCenter;

export const productCenterQuery = graphql`
  query ProductCenter {
    markdownRemark(frontmatter: {templateKey: {eq: "product-center-page"}}) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        header {
          heading
          description
        }
        tabs {
          name
          index
        }
        methods {
          heading
          image {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
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
        productbanner {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        datapool {
          image {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
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
`;
