import React from "react";
import pageStyles from "./page.module.scss";
import layoutStyles from "./layout.module.scss";
import Image from "next/image";
import { Footer } from "@/components/page/Footer";
import Articles from "@/components/page/Articles";

export default async function Page() {
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
      <Articles />
    </main>
  );
}
