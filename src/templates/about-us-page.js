import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const aboutObj = [
  {
    image: "/img/a1.png",
    title: "数据建模",
    des:
      "借助传感平台，业务场景被解析为量化的数学 模型，无论是客户信息隐私，还是场景数据精 准度与全面度，均能得到系统的整合。"
  },
  {
    image: "/img/a2.png",
    title: "智能操作生态",
    des: "为万物互联打造的 操作生态"
  },
  {
    image: "/img/a3.png",
    title: "核心算法",
    des:
      "模块化的核心算法，用于将场景建模得到的数学 问题进行高效解决，支持灵活弹性的算力维护。"
  },
  {
    image: "/img/a4.png",
    title: "数据建模",
    des:
      "借助传感平台，业务场景被解析为量化的数学 模型，无论是客户信息隐私，还是场景数据精 准度与全面度，均能得到系统的整合。"
  },
  {
    image: "/img/a5.png",
    title: "数据建模",
    des:
      "生态根据获取到的客户行为给出实时的智能化决 策(解决方案)，客户可第一时间获取，场景随 后会刷新、重新建模。"
  },
  {
    image: "/img/a6.png",
    title: "数据建模",
    des:
      "客户可自行搭建信息化载体，如手机App，在 此载体之上进行操作，客户的行为与场景均会 被生态获取并解读。"
  }
];
const AboutUsTemplate = ({ itemInfo }) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${"/img/aboutus.png"})`,
        backgroundPosition: `center top`,
        backgroundAttachment: `fixed`,
        backgroundColor: `lightgray`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto"
      }}
    ></div>
    <div className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1 ">
              <h3 className="has-text-black is-size-3 has-text-centered">
                黑顿公司介绍
              </h3>
              <p
                style={{
                  lineHeight: "26px",
                  letterSpacing: "1px",
                  padding: ".2em .1em"
                }}
              >
                深圳前海黑顿科技有限公司（简称“黑顿科技”），团队于2019年8月1日入驻深圳前海区，注册资本3000万元，致力于搭建面向信息化、智能化、万物互联的智能操作生态，涉及领域包括物流、金融、教育、智慧城市、语言、销售、体育、大健康等等。
              </p>
              <p
                style={{
                  lineHeight: "26px",
                  letterSpacing: "1px",
                  padding: ".2em .1em"
                }}
              >
                创始团队来自多伦多大学（深度学习发源地）、卡耐基梅隆大学（人工智能专业世界第一）、浙大、哈工大、华南理工等国际名校，曾在国际智能语法检测大赛（CGED）中以绝对优势从社科院、阿里巴巴、北大等团队中夺冠，并曾在华为、IBM、科大讯飞等国际知名企业担任高级技术或研发岗位。
              </p>
              <p
                style={{
                  lineHeight: "26px",
                  letterSpacing: "1px",
                  padding: ".2em .1em"
                }}
              >
                公司研究团队在自然语言处理、机器学习、知识图谱、路径规划等热门领域均有成果，拥有多项国际或国家专利、著作权，已发表各类学术论文并被ACL、EMNLP、CoNLL等国际顶级学术会议录用，并与Vector
                Institute、中科院计算所等学术机构拥有学术合作关系，并在中科院计算所设有研究型工作站，站内常驻研究人员十余人，集结学术界权威，致力于将人工智能算法结合实际应用场景进行落地，消除学术界与实业界之间的代沟，为众多有智能化需求的企业提供技术支持及数据变现，为广大致力于智能化建设的企业及开发者提供稳健灵活简约的平台型算法生态，让智能塑造生活。
              </p>
              <div style={{ height: "50px" }}></div>
              <div className="columns is-multiline">
                {aboutObj.map((o, i) => (
                  <div className="column is-4 has-text-centered" key={i}>
                    <PreviewCompatibleImage
                      imageInfo={{ image: o.image, alt: "about us" }}
                    />
                    <p className="has-text-weight-bold">{o.title}</p>
                    <p>{o.des}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section" style={{ backgroundColor: "rgba(249,251,253,1)" }}>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1 has-text-centered">
            <h3 className="has-text-weight-bold is-size-4">创始团队</h3>
            <PreviewCompatibleImage imageInfo={{ image: "/img/creater.jpg" }} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AboutUs = () => (
  <Layout>
    <AboutUsTemplate />
  </Layout>
);

AboutUs.propTypes = {
  itemInfo: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string
  })
};

export default AboutUs;
