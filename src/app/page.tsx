import React from "react";
import pageStyles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "@/components/icons/HomeIcon";
import { CN, FR, JP } from "country-flag-icons/react/3x2";
import CommentIcon from "@/components/icons/CommentIcon";
import BookmarkIcon from "@/components/icons/BookmarkIcon";

export default async function Page() {
  return (
    <main className={pageStyles.wrap}>
      <header className={pageStyles.heder}>
        <Image
          src="/siteIcon.png"
          width={52}
          height={52}
          alt=""
          className={pageStyles.siteIcon}
        />
        <nav className={pageStyles.nav}>
          <ul>
            <li>
              <Link href="#">
                <HomeIcon />
                Home
              </Link>
            </li>
            <li>
              <Link href="#">
                <JP width={30} />
                Japanese
              </Link>
            </li>
            <li>
              <Link href="#">
                <CN width={30} />
                Chinese
              </Link>
            </li>
            <li>
              <Link href="#">
                <FR width={30} />
                France
              </Link>
            </li>
            <li>
              <Link href="#">
                <CommentIcon />
                Comments
              </Link>
            </li>
            <li>
              <button>
                <BookmarkIcon />
                Bookmark
              </button>
            </li>
          </ul>
          <Link href="#" className={pageStyles.gptTrends}>
            GPT Trends
          </Link>
        </nav>
      </header>
    </main>
  );
}
