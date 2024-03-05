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
  contentMaxLength?: number;
};

const Articles = async ({ linkType, contentMaxLength = 0 }: Props) => {
  const data = await fetchComWP<ArticleType>({
    method: FetchType.Get,
    endpoint: `/posts?per_page=20&_fields=id,date,title,content,category_name,category_id`,
  });

  return (
    <>
      <ul className={articlesStyles.articles}>
        {data.map((e) => (
          <li key={e.id}>
            <Article
              id={e.id}
              date={e.date}
              title={e.title.rendered}
              content={e.content.rendered}
              linkType={linkType}
              contentMaxLength={contentMaxLength}
            />
          </li>
        ))}
      </ul>
      <Footer className={articlesStyles.footer} />
    </>
  );
};

export default Articles;
