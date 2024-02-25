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
  const { result } = searchParams;

  if (!result) notFound();

  return (
    <main className={layoutStyles.main}>
      <div className={pageStyles.back}>
        <Link href="/">
          <ArrowIcon />
          {result}
        </Link>
      </div>
      <div className={pageStyles.articlesWrap}>
        <Articles />
      </div>
    </main>
  );
}
