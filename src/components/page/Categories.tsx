import React from "react";
import categoriesStyles from "./categories.module.scss";
import { fetchComWP } from "@/libs/fetchComWP";
import { ArticleType } from "@/types/articleType";
import { FetchType } from "@/types/fetchType";

const Categories = async () => {
  const data = await fetchComWP<ArticleType>({
    method: FetchType.Get,
    endpoint: `/categories`,
  });

  return (
    <div className={categoriesStyles.wrap}>
      <h3>Categories</h3>
      <ul>
        <li>
          <a href="#">
            <h4>カテゴリ名</h4>(<span>4</span>)
          </a>
        </li>
        <li>
          <a href="#">
            <h4>カテゴリ名</h4>(<span>4</span>)
          </a>
        </li>
        <li>
          <a href="#">
            <h4>カテゴリ名</h4>(<span>4</span>)
          </a>
        </li>
        <li>
          <a href="#">
            <h4>カテゴリ名</h4>(<span>4</span>)
          </a>
        </li>
        <li>
          <a href="#">
            <h4>カテゴリ名</h4>(<span>4</span>)
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
