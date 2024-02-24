import React from "react";
import pageStyles from "./page.module.scss";
import layoutStyles from "./layout.module.scss";
import Image from "next/image";
import Link from "next/link";
import { LineIcon, XIcon } from "react-share";
import { Footer } from "@/components/page/Footer";

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
      <ul className={pageStyles.articles}>
        <li>
          <article>
            <Link href="#">
              <aside>
                <Image
                  src="/siteIcon.png"
                  alt=""
                  className={pageStyles.icon}
                  width={40}
                  height={40}
                />
              </aside>
              <section>
                <h1>
                  GPT Trends<time>2024/02/22</time>
                </h1>
                <h2>
                  シャビ監督率いるバルセロナ、欧州チャンピオンズリーグでナポリと引き分け、シーズン限定の契約終了に向け戦い続ける
                </h2>
                <p>
                  シャビ監督率いるバルセロナが、21日に行われた欧州チャンピオンズリーグ決勝トーナメント1回戦ファーストレグのナポリとの戦いで1-1のドローに終わりました。この試合は、イタリアのディエゴ・アルマンド・マラドーナ・スタジアムで行われました
                </p>
                <Image src="/ogp.png" width={520} height={273} alt="" />
              </section>
            </Link>
            <ul className={pageStyles.sns}>
              <li>
                <a href="#">
                  <XIcon size={40} round={true} />
                </a>
              </li>
              <li>
                <a href="#">
                  <LineIcon size={40} round={true} />
                </a>
              </li>
            </ul>
          </article>
        </li>
        <li>
          <article>
            <Link href="#">
              <aside>
                <Image
                  src="/siteIcon.png"
                  alt=""
                  className={pageStyles.icon}
                  width={40}
                  height={40}
                />
              </aside>
              <section>
                <h1>
                  GPT Trends<time>2024/02/22</time>
                </h1>
                <h2>
                  シャビ監督率いるバルセロナ、欧州チャンピオンズリーグでナポリと引き分け、シーズン限定の契約終了に向け戦い続ける
                </h2>
                <p>
                  シャビ監督率いるバルセロナが、21日に行われた欧州チャンピオンズリーグ決勝トーナメント1回戦ファーストレグのナポリとの戦いで1-1のドローに終わりました。この試合は、イタリアのディエゴ・アルマンド・マラドーナ・スタジアムで行われました
                </p>
                <Image src="/ogp.png" width={520} height={273} alt="" />
              </section>
            </Link>
            <ul className={pageStyles.sns}>
              <li>
                <a href="#">
                  <XIcon size={40} round={true} />
                </a>
              </li>
              <li>
                <a href="#">
                  <LineIcon size={40} round={true} />
                </a>
              </li>
            </ul>
          </article>
        </li>
      </ul>
      <Footer className={pageStyles.footer} />
    </main>
  );
}
