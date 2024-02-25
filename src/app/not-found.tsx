"use client";

import layoutStyles from "./layout.module.scss";
import pageStyles from "./page.module.scss";
import notfoundStyles from "./not-found.module.scss";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const NotFound = () => {
  return (
    <main className={layoutStyles.main}>
      <section className={pageStyles.head}>
        <Image
          src="/cover.png"
          alt=""
          className={pageStyles.bg}
          width={600}
          height={200}
        />
        <Image
          src="/siteIcon.png"
          alt=""
          className={pageStyles.icon}
          width={135}
          height={135}
        />
        <h1>GPT Trends</h1>
        <h2>世界のトレンドをAIを使用して紹介してます</h2>
      </section>
      <section className={notfoundStyles.wrap}>
        <h3>Not Found &#x1fae2;</h3>
        <TypeAnimation
          sequence={["Where am I? American Express?", 3000, "HaHa!!!", 10]}
          wrapper="span"
        />
      </section>
    </main>
  );
};

export default NotFound;
