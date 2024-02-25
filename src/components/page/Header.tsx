"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "@/components/icons/HomeIcon";
import { CN, FR, JP } from "country-flag-icons/react/3x2";
import CommentIcon from "@/components/icons/CommentIcon";
import BookmarkIcon from "@/components/icons/BookmarkIcon";
import AboutIcon from "@/components/icons/AboutIcon";
import HamburgerIcon from "@/components/icons/HamburgerIcon";
import headerStyles from "./header.module.scss";
import DrinkIcon from "../icons/DrinkIcon";
import { SP_WIDTH } from "@/const/size";

const Header = () => {
  const [onMenu, setOnMenu] = useState(false);
  const onClick = () => setOnMenu((e) => !e);

  // Window幅検知
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > SP_WIDTH) {
        // SPサイズ以上はメニューを一旦非表示にする
        setOnMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={headerStyles.header}>
      <Link href="/" className={headerStyles.siteIcon}>
        <Image src="/siteIcon.png" width={52} height={52} alt="" />
      </Link>
      <button className={headerStyles.toggleMenu} onClick={onClick}>
        {onMenu ? <DrinkIcon /> : <HamburgerIcon />}
      </button>
      <nav className={`${headerStyles.nav} ${onMenu ? headerStyles.on : ""}`}>
        <ul>
          <li>
            <Link href="#">
              <HomeIcon />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <JP width={30} />
              <span>Japanese</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <CN width={30} />
              <span>Chinese</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <FR width={30} />
              <span>France</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <CommentIcon />
              <span>Comments</span>
            </Link>
          </li>
          <li>
            <button>
              <BookmarkIcon />
              <span>Bookmark</span>
            </button>
          </li>
        </ul>
        <Link href="/" className={headerStyles.gptTrends}>
          <span className={headerStyles.text}>GPT Trends</span>
          <span className={headerStyles.icon}>
            <AboutIcon />
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
