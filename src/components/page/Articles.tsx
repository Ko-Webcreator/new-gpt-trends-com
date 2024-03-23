import React from "react";
import articlesStyles from "./articles.module.scss";
import Article from "./Article";
import { Footer } from "./Footer";
import { fetchComWP } from "@/libs/fetchComWP";
import { FetchType } from "@/types/fetchType";
import { ArticleType } from "@/types/articleType";
import { LinkType } from "@/types/linkType";

type Props = {
 linkType: LinkType;
 count?: number;
 excludeId?: number;
 categoryId?: number;
 contentMaxLength?: number;
};

const Articles = async ({
 linkType,
 count = 30,
 excludeId = 0,
 categoryId,
 contentMaxLength = 60,
}: Props) => {
 let data: ArticleType[] = [];

 if (linkType === "articles") {
  data = await fetchComWP<ArticleType[]>({
   method: FetchType.Get,
   endpoint: `/posts?per_page=${count}&exclude=${excludeId}&_fields=id,date,title,content,category_name,category_id`,
  });
 }
 if (linkType === "categories") {
  data = await fetchComWP<ArticleType[]>({
   method: FetchType.Get,
   endpoint: `/posts?per_page=${count}&categories=${categoryId}&exclude=${excludeId}&_fields=id,date,title,content,category_name,category_id`,
  });
 }

 return (
  <>
   <ul className={articlesStyles.articles}>
    {data.map((e) => {
     return (
      <li key={e.id}>
       <Article
        id={e.id}
        date={e.date}
        title={e.title.rendered}
        content={e.content.rendered}
        contentMaxLength={contentMaxLength}
       />
      </li>
     );
    })}
   </ul>
   <Footer className={articlesStyles.footer} />
  </>
 );
};

export default Articles;
