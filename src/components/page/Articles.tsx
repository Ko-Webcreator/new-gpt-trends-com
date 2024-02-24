import React from "react";
import articlesStyles from "./articles.module.scss";
import Article from "./article";

const Articles = () => {
  return (
    <ul className={articlesStyles.articles}>
      <li>
        <Article />
      </li>
      <li>
        <Article />
      </li>
    </ul>
  );
};

export default Articles;
