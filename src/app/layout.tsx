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
    "低成本、可迁移、长期高收益的每日小课。概率决策、学习方法、科学素养。",
  metadataBase: new URL("https://learn.liyi.online"),
  openGraph: {
    title: "每日高收益知识课",
    description: "每天一课，挂在 learn.liyi.online",
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
