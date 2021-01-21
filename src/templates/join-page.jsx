import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import JobCard from "../components/JobCard";
import JoinInput from "../components/JoinInput";
import BackgroundImageSwitch from "../components/BackgroundImageSwitch";

const JoinTemplate = ({ images, jobList, filterJobs }) => {
  const [jobfilter, setJobfilter] = useState(jobList);
  const jobFilterEvent = (e) => {
    const objConcate = (a, c) => {
      const [address, position] = c.date.replace(/\s/g, "").split("|");
      return a.concat([
        Object.assign({ address, position, job: c.heading }, c)
      ]);
    };
    const jobListMap = jobList.reduce(objConcate, []);
    const filterMethod = ([key, value] = ["", ""]) => (o) => o[key] === value;
    setJobfilter(jobListMap.filter(filterMethod(Object.entries(e)[0])));
  };

  return (
    <div className="join">
      <BackgroundImageSwitch images={images} switchHeight={["450px", "300px"]}>
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
              <JoinInput filter={jobFilterEvent} selectOptions={filterJobs} />
            </div>
          </div>
        </div>
      </div>
      <div className="join-jobs section">
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
  filterJobs: PropTypes.object
};

const Join = ({
  data,
  pageContext: {
    intl: { language }
  }
}) => {
  const { frontmatter } = data.markdownRemark;
  const [zh, en] = frontmatter.version;
  return (
    <Layout>
      <JoinTemplate
        images={frontmatter.images}
        jobList={{ zh, en }[language].newJobs}
        filterJobs={{ zh, en }[language].filterJobs}
      />
    </Layout>
  );
};

Join.propTypes = {
  data: PropTypes.shape({
    frontmatter: PropTypes.object
  })
};

export default Join;

export const joinQuery = graphql`
  query Join($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        version {
          locale
          newJobs {
            heading
            date
            description
          }
          filterJobs {
            address {
              index
              value
            }
            position {
              index
              value
            }
          }
        }
      }
    }
  }
`;
