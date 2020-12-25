import React from "react";

const Article = ({ article = [] }) => {
  const [para1, para2] = article;
  return (
    <div
      className="college-article content has-text-left"
      style={{ maxWidth: "840px", margin: "auto" }}
    >
      <p className="is-size-4 is-size-5-mobile">{article.heading}</p>
      <br className="is-hidden-mobile" />
      <p className="is-size-5 is-size-6-mobile">{para1.heading}</p>
      <p
        className="is-size-7-mobile"
        dangerouslySetInnerHTML={{ __html: para1.content }}
        style={{ hyphens: "auto" }}
      ></p>
      <br />
      <p className="is-size-5 is-size-6-mobile">{para2.heading}</p>
      <p
        className="is-size-7-mobile"
        dangerouslySetInnerHTML={{ __html: para2.content }}
        style={{ hyphens: "auto" }}
      ></p>
    </div>
  );
};

export default Article;
