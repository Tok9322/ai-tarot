import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AI タロット占い - 無料で本格タロットリーディング",
    template: "%s | AI タロット占い",
  },
  description:
    "AIがあなたのためにタロットカードをリーディング。ワンオラクルや3枚引きで恋愛運・仕事運・金運を無料で占えます。",
  keywords: ["AI占い", "タロット占い", "無料占い", "タロット", "恋愛占い", "仕事運"],
  openGraph: {
    title: "AI タロット占い - 無料で本格タロットリーディング",
    description:
      "AIがあなたのためにタロットカードをリーディング。恋愛運・仕事運・金運を無料で占えます。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-mystical min-h-dvh flex flex-col antialiased">
        <Header />
        <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
