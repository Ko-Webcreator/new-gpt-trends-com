import { Metadata, Viewport } from "next";
import "@/app/globals.scss";
import Header from "@/components/page/Header";
import layoutStyles from "./layout.module.scss";
import SideBar from "@/components/page/SideBar";

export const metadata: Metadata = {
  title: {
    template: "%s | GTP Trends COM",
    default: "GTP Trends COM",
  },
  description: "We introduce trending news from around the world using AI!",
  metadataBase: new URL(process.env.SITE_URL!),
  openGraph: {
    url: "/",
    images: "/images/ogp.png",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={layoutStyles.wrap}>
          <Header />
          {children}
          <SideBar />
        </div>
      </body>
    </html>
  );
}
