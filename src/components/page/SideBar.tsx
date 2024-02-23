import React from "react";
import sidebar from "./sidebar.module.scss";
import { Footer } from "./Footer";

const SideBar = () => {
  return (
    <aside className={sidebar.wrap}>
      <div className={sidebar.categories}>
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
      <div className={sidebar.search}>
        <input type="text" />
        <button type="button">Search</button>
      </div>
      <Footer className={sidebar.footer} />
    </aside>
  );
};

export default SideBar;
