"use client";
import React, { useEffect, useState } from "react";
import sidebar from "./sidebar.module.scss";
import { Footer } from "./Footer";
import { SP_WIDTH } from "@/const/size";

const SideBar = () => {
  const [isDisplaySearch, setDisplaySearch] = useState(true);

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      // SP時のみ
      if (window.innerWidth < SP_WIDTH) {
        setDisplaySearch(false);
      }
    };

    const handleScrollEnd = () => {
      setDisplaySearch(true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scrollend", handleScrollEnd);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, []);

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
      <div className={`${sidebar.search} ${isDisplaySearch ? sidebar.on : ""}`}>
        <input type="text" />
        <button type="button">Search</button>
      </div>
      <Footer className={sidebar.footer} />
    </aside>
  );
};

export default SideBar;
