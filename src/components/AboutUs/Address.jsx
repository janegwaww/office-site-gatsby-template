import React, { Component } from "react";

class Address extends Component {
  componentDidMount() {
    if (typeof window !== undefined) {
      const BMap = window.BMap;
      // 创建地图实例
      var map = new BMap.Map("bmap-container");
      // 创建点坐标
      var point = new BMap.Point(114.249032, 22.719911);
      // 初始化地图，设置中心点坐标和地图级别
      map.centerAndZoom(point, 18);
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
    }
  }

  render() {
    return (
      <div>
        <div className="address-text">
          <span className="is-size-6-touch">公司地址</span>
          <span className="company-address is-size-6-touch">
            深圳市{" "}
            <span className="longgang is-size-7-touch">
              广东省深圳市龙岗区龙翔大道7188号万科大厦3109
            </span>
          </span>
        </div>
        <div
          id="bmap-container"
          style={{ width: "100%", height: "480px" }}
        ></div>
      </div>
    );
  }
}

export default Address;
