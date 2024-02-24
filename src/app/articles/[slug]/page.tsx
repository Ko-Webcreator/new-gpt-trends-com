import pageStyles from "./page.module.scss";
import layoutStyles from "@/app/layout.module.scss";

export default function Page({ params }: { params: { slug: string } }) {
  return <main className={layoutStyles.main}></main>;
}
