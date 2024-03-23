import ArrowIcon from "@/components/icons/ArrowIcon";
import pageStyles from "./page.module.scss";
import layoutStyles from "@/app/layout.module.scss";
import Link from "next/link";
import Articles from "@/components/page/Articles";
import { notFound } from "next/navigation";
import { fetchComWP } from "@/libs/fetchComWP";
import { ArticleType } from "@/types/articleType";
import { FetchType } from "@/types/fetchType";
import { CategoryType } from "@/types/categoryType";

export default async function Page({ params }: { params: { slug: string } }) {
 const { slug } = params;

 if (!slug) notFound();

 const categoryId = Number(slug);
 const category = await fetchComWP<CategoryType>({
  method: FetchType.Get,
  endpoint: `/categories/${slug}?_fields=id,count,name`,
 });

 return (
  <main className={layoutStyles.main}>
   <div className={pageStyles.back}>
    <Link href="/">
     <ArrowIcon />
     {category.name} ({category.count})
    </Link>
   </div>
   <div className={pageStyles.articlesWrap}>
    <Articles linkType="categories" categoryId={categoryId} count={20} />
   </div>
  </main>
 );
}
