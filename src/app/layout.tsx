import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "每日高收益知识课 · learn.liyi.online",
    template: "%s · 每日高收益知识课",
  },
  description:
    "每天约一千字：概率与决策、学习方法、科学素养。带自测与来源。",
  metadataBase: new URL("https://learn.liyi.online"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/brand-icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "每日高收益知识课",
    description: "每日专栏 · learn.liyi.online",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body className="font-sans flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
