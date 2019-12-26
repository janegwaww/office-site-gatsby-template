import React, { useState } from "react";
import PropTypes from "prop-types";
import curcle from "../img/curcle.svg";

const SearchInput = () => {
  return (
    <div className="search-input">
      <div className="field has-addons has-margin-bottom-40">
        <div className="control">
          <input
            className="input is-medium"
            type="text"
            placeholder="自定义输入"
          />
        </div>
        <div className="control">
          <button className="button is-info is-medium">
            <span className="icon">
              <i className="fa fa-search"></i>
            </span>
          </button>
        </div>
      </div>
      <div className="buttons">
        <button className="button is-fullwidth is-medium is-link has-margin-bottom-40">
          被我们忽视的小事
        </button>
        <button className="button is-fullwidth is-medium has-margin-bottom-40">
          未知的玩意儿
        </button>
        <button className="button is-fullwidth is-medium has-margin-bottom-40">
          有点不清楚
        </button>
        <button className="button is-fullwidth is-medium">神秘的季节</button>
      </div>
    </div>
  );
};

const RelatedItem = ({ info = {} }) => {
  return (
    <div className="related-item">
      <div style={{ marginRight: "10px" }}>
        <div className={`index-num ${info.class}`}>{info.key + 1}</div>
      </div>
      <div>
        <div className="is-size-6 has-text-666">
          <span style={{ marginRight: "30px" }}>
            关联度: <span className={info.class}>{info.related}</span>
          </span>
          <span>
            位置: <span className={info.class}>{info.position}</span>
          </span>
        </div>
        <br />
        <span className="is-size-6-5 has-text-333">{info.text}</span>
      </div>
    </div>
  );
};

const SearchResult = () => {
  const [check, setCheck] = useState("checked");
  const arr = [
    {
      related: 8.899692,
      position: "[277,295]",
      class: "first",
      text:
        "……风的皱褶里夹含着水分，这些细小的事件被我们日常的忙碌所掩盖，直到发现阳台上晾晒的……"
    },
    {
      related: 8.434285,
      position: "[559,568]",
      class: "",
      text: "……它慷慨地落下，它把这些动人的时光，落向大海，落向潮汐……"
    },
    {
      related: 8.396917,
      position: "[479,489]",
      class: "",
      text:
        "……雨水击中了早晨的脉搏，让我感叹中国农历和大自然之间的神秘感应，雨水使得季节激……"
    }
  ];
  const handleChange = () => {
    setCheck(check === "" ? "checked" : "");
  };
  return (
    <div className="search-result">
      <div>
        <div className="field">
          <span className="is-size-5-5 has-text-666">开启语义理解:&ensp;</span>
          <input
            id="switchRoundedInfo"
            type="checkbox"
            name="switchRoundedInfo"
            className="switch is-rounded is-info"
            checked={check}
            onChange={handleChange}
          />
          <label
            htmlFor="switchRoundedInfo"
            className="is-size-5-5 has-text-666"
          ></label>
        </div>
        <div className="is-size-7 has-text-999">
          说明：该分值表明搜索内容与文本的契合度，数值越高，则语义契合度越好。
        </div>
      </div>
      <br />
      <div>
        {arr.map((o, i) => (
          <RelatedItem info={{ ...o, key: i }} key={i} />
        ))}
      </div>
    </div>
  );
};

function BusinessScene({ text = "" }) {
  const [content, setContent] = useState(text);
  const handleChange = e => {
    setContent(e.target.value);
  };
  return (
    <div className="product-textarea">
      <div className="buttons">
        <button className="button is-white">
          <span className="icon">
            {/* <img src={curcle} alt="curcle" /> */}
            <i className="fas fa-circle-notch"></i>
          </span>
          <span className="is-size-6 has-text-666">换一个实例</span>
        </button>
        <button className="button is-light is-size-6 has-text-666">
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
          <div className="tr">
            <div className="td">
              <textarea
                value={content}
                onChange={handleChange}
                rows="25"
                cols="32"
              />
            </div>
            <div className="td">
              <SearchInput />
            </div>
            <div className="td">
              <SearchResult />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BusinessScene.defaultProps = {
  info: `雨水之所以愿意落下，是因为它在天上，把满地盛开的雨伞，看作莲花。这个想象有些大，大到可以覆盖我走过的所有的路。人生大概是随时要迎接雨的，直到雨成为身体的一部分。雨是一种巨大的力量，它来自天堂。我想象，在夏末的黄昏，或者是春天的早晨，大自然会有某种力量在凝聚，在地上的人们不注意的时候，某种力量突然苏醒，这是云团里隐藏着的季节的神秘。我在早上起来，可以感觉到空气中这些微小的湿度。打开窗户的时候，常常忘记了今天应该翻到谷雨这个节气，翻日历这个动作对于雨来说是多么的渺小，对于我来说却是必不可少的。这个时候桃花在日历的后面悄悄苏醒，风的皱褶里夹含着水分，这些细小的事件被我们日常的忙碌所掩盖，直到发现阳台上晾晒的衣物为什么还有没有干，此时才想到今天会发生点什么。然后就是上路，大街如常，人流如常，来不及欣赏云朵的变化。天空对于我们来说，既可以像天气预报那用“阴”、“晴”、“雨几个字来概括，也可以用好多天……`
};

BusinessScene.propTypes = {
  info: PropTypes.string
};

export default BusinessScene;
