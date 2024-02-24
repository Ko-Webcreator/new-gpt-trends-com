import ArrowIcon from "@/components/icons/ArrowIcon";
import pageStyles from "./page.module.scss";
import layoutStyles from "@/app/layout.module.scss";
import Link from "next/link";
import Image from "next/image";
import { LineIcon, XIcon } from "react-share";
import Articles from "@/components/page/Articles";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className={layoutStyles.main}>
      <div className={pageStyles.back}>
        <Link href="/">
          <ArrowIcon />
          Post
        </Link>
      </div>
      <article className={pageStyles.article}>
        <header>
          <Image src="/siteIcon.png" width={40} height={40} alt="" />
          <h2>GPT Trends</h2>
        </header>
        <time>2024/02/22</time>
        <hgroup>
          <h1>
            シャビ監督率いるバルセロナ、欧州チャンピオンズリーグでナポリと引き分け、シーズン限定の契約終了に向け戦い続ける
          </h1>
          <p>
            シャビ監督率いるバルセロナが、21日に行われた欧州チャンピオンズリーグ決勝トーナメント1回戦ファーストレグのナポリとの戦いで1-1のドローに終わりました。この試合は、イタリアのディエゴ・アルマンド・マラドーナ・スタジアムで行われました
          </p>
          <Image src="/ogp.png" width={520} height={273} alt="" />
        </hgroup>
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
      <Articles />
    </main>
  );
}
