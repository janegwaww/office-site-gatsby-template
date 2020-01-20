import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";
import SearchInput from "../components/SearchInput";
import SearchResult from "../components/SearchResult";
import curcle from "../img/curcle.svg";

function ProductTextArea({ info = [] }) {
  const [content, setContent] = useState(info[0]);
  const [keyword, setKeyword] = useState(info[0].keywords[0]);
  const [issemantic, setIssemantic] = useState(true);
  const [related, setRelated] = useState([]);
  const [textIndex, setTextIndex] = useState(0);
  const [isUnediteble, setIsUnediteble] = useState(true);
  const searchInput = useRef(null);
  const { formatMessage } = useIntl();

  useEffect(() => {
    const handleQuery = async () => {
      if (!keyword) return alert(formatMessage({ id: "bluesearch.notempty" }));
      if (!content.description)
        return alert(formatMessage({ id: "bluesearch.textnotempty" }));
      // 加存在验证是因为searchInput没有加载完全会报current不存在错误
      searchInput.current && searchInput.current.isLoading(true);
      searchInput.current && searchInput.current.setActiveButton(keyword);
      try {
        const result = await fetchQuery({
          querystring: keyword,
          paragraph: content.description,
          issemantic: issemantic
        });
        if (result.err === 0) {
          setRelated(result.resultdata.slice(1));
        } else {
          alert(result.errmsg);
        }
      } catch (err) {
        alert(err);
      }
      searchInput.current && searchInput.current.isLoading(false);
    };
    handleQuery();
  }, [keyword, issemantic]);

  const handleSearch = value => {
    const zh_regexp = /^[\u4e00-\u9fa5]+$/;
    if (zh_regexp.test(value)) {
      return setKeyword(value);
    }
    alert(formatMessage({ id: "bluesearch.chinainput" }));
  };
  const changeContent = () => {
    setContent(info[textIndex]);
    setKeyword(info[textIndex].keywords[0]);
    setTextIndex(textIndex + 1);
    textIndex >= info.length - 1 && setTextIndex(0);
  };
  const defineContent = () => {
    setIsUnediteble(!isUnediteble);
    if (isUnediteble) {
      setContent({ description: content.description, keywords: [] });
      setRelated([]);
    }
  };

  return (
    <div className="product-textarea">
      <div className="buttons">
        <div className="refresh-button" onClick={changeContent}>
          <span className="icon">
            <img src={curcle} alt="curcle" width="20" height="20" />
          </span>
          <span className="is-size-6 has-text-666">
            <FormattedMessage id="bluesearch.anotherexample" />
          </span>
        </div>
        <button
          className="button is-light is-size-6-5 has-text-999 has-background-gray-2"
          onClick={defineContent}
        >
          {isUnediteble ? (
            <FormattedMessage id="bluesearch.customtext" />
          ) : (
            <FormattedMessage id="bluesearch.canceledit" />
          )}
        </button>
      </div>
      <div className="h-table-container">
        <div className="h-table is-bordered is-fullwidth">
          <div className="tr thead">
            <div className="td">
              <FormattedMessage id="bluesearch.sampletext" />
            </div>
            <div className="td">
              <FormattedMessage id="bluesearch.searchfrom" />
            </div>
            <div className="td">
              <FormattedMessage id="bluesearch.miningresults" />
            </div>
          </div>
          <div className="tr tbody">
            <div className="td">
              <textarea
                className="textarea"
                placeholder={formatMessage({ id: "bluesearch.pleaseinput" })}
                onChange={e =>
                  setContent({ ...content, ...{ description: e.target.value } })
                }
                rows="25"
                cols="32"
                value={content.description}
                onFocus={event => event.target.select()}
                disabled={isUnediteble}
              ></textarea>
            </div>
            <div className="td">
              <SearchInput
                ref={searchInput}
                handleSearch={handleSearch}
                searchKeywords={content.keywords}
              />
            </div>
            <div className="td">
              <SearchResult
                text={content.description}
                result={related}
                checkHandler={e => setIssemantic(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductTextArea.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      keywords: PropTypes.array
    })
  )
};

export default ProductTextArea;

async function fetchQuery(
  param = {
    querystring: "",
    paragraph: "",
    issemantic: false
  }
) {
  const data = {
    dbmodelname: "blue",
    modelaction: "search",
    extradata: {
      querystring: "",
      paragraph: "",
      lang: "ch",
      issemantic: false,
      isjson: false
    },
    modeltype: "ai"
  };
  const response = await fetch("http://codes.haetek.com:6677/blue", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...data,
      ...{ extradata: Object.assign(data.extradata, param) }
    })
  });
  return await response.json();
}
