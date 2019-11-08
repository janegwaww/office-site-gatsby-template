import React, {useState} from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import Layout from "../components/Layout";
import JobCard from "../components/JobCard";
import BackgroundImageSwitch from "../components/BackgroundImageSwitch";
import searchImg from "../img/search.png";

const JoinInput = ({filter}) => {
  const [search, setSearch] = useState({});
  const handleChange = e => {
    e.preventDefault();
    setSearch({...search, [e.target.name]: e.target.value});
    filter({...search, [e.target.name]: e.target.value});
  };
  const handleSubmit = e => {
    e.preventDefault();
    filter(search);
  };
  return (
    <form name="search" onSubmit={handleSubmit}>
      <div className="columns is-mobile">
        <div className="column is-4">
          <div className="control is-expanded has-icons-right">
            <div className="select h-select is-fullwidth">
              <select
                defaultValue={{value: 0}}
                className="is-size-7-mobile"
                name="address"
                onChange={handleChange}
              >
                <option>搜索地点</option>
                <option>深圳</option>
              </select>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="control is-expanded has-icons-right">
            <div className="select h-select is-fullwidth">
              <select
                defaultValue={{value: 0}}
                className="is-size-7-mobile"
                name="position"
                onChange={handleChange}
              >
                <option style={{color: "#BBBBBB"}}>搜索岗位</option>
                <option>开发部</option>
                <option>算法部</option>
                <option>市场部</option>
              </select>
            </div>
          </div>
        </div>
        <div className="search-input column is-4">
          <div className="control is-expanded has-icons-right">
            <input
              name="job"
              className="input h-input is-size-7-mobile"
              type="text"
              placeholder="搜索职位"
              onChange={handleChange}
            />
            <span className="icon is-small is-right" onClick={handleSubmit}>
              <i className="image is-20x20 is-13x13-mobile">
                <img src={searchImg} width="20" height="20" />
              </i>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};

const JoinTemplate = ({images, jobList = []}) => {
  const [jobfilter, setJobfilter] = useState(jobList);
  const jobFilterEvent = e => {
    setJobfilter(
      jobList.filter(i => {
        return (
          (i.date.replace(/\s/g, "").split("|")[1] === e.position ||
            e.position === "搜索岗位") &&
          (i.heading.includes(e.job) || !e.job)
        );
      }),
    );
  };
  return (
    <div className="join">
      <BackgroundImageSwitch images={images} switchHeight={["450px", "160px"]}>
        <div className="has-text-centered">
          <h2 className="has-text-white is-size-3 is-size-5-5-mobile">
            Power Humanity with AI
          </h2>
        </div>
      </BackgroundImageSwitch>
      <div className="join-input section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10 is-paddingless-mobile">
              <JoinInput filter={jobFilterEvent} />
            </div>
          </div>
        </div>
      </div>
      <div className="join-jobs section has-background-white-ter">
        <div className="container has-text-left">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns is-multiline is-variable is-3">
                  {jobfilter.map((o, i) => (
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
  images: PropTypes.array,
  jobList: PropTypes.array,
};

const Join = ({data}) => {
  const {frontmatter} = data.markdownRemark;
  return (
    <Layout>
      <JoinTemplate images={frontmatter.images} jobList={frontmatter.newJobs} />
    </Layout>
  );
};

Join.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.object,
  }),
};

export default Join;

export const joinQuery = graphql`
  query Join($id: String!) {
    markdownRemark(id: {eq: $id}) {
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
        newJobs {
          heading
          date
          description
        }
      }
    }
  }
`;
