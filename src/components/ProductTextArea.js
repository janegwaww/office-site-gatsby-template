import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Switch from "react-switch";
import curcle from "../img/curcle.svg";
import searchIcon from "../img/search-white.svg";

const SearchInput = ({ handleSearch, searchKeywords = [] }) => {
  const [inputValue, setInputValue] = useState("");
  const inputHandler = e => {
    setInputValue(e.target.value);
  };
  const searchHandler = e => {
    e.persist();
    handleSearch(e.currentTarget.value);
  };
  return (
    <div className="search-input">
      <div className="field has-addons has-margin-bottom-40">
        <div className="control" style={{ width: "100%" }}>
          <input
            className="input is-medium"
            type="text"
            placeholder="自定义输入"
            onChange={inputHandler}
          />
        </div>
        <div className="control">
          <button
            className="button is-info is-medium"
            value={inputValue}
            onClick={searchHandler}
          >
            <span className="icon">
              <img src={searchIcon} alt="search" />
            </span>
          </button>
        </div>
      </div>
      <div className="buttons">
        {searchKeywords.map((o, i) => (
          <button
            className={`button is-fullwidth has-margin-bottom-40`}
            value={o}
            onClick={searchHandler}
            key={i}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
};

const RelatedItem = ({ info = {} }) => {
  return (
    <div className="related-item">
      <div style={{ marginRight: "10px" }}>
        <div className="index-num">{info.key + 1}</div>
      </div>
      <div>
        <div className="is-size-6 has-text-666">
          <span style={{ marginRight: "30px" }}>
            关联度: <span className="relate-num">{info.match_score}</span>
          </span>
          <span>
            位置:{" "}
            <span className="relate-num">{`[${info.str_position.toString()}]`}</span>
          </span>
        </div>
        <br />
        <span
          className="is-size-6-5 has-text-333"
          dangerouslySetInnerHTML={{
            __html: `...${info.matched_sentence.replace(
              info.matched_str,
              `<span style='color:#2c95ff'>${info.matched_str}</span>`
            )}...`
          }}
        ></span>
      </div>
    </div>
  );
};

const SearchResult = ({ result = [], checkHandler }) => {
  const [check, setCheck] = useState(false);
  const handleChange = () => {
    setCheck(!check);
    checkHandler(!check);
  };
  return (
    <div className="search-result">
      <div className="field">
        <div className="field">
          <label htmlFor="l-switch">
            <span className="is-size-6 has-text-666">开启语义理解:&ensp;</span>
            <Switch
              onChange={handleChange}
              checked={check}
              offColor={"#999"}
              onColor={"#0c66ff"}
              handleDiameter={12}
              uncheckedIcon={false}
              checkedIcon={false}
              height={20}
              width={36}
              id="l-switch"
              disabled
            />
          </label>
        </div>
        <div className="is-size-7 has-text-999">
          说明：该分值表明搜索内容与文本的契合度，数值越高，则语义契合度越好。
        </div>
      </div>
      <br />
      <div className="relate-section">
        {result.map((o, i) => (
          <RelatedItem info={{ ...o, key: i }} key={i} />
        ))}
      </div>
    </div>
  );
};

function ProductTextArea({ text = [] }) {
  const [content, setContent] = useState(text[0].description);
  const [keywords, setKeywords] = useState(text[0].keywords);
  const [issemantic, setIssemantic] = useState(false);
  const [related, setRelated] = useState([]);
  const [textIndex, setTextIndex] = useState(0);
  useEffect(() => {
    changeContent();
  }, []);
  const handleQuery = (value, text) => {
    if (!text) return alert("文本不能为空！");
    let param = {
      querystring: value,
      paragraph: text,
      issemantic: issemantic
    };
    fetchQuery(param)
      .then(data => {
        if (data.err === 0) {
          const arr = data.resultdata.slice(1);
          setRelated(arr);
        } else {
          alert(data.errmsg);
        }
      })
      .catch(err => alert(err));
  };
  const handleChange = e => {
    setContent(e.target.value);
  };
  const handleSearch = value => {
    const zh_regexp = /^[\u4e00-\u9fa5]+$/;
    if (zh_regexp.test(value)) {
      return handleQuery(value, content);
    }
    alert("请输入中文字符！");
  };
  const changeContent = () => {
    const { description, keywords } = text[textIndex];
    setContent(description);
    setKeywords(keywords);
    handleQuery(keywords[0], description);
    if (textIndex >= text.length - 1) {
      setTextIndex(0);
    } else {
      setTextIndex(textIndex + 1);
    }
  };
  const defineContent = () => {
    setContent("");
    setKeywords([]);
    setRelated([]);
  };
  const handleCheck = e => {
    setIssemantic(e);
  };
  return (
    <div className="product-textarea">
      <div className="buttons">
        <div className="refresh-button" onClick={changeContent}>
          <span className="icon">
            <img src={curcle} alt="curcle" width="20" height="20" />
          </span>
          <span className="is-size-6 has-text-666">换一个实例</span>
        </div>
        <button
          className="button is-light is-size-6-5 has-text-999 has-background-gray-2"
          onClick={defineContent}
        >
          自定义文本
        </button>
      </div>
      <div>
        <div className="h-table is-bordered is-fullwidth">
          <div className="tr thead">
            <div className="td">文本样例</div>
            <div className="td">想要从文本中搜索的语义/语句</div>
            <div className="td">挖掘结果</div>
          </div>
          <div className="tr tbody">
            <div className="td">
              <textarea
                className="textarea"
                placeholder="请输入文本"
                onChange={handleChange}
                rows="25"
                cols="32"
                value={content}
              ></textarea>
            </div>
            <div className="td">
              <SearchInput
                handleSearch={handleSearch}
                searchKeywords={keywords}
              />
            </div>
            <div className="td">
              <SearchResult result={related} checkHandler={handleCheck} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductTextArea.propTypes = {
  info: PropTypes.shape({
    description: PropTypes.string,
    keywords: PropTypes.array
  })
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
