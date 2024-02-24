import Link from "next/link";
import React from "react";
import Image from "next/image";
import articleStyles from "./article.module.scss";
import { LineIcon, XIcon } from "react-share";

const Article = () => {
  return (
    <article className={articleStyles.wrap}>
      <Link href="#">
        <aside>
          <Image
            src="/siteIcon.png"
            alt=""
            className={articleStyles.icon}
            width={40}
            height={40}
          />
        </aside>
        <hgroup>
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
        </hgroup>
      </Link>
      <ul className={articleStyles.sns}>
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
  );
};

export default Article;
