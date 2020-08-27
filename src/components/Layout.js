import React from "react";
import { Helmet } from "react-helmet";
import { useIntl } from "gatsby-plugin-intl";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { withPrefix } from "gatsby";
import "../styles/all.sass";

const TemplateWrapper = ({ children }) => {
  const { formatMessage } = useIntl();
  return (
    <div>
      <Helmet>
        <html lang="en" className="has-navbar-fixed-top" />
        <title>{formatMessage({ id: "title" })}</title>
        <meta name="keywords" content={formatMessage({ id: "keywords" })} />
        <meta
          name="description"
          content={formatMessage({ id: "description" })}
        />
        <meta name="author" content={formatMessage({ id: "author" })} />
        <meta
          name="keywords"
          content="知擎、知擎平台、知识引擎、kengine、知擎网、知擎app、黑顿知擎、知识付费、跨模态搜索、语义搜索、学术开源、知识变现、智慧教育、黑顿科技、知识生态、知识平台、逐帧搜索、什么是知擎、知擎是什么、知擎怎么样、深圳知擎、中科院知擎、学者签约、签约学者、字幕生成、裴正奇、于秋鑫"
        />
        <meta
          name="description"
          content="深圳前海黑顿科技有限公司(简称“黑顿科技”)，团队于2019年8月1日 入驻深圳前海区，注册资本3000万元，致力于搭建面向信息化、智能化、万物互联的智能操作生态，涉及领域包括物流、金融、教育、智慧城市、语言、销售、体育、大健康等等。创始团队来自多伦多大学(深度学习发源地)、卡耐基梅隆大学(人工智能专业世界第一)、北大、浙大、哈工大等国际名校。曾在国际智能语法检测大赛(CGED)中以绝对优势从社科院、阿里巴巴 、北大等团队中夺冠，并曾在华为、IBM、科大讯飞等国际知名企业担任高级技术或研发岗位。公司研究团队在自然语言处理、机器学习、知识图谱、路径规划等热门领域均有成果，拥有多项国际或国家专利、著作权、顶会论文，并与VectorInstitute、中科院计算所等学术机构拥有学术合作关系。公司致力于将人工智能算法结合实际应用场景进行落地，消除学术界与实业界之间的代沟，为众多有智能化需求的企业提供技术支持，为广大致力于智能化建设的企业及开发者提供稳健灵活简约的平台型算法生态，让智能塑造生活。"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/logo-copy.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/logo-copy.png`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={formatMessage({ id: "title" })} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/logo-copy.png`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
