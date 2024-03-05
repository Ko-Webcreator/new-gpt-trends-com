import React from "react";
import sidebar from "./sidebar.module.scss";
import { Footer } from "./Footer";
import Categories from "./Categories";
import Search from "./Search";

const SideBar = () => {
  return (
    <aside className={sidebar.wrap}>
      <Categories />
      <Search />
      <Footer className={sidebar.footer} />
    </aside>
  );
};

export default SideBar;
