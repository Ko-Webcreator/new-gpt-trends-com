import ArrowIcon from "@/components/icons/ArrowIcon";
import pageStyles from "./page.module.scss";
import layoutStyles from "@/app/layout.module.scss";
import Link from "next/link";
import Image from "next/image";
import Articles from "@/components/page/Articles";
import { FetchType } from "@/types/fetchType";
import { fetchComWP } from "@/libs/fetchComWP";
import { formatterDate } from "@/libs/dayjs";
import { ArticleDetailType } from "@/types/articleDetailType";
import ShareList from "@/components/page/ShareList";
import { notFound } from "next/navigation";
import { decode } from "html-entities";

export async function generateMetadata({
 params,
}: {
 params: { slug: string };
}) {
 const { slug } = params;

 const { title, content } = await fetchComWP<ArticleDetailType>({
  method: FetchType.Get,
  endpoint: `/posts/${slug}?_fields=date,title,content`,
 });

 if (!title || !content) notFound();

 const meta = {
  title: decode(title.rendered),
  des: decode(content.rendered),
 };

 return {
  title: meta.title,
  description: `${meta.des.slice(0, 20)}...`,
 };
}

export default async function Page({ params }: { params: { slug: string } }) {
 const { slug } = params;
 const articleId = Number(slug);

 const { date, title, content, categories } =
  await fetchComWP<ArticleDetailType>({
   method: FetchType.Get,
   endpoint: `/posts/${slug}?_fields=date,title,content,categories`,
  });

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
    <time>
     <time>{formatterDate(date)}</time>
    </time>
    <hgroup>
     <h1 dangerouslySetInnerHTML={{ __html: title.rendered }} />
     <article dangerouslySetInnerHTML={{ __html: content.rendered }} />
     <Image src="/ogp.png" width={520} height={273} alt="" />
    </hgroup>
    <ShareList
     title={title.rendered}
     url={`${process.env.SITE_URL}/articles/${slug}`}
     hashTags={["gptTrends"]}
     size={30}
    />
   </article>
   <Articles
    linkType="categories"
    excludeId={articleId}
    categoryId={categories[0]}
    count={5}
   />
  </main>
 );
}
