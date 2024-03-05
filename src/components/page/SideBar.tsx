"use client";
import React, { useEffect, useState } from "react";
import sidebar from "./sidebar.module.scss";
import { Footer } from "./Footer";
import { SP_WIDTH } from "@/const/size";
import Categories from "./Categories";
import Search from "./Search";

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
      <Categories />
      <Search isDisplaySearch={isDisplaySearch} />
      <Footer className={sidebar.footer} />
    </aside>
  );
};

export default SideBar;
