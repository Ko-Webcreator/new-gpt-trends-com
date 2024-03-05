"use client";

import React, { useEffect, useState } from "react";
import searchStyles from "./search.module.scss";
import { SP_WIDTH } from "@/const/size";

const Search = () => {
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
    <search
      className={`${searchStyles.wrap} ${
        isDisplaySearch ? searchStyles.on : ""
      }`}
    >
      <input type="text" />
      <button type="button">Search</button>
    </search>
  );
};

export default Search;
