"use client";

import { CARD_THEMES } from "../../../lib/card";

export default function CardTemplate1({
  name,
  roman,
  affiliation,
  skill,
  message,
}) {
  const theme = CARD_THEMES.stone;

  return (
    <div
      className={`w-full h-full rounded-sm shadow-xl p-8 flex flex-col justify-between items-center text-center border ${theme.bg} ${theme.border}`}
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
          <p
            className={`font-light text-[10px] leading-relaxed ${theme.textTertiary}`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
