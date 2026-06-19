import {
  Cormorant_Garamond,
  DM_Sans,
  Montserrat,
  Noto_Sans_JP,
} from "next/font/google";
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

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["200", "400", "500"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata = {
  title: "E-NISHI",
  description: "デジタル名刺を作成・共有できるWebアプリ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${cormorantGaramond.variable} ${montserrat.variable} ${dmSans.variable} h-full antialiased`}
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
