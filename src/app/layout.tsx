import { Viewport } from "next";
import "@/app/globals.scss";
import Header from "@/components/page/Header";
import layoutStyles from "./layout.module.scss";
import SideBar from "@/components/page/SideBar";

export const metadata = {
  title: "GTP Trends COM",
  description: "",
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
        <main className={layoutStyles.wrap}>
          <Header />
          {children}
          <SideBar />
        </main>
      </body>
    </html>
  );
}
