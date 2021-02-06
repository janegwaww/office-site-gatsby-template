const React = require("react");

// Adds a class name to the body element
exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    <script
      key="bmap"
      type="text/javascript"
      src="https://api.map.baidu.com/api?v=2.0&ak=o1WCRcoZ2GM6LGdsMgYxkfuKkdjPmlOK"
    />
  ]);
};
