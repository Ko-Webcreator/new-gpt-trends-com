import Link from "next/link";
import React from "react";
import Image from "next/image";
import articleStyles from "./article.module.scss";
import { FacebookIcon, LineIcon, XIcon } from "react-share";
import { LinkType } from "@/types/linkType";
import { formatterDate } from "@/libs/dayjs";

type Props = {
  id: number;
  title: string;
  content: string;
  date: string;
  linkType: LinkType;
  contentMaxLength?: number;
};

const Article = async ({
  id,
  title,
  content,
  date,
  linkType,
  contentMaxLength = 0,
}: Props) => {
  const url = `${process.env.SITE_URL}/articles/${id}`;

  return (
    <article className={articleStyles.wrap}>
      <Link href={`/articles/${id}`}>
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
            GPT Trends<time>{formatterDate(date)}</time>
          </h1>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <article
            dangerouslySetInnerHTML={{
              __html:
                contentMaxLength > 0
                  ? `${content.slice(0, contentMaxLength)}...`
                  : content,
            }}
          />
          <Image src="/ogp.png" width={520} height={273} alt="" />
        </hgroup>
      </Link>
      <ul className={articleStyles.sns}>
        <li>
          <a
            href={`https://twitter.com/share?url=${url}&text=${title}&hashtags=gptTrends`}
            target="_blank"
          >
            <XIcon size={40} round={true} />
          </a>
        </li>
        <li>
          <a
            href={`https://www.facebook.com/share.php?u=${url}`}
            target="_blank"
          >
            <FacebookIcon size={40} round={true} />
          </a>
        </li>
        <li>
          <a
            href={`https://social-plugins.line.me/lineit/share?url=${url}`}
            target="_blank"
          >
            <LineIcon size={40} round={true} />
          </a>
        </li>
      </ul>
    </article>
  );
};

export default Article;
