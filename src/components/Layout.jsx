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
        <html lang="en" className="has-navbar-fixed-top-mobile" />
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
          content="知擎便是知识的引擎，由黑顿科技与中国科学院计算所联合推出，旨在整合世上所有可整合的知识，并以多种信息模态全方位呈现，打造最领先最干净最纯粹最专业的知识平台与生态型引擎。由黑顿科技自主研发的语义搜索技术以及跨模态逐帧搜索技术为知擎资源提供了全新的产品模式，譬如针对视频资源，不管用户想查什么，直接就能跳转到该视频里面讲述该知识的相关具体片段，而不是需要将整部视频聚精会神地看完才能查到。从此视频资源不再是需要依靠标题、摘要、关键词作为外壳的暗箱，而是变成了通彻透亮的百宝盒，这种模式对于非娱乐型且信息密度较高的知识类视频来说，能够极大提升用户的搜索体验，原本藏在视频深处的知识/信息变得清晰可查，知识资源的利用率得到了翻番提升。再配合深度学习等算法手段，为知擎平台添砖加瓦，做出全国最领先最干净最纯粹最专业的知识平台，让世上从此没有查不到或学不懂的知识，让知擎成为21世纪知识的代名词。"
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
