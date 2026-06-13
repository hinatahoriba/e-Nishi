"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense, use, useState } from "react";

function CardContent({ searchParamsPromise }) {
  // Next.js 16 breaking change: use() to unwrap searchParams promise
  const searchParams = use(searchParamsPromise);
  const [isFlipped, setIsFlipped] = useState(false);

  const name = searchParams.name || "";
  const roman = searchParams.roman || "";
  const affiliation = searchParams.affiliation || "";
  const skill = searchParams.skill || "";
  const message = searchParams.message || "";
  const portfolio = searchParams.portfolio || "";
  const line = searchParams.line || "";
  const twitter = searchParams.x || ""; // param is "x"
  const insta = searchParams.insta || "";
  const tiktok = searchParams.tiktok || "";
  const github = searchParams.github || "";
  const color = searchParams.color || "stone";

  const hasSNS = line || twitter || insta || tiktok || github;
  const hasPortfolio = !!portfolio;
  const hasBackContent = hasSNS || hasPortfolio;

  const THEMES = {
    stone: {
      bg: "bg-[#fcfbf9]",
      border: "border-stone-300/40",
      textPrimary: "text-stone-800",
      textSecondary: "text-stone-600",
      textTertiary: "text-stone-500",
      textMuted: "text-stone-400",
      textLight: "text-stone-300",
      divider: "bg-stone-300",
      icon: "text-stone-400 hover:text-stone-700 hover:scale-110",
      qrBg: "bg-stone-50 border-stone-200",
      qrInnerBg: "bg-white border-stone-300/60",
      fallbackBg: "bg-stone-50 border-stone-200",
      fallbackInnerBg: "bg-white border-stone-100",
    },
    blue: {
      bg: "bg-blue-50/80",
      border: "border-blue-300/40",
      textPrimary: "text-blue-900",
      textSecondary: "text-blue-700",
      textTertiary: "text-blue-600",
      textMuted: "text-blue-400",
      textLight: "text-blue-300",
      divider: "bg-blue-300",
      icon: "text-blue-400 hover:text-blue-700 hover:scale-110",
      qrBg: "bg-blue-100 border-blue-200",
      qrInnerBg: "bg-white border-blue-300/60",
      fallbackBg: "bg-blue-100 border-blue-200",
      fallbackInnerBg: "bg-white border-blue-100",
    },
    rose: {
      bg: "bg-rose-50/80",
      border: "border-rose-300/40",
      textPrimary: "text-rose-900",
      textSecondary: "text-rose-700",
      textTertiary: "text-rose-600",
      textMuted: "text-rose-400",
      textLight: "text-rose-300",
      divider: "bg-rose-300",
      icon: "text-rose-400 hover:text-rose-700 hover:scale-110",
      qrBg: "bg-rose-100 border-rose-200",
      qrInnerBg: "bg-white border-rose-300/60",
      fallbackBg: "bg-rose-100 border-rose-200",
      fallbackInnerBg: "bg-white border-rose-100",
    },
    amber: {
      bg: "bg-amber-50/80",
      border: "border-amber-300/40",
      textPrimary: "text-amber-900",
      textSecondary: "text-amber-700",
      textTertiary: "text-amber-600",
      textMuted: "text-amber-400",
      textLight: "text-amber-300",
      divider: "bg-amber-300",
      icon: "text-amber-400 hover:text-amber-700 hover:scale-110",
      qrBg: "bg-amber-100 border-amber-200",
      qrInnerBg: "bg-white border-amber-300/60",
      fallbackBg: "bg-amber-100 border-amber-200",
      fallbackInnerBg: "bg-white border-amber-100",
    },
    emerald: {
      bg: "bg-emerald-50/80",
      border: "border-emerald-300/40",
      textPrimary: "text-emerald-900",
      textSecondary: "text-emerald-700",
      textTertiary: "text-emerald-600",
      textMuted: "text-emerald-400",
      textLight: "text-emerald-300",
      divider: "bg-emerald-300",
      icon: "text-emerald-400 hover:text-emerald-700 hover:scale-110",
      qrBg: "bg-emerald-100 border-emerald-200",
      qrInnerBg: "bg-white border-emerald-300/60",
      fallbackBg: "bg-emerald-100 border-emerald-200",
      fallbackInnerBg: "bg-white border-emerald-100",
    },
    purple: {
      bg: "bg-purple-50/80",
      border: "border-purple-300/40",
      textPrimary: "text-purple-900",
      textSecondary: "text-purple-700",
      textTertiary: "text-purple-600",
      textMuted: "text-purple-400",
      textLight: "text-purple-300",
      divider: "bg-purple-300",
      icon: "text-purple-400 hover:text-purple-700 hover:scale-110",
      qrBg: "bg-purple-100 border-purple-200",
      qrInnerBg: "bg-white border-purple-300/60",
      fallbackBg: "bg-purple-100 border-purple-200",
      fallbackInnerBg: "bg-white border-purple-100",
    },
    slate: {
      bg: "bg-slate-50/80",
      border: "border-slate-300/40",
      textPrimary: "text-slate-900",
      textSecondary: "text-slate-700",
      textTertiary: "text-slate-600",
      textMuted: "text-slate-400",
      textLight: "text-slate-300",
      divider: "bg-slate-300",
      icon: "text-slate-400 hover:text-slate-700 hover:scale-110",
      qrBg: "bg-slate-100 border-slate-200",
      qrInnerBg: "bg-white border-slate-300/60",
      fallbackBg: "bg-slate-100 border-slate-200",
      fallbackInnerBg: "bg-white border-slate-100",
    },
    dark: {
      bg: "bg-zinc-800",
      border: "border-zinc-700/60",
      textPrimary: "text-zinc-100",
      textSecondary: "text-zinc-300",
      textTertiary: "text-zinc-400",
      textMuted: "text-zinc-500",
      textLight: "text-zinc-600",
      divider: "bg-zinc-700",
      icon: "text-zinc-400 hover:text-zinc-200 hover:scale-110",
      qrBg: "bg-zinc-900 border-zinc-700",
      qrInnerBg: "bg-zinc-100 border-zinc-600",
      fallbackBg: "bg-zinc-900 border-zinc-700",
      fallbackInnerBg: "bg-zinc-800 border-zinc-700",
    }
  };

  const theme = THEMES[color] || THEMES.stone;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-6 gap-4">
      <div
        className={`w-80 aspect-[55/91] perspective-1000 select-none transform transition-transform duration-300 ${hasBackContent ? "hover:-translate-y-1 cursor-pointer" : ""}`}
        onClick={() => hasBackContent && setIsFlipped(!isFlipped)}
      >
        <div
          className={`w-full h-full transform-style-3d transition-transform duration-700 ease-in-out relative ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* 表面 */}
          <div className={`absolute inset-0 w-full h-full rounded-sm shadow-xl p-8 flex flex-col justify-between items-center text-center border backface-hidden ${theme.bg} ${theme.border}`}>
            {/* 所属 */}
            <div className="mt-6">
              <p className={`text-[10px] tracking-widest leading-relaxed whitespace-pre-wrap ${theme.textTertiary}`}>
                {affiliation}
              </p>
            </div>

            {/* 氏名・ローマ字 */}
            <div className="space-y-4 my-auto">
              <h1
                className={`text-3xl font-normal tracking-[0.2em] ml-[0.2em] ${theme.textPrimary}`}
                style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
              >
                {name}
              </h1>

              <p className={`text-[10px] tracking-[0.15em] font-light uppercase ${theme.textMuted}`}>
                {roman}
              </p>
            </div>

            {/* 特技・一言メッセージ */}
            <div className={`text-[11px] space-y-4 w-full px-2 mb-2 ${theme.textSecondary}`}>
              {skill && (
                <div className="space-y-1">
                  <p className={`text-[8px] tracking-wider font-sans ${theme.textMuted}`}>
                    SKILL
                  </p>
                  <p className={`tracking-widest text-[11px] ${theme.textPrimary}`}>
                    {skill}
                  </p>
                </div>
              )}

              {skill && message && (
                <div className={`w-6 h-[1px] mx-auto my-3 ${theme.divider}`} />
              )}

              {message && (
                <p className={`font-light text-[10px] leading-relaxed ${theme.textTertiary}`}>
                  {message}
                </p>
              )}
            </div>
          </div>

          {/* 裏面 */}
          {hasBackContent && (
            <div className={`absolute inset-0 w-full h-full rounded-sm shadow-xl p-8 flex flex-col justify-between items-center text-center border backface-hidden rotate-y-180 ${theme.bg} ${theme.border}`}>
              <div className="mt-6">
                <p
                  className={`text-xs tracking-[0.2em] font-medium uppercase ${theme.textMuted}`}
                  style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
                >
                  Connect with me
                </p>
                <div className={`w-4 h-[1px] mx-auto mt-2 ${theme.divider}`} />
              </div>

              {hasPortfolio ? (
                <div className="my-auto space-y-3 flex flex-col items-center z-10">
                  <a 
                    href={portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block w-28 h-28 border p-2 rounded transition-transform duration-300 hover:scale-105 ${theme.qrBg}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className={`w-full h-full border rounded flex flex-col items-center justify-center p-1 overflow-hidden ${theme.qrInnerBg}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(portfolio)}&color=${color === "dark" ? "27272a" : "292524"}`}
                        alt="Portfolio QR Code"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity mix-blend-multiply"
                      />
                    </div>
                  </a>
                  <p className={`text-[8px] tracking-widest font-sans uppercase ${theme.textMuted}`}>
                    Scan or Click
                  </p>
                </div>
              ) : (
                <div className="my-auto space-y-4 flex flex-col items-center opacity-60">
                  <div className={`w-24 h-24 border rounded-2xl flex items-center justify-center shadow-sm ${theme.fallbackBg}`}>
                    <div className={`w-20 h-20 border rounded-xl flex items-center justify-center ${theme.fallbackInnerBg}`}>
                      <span 
                        className={`text-4xl tracking-widest uppercase font-light ${theme.textLight}`}
                        style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
                      >
                        {roman ? roman.charAt(0) : (name ? name.charAt(0) : "C")}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <p className={`text-[9px] tracking-[0.3em] font-sans uppercase ${theme.textMuted}`}>
                      Digital Card
                    </p>
                    <div className={`w-4 h-[1px] ${theme.divider}`}></div>
                  </div>
                </div>
              )}

              {/* SNS */}
              <div
                className="sns-links mb-6 w-full px-2"
                onClick={(e) => e.stopPropagation()}
              >
                {(hasPortfolio || hasSNS) && (
                  <div className={`w-6 h-[1px] mx-auto mb-4 ${theme.divider}`} />
                )}
                <div className="flex justify-center items-center gap-5 flex-wrap">
                  {github && (
                    <a
                      href={`https://github.com/${github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-all duration-300 ${theme.icon}`}
                    >
                      <i className="fa-brands fa-github text-lg" />
                    </a>
                  )}
                  {twitter && (
                    <a
                      href={`https://x.com/${twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-all duration-300 ${theme.icon}`}
                    >
                      <i className="fa-brands fa-x-twitter text-lg" />
                    </a>
                  )}
                  {line && (
                    <a
                      href={line.startsWith("http") ? line : `https://line.me/ti/p/${line}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-all duration-300 ${theme.icon}`}
                    >
                      <i className="fa-brands fa-line text-lg" />
                    </a>
                  )}
                  {insta && (
                    <a
                      href={`https://instagram.com/${insta}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-all duration-300 ${theme.icon}`}
                    >
                      <i className="fa-brands fa-instagram text-lg" />
                    </a>
                  )}
                  {tiktok && (
                    <a
                      href={`https://tiktok.com/@${tiktok}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-all duration-300 ${theme.icon}`}
                    >
                      <i className="fa-brands fa-tiktok text-lg" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {hasBackContent && (
        <p className={`text-[10px] tracking-widest animate-pulse ${theme.textMuted}`}>
          ※カードをクリックすると表裏が切り替わります
        </p>
      )}


    </div>
  );
}

// Next.js 16: searchParams is a Promise
export default function CardPage({ searchParams }) {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
      <CardContent searchParamsPromise={searchParams} />
    </Suspense>
  );
}
