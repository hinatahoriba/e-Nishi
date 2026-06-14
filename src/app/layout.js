import { Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "E-NISHI",
  description: "デジタル名刺を作成・共有できるWebアプリ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FBFBFB] text-[#222]">
        {children}
      </body>
    </html>
  );
}
