"use client";

import { SNS_OPTIONS, SOCIAL_LINKS, CARD_THEMES } from "../../lib/card";

function SocialLink({ type, value, theme }) {
  const social = SOCIAL_LINKS[type];

  if (!social || !value) {
    return null;
  }

  return (
    <a
      href={social.href(value)}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-all duration-300 ${theme.icon}`}
    >
      <i className={`${social.icon} text-lg`} />
    </a>
  );
}

export default function BusinessCard({
  name,
  roman,
  affiliation,
  skill,
  message,
  portfolio,
  line,
  twitter,
  insta,
  tiktok,
  github,
  color,
  theme = CARD_THEMES.stone,
  isFlipped,
  onToggleFlip,
}) {
  const hasSNS = Boolean(line || twitter || insta || tiktok || github);
  const hasPortfolio = Boolean(portfolio);
  const hasBackContent = hasSNS || hasPortfolio;
  const socialValues = { github, x: twitter, line, insta, tiktok };
  const portfolioQrColor = color === "dark" ? "27272a" : "292524";

  return (
    <>
      <div
        className={`w-80 aspect-[55/91] perspective-1000 select-none transform transition-transform duration-300 ${
          hasBackContent ? "hover:-translate-y-1 cursor-pointer" : ""
        }`}
        onClick={() => hasBackContent && onToggleFlip()}
      >
        <div
          className={`w-full h-full transform-style-3d transition-transform duration-700 ease-in-out relative ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          <div
            className={`absolute inset-0 w-full h-full rounded-sm shadow-xl p-8 flex flex-col justify-between items-center text-center border backface-hidden ${theme.bg} ${theme.border}`}
          >
            <div className="mt-6">
              <p
                className={`text-[10px] tracking-widest leading-relaxed whitespace-pre-wrap ${theme.textTertiary}`}
              >
                {affiliation}
              </p>
            </div>

            <div className="space-y-4 my-auto">
              <h1
                className={`text-3xl font-normal tracking-[0.2em] ml-[0.2em] ${theme.textPrimary}`}
                style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
              >
                {name}
              </h1>

              <p
                className={`text-[10px] tracking-[0.15em] font-light uppercase ${theme.textMuted}`}
              >
                {roman}
              </p>
            </div>

            <div
              className={`text-[11px] space-y-4 w-full px-2 mb-2 ${theme.textSecondary}`}
            >
              {skill && (
                <div className="space-y-1">
                  <p className={`text-[8px] tracking-wider font-sans ${theme.textMuted}`}>
                    趣味
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

          {hasBackContent && (
            <div
              className={`absolute inset-0 w-full h-full rounded-sm shadow-xl p-8 flex flex-col justify-between items-center text-center border backface-hidden rotate-y-180 ${theme.bg} ${theme.border}`}
            >
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
                <div className="my-auto flex flex-col items-center space-y-3 z-10">
                  <a
                    href={portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block w-28 h-28 border p-2 rounded transition-transform duration-300 hover:scale-105 ${theme.qrBg}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      className={`w-full h-full border rounded flex flex-col items-center justify-center p-1 overflow-hidden ${theme.qrInnerBg}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                          portfolio
                        )}&color=${portfolioQrColor}`}
                        alt="Portfolio QR Code"
                        className="w-full h-full object-cover opacity-90 transition-opacity mix-blend-multiply group-hover:opacity-100"
                      />
                    </div>
                  </a>
                  <p className={`text-[8px] tracking-widest font-sans uppercase ${theme.textMuted}`}>
                    Scan or Click
                  </p>
                </div>
              ) : (
                <div className="my-auto flex flex-col items-center space-y-4 opacity-60">
                  <div
                    className={`w-24 h-24 border rounded-2xl flex items-center justify-center shadow-sm ${theme.fallbackBg}`}
                  >
                    <div
                      className={`w-20 h-20 border rounded-xl flex items-center justify-center ${theme.fallbackInnerBg}`}
                    >
                      <span
                        className={`text-4xl tracking-widest uppercase font-light ${theme.textLight}`}
                        style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
                      >
                        {roman ? roman.charAt(0) : name ? name.charAt(0) : "C"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <p className={`text-[9px] tracking-[0.3em] font-sans uppercase ${theme.textMuted}`}>
                      Digital Card
                    </p>
                    <div className={`w-4 h-[1px] ${theme.divider}`} />
                  </div>
                </div>
              )}

              <div
                className="sns-links mb-6 w-full px-2"
                onClick={(e) => e.stopPropagation()}
              >
                {(hasPortfolio || hasSNS) && (
                  <div className={`w-6 h-[1px] mx-auto mb-4 ${theme.divider}`} />
                )}
                <div className="flex justify-center items-center gap-5 flex-wrap">
                  {SNS_OPTIONS.map(({ key }) => (
                    <SocialLink
                      key={key}
                      type={key}
                      value={socialValues[key]}
                      theme={theme}
                    />
                  ))}
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
    </>
  );
}
