import React, { useState } from "react";
import PropTypes from "prop-types";
import { useIntl } from "gatsby-plugin-intl";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import SectionTitle from "./SectionTitle";
import Article from "./Article";

const StudyDirection = ({ dirInfo = [] }) => {
  const { formatMessage } = useIntl();
  const blurbs = [
    {
      image1: { image: "/img/college/study1.svg", alt: "dir" },
      image2: { image: "/img/college/study1-chosen.svg", alt: "dir" },
      heading: formatMessage({ id: "college.nnac" })
    },
    {
      image1: { image: "/img/college/study2.svg", alt: "dir" },
      image2: { image: "/img/college/study2-chosen.svg", alt: "dir" },
      heading: formatMessage({ id: "college.inforintel" })
    },
    {
      image1: { image: "/img/college/study3.svg", alt: "dir" },
      image2: { image: "/img/college/study3-chosen.svg", alt: "dir" },
      heading: formatMessage({ id: "college.infeengine" })
    }
  ];
  const _getTabs = (index) =>
    blurbs.map((o, i) => ({
      ...o,
      className: i === index ? "is-active" : ""
    }));
  const [tabs, setTabs] = useState(_getTabs(0));
  const [article, setArticle] = useState(dirInfo[0]);
  const tabSelect = (index) => {
    setTabs(_getTabs(index));
    setArticle(dirInfo[index]);
  };
  const tabIconShow = (o) => (i) => {
    const status = (n) => (k) =>
      [
        ["block", "none"],
        ["none", "block"]
      ][n][k];
    return {
      ...o[`image${i}`],
      ...{ style: { display: status(!o.className ? 0 : 1)(i - 1) } }
    };
  };

  return (
    <div className="columns study-direction">
      <div className="column is-10 is-offset-1 has-text-centered is-paddingless-mobile">
        <SectionTitle
          title={formatMessage({ id: "college.researchdirection" })}
          subtitle={"RESEARCH DIRECTION"}
        />
        <br className="is-hidden-tablet" />
        <div className="section is-small is-paddingless-mobile">
          <div className="tabs is-around">
            <ul>
              {tabs.map((o, i) => (
                <li
                  onClick={() => tabSelect(i)}
                  key={i}
                  className={`tabs-item ${o.className}`}
                  style={{ cursor: "pointer" }}
                >
                  <div>
                    <div
                      className="image is-80x80 is-48x48-mobile"
                      style={{ margin: "auto" }}
                    >
                      <PreviewCompatibleImage imageInfo={tabIconShow(o)(1)} />
                      <PreviewCompatibleImage imageInfo={tabIconShow(o)(2)} />
                    </div>
                    <br className="is-hidden-mobile" />
                    <a style={{ width: "7.5em" }} className="is-size-7-mobile">
                      {o.heading}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="section is-paddingless-mobile">
            <Article article={article} />
          </div>
        </div>
      </div>
    </div>
  );
};

StudyDirection.propTypes = {
  dirInfo: PropTypes.array
};

export default StudyDirection;
