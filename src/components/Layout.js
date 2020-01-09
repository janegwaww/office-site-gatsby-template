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
