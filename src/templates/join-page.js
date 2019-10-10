import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import JobCard from "../components/JobCard";

const JoinTemplate = ({ image, jobList = [] }) => {
  return (
    <div className="join">
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image ? image.childImageSharp.fluid.src : image
          })`,
          backgroundSize: "cover"
        }}
      />
      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10 is-paddingless-mobile">
              <div className="field is-grouped is-horizontal">
                <div className="control is-expanded has-icons-right">
                  <div className="select haetek-select is-fullwidth">
                    <select
                      defaultValue={{ value: 0 }}
                      className="is-size-6-5-mobile"
                    >
                      <option>搜索地点</option>
                      <option>深圳</option>
                    </select>
                  </div>
                </div>
                <div className="control is-expanded has-icons-right">
                  <div className="select haetek-select is-fullwidth">
                    <select
                      defaultValue={{ value: 0 }}
                      className="is-size-6-5-mobile"
                    >
                      <option style={{ color: "#BBBBBB" }}>搜索岗位</option>
                      <option>开发部</option>
                      <option>算法部</option>
                      <option>市场部</option>
                    </select>
                  </div>
                </div>
                <div className="control is-expanded has-icons-right">
                  <input
                    className="input h-input is-size-6-5-mobile"
                    type="text"
                    placeholder="搜索职位"
                  />
                  <span className="icon is-small is-right">
                    <i className="image is-20x20 is-13x13-mobile">
                      <img src="/img/search.png" width="20" height="20" />
                    </i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section has-background-white-ter">
        <div className="container has-text-left">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns is-multiline is-variable is-3">
                  {jobList.map((o, i) => (
                    <div className="column is-half" key={i}>
                      <JobCard info={o} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

JoinTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  jobList: PropTypes.array
};

const Join = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <JoinTemplate
        image={frontmatter.image}
        jobList={frontmatter.newJobs.blurbs}
      />
    </Layout>
  );
};

export default Join;

export const joinQuery = graphql`
  query Join($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        filterJobs {
          heading
          blurbs {
            item
            subItems
          }
        }
        newJobs {
          heading
          blurbs {
            heading
            date
            description
          }
        }
      }
    }
  }
`;
