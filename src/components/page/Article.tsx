import Link from "next/link";
import React from "react";
import Image from "next/image";
import articleStyles from "./article.module.scss";
import { LinkType } from "@/types/linkType";
import { formatterDate } from "@/libs/dayjs";
import ShareList from "./ShareList";

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
   <ShareList
    title={title}
    url={`${process.env.SITE_URL}/articles/${id}`}
    hashTags={["gptTrends"]}
    size={30}
   />
  </article>
 );
};

export default Article;
