import React from "react";
import articlesStyles from "./articles.module.scss";
import Article from "./article";
import { Footer } from "./Footer";

const Articles = () => {
  return (
    <>
      <ul className={articlesStyles.articles}>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
      </ul>
      <Footer className={articlesStyles.footer} />
    </>
  );
};

export default Articles;
