import ArrowIcon from "@/components/icons/ArrowIcon";
import pageStyles from "./page.module.scss";
import layoutStyles from "@/app/layout.module.scss";
import Link from "next/link";
import Articles from "@/components/page/Articles";
import { notFound } from "next/navigation";

export default function Page({
 params,
 searchParams,
}: {
 params: { slug: string };
 searchParams: { [key: string]: string | string[] | undefined };
}) {
 const { p } = searchParams;

 if (!p) notFound();

 return (
  <main className={layoutStyles.main}>
   <div className={pageStyles.back}>
    <Link href="/">
     <ArrowIcon />
     {p}
    </Link>
   </div>
   <div className={pageStyles.articlesWrap}>
    <Articles linkType="search" searchText={p as string} />
   </div>
  </main>
 );
}
