import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "장성농산물가공센터", template: "%s | 장성농산물가공센터" },
  description: "장성의 건강한 농산물을 가치 있는 제품으로 연결하는 농산물가공센터",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: { title: "장성농산물가공센터", description: "장성의 농산물을 가치 있는 제품으로" },
  twitter: { card: "summary", title: "장성농산물가공센터", description: "장성의 농산물을 가치 있는 제품으로" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
