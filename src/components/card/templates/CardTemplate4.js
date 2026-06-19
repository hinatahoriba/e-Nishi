"use client";

export default function CardTemplate4({
  name,
  roman,
  affiliation,
  skill,
  message,
}) {
  return (
    <div className="relative flex h-full w-full select-none flex-col justify-between overflow-hidden rounded-sm border border-[#e2e8f0] bg-[#fcfcfc] p-8 text-[#2d3748] shadow-xl">
      <div className="absolute left-4 top-4 h-2 w-2 border-l border-t border-[#cbd5e0]" />
      <div className="absolute bottom-4 right-4 h-2 w-2 border-b border-r border-[#cbd5e0]" />

      <div className="z-10 mt-2 flex justify-between">
        <span
          className="text-[8px] font-light tracking-[0.1em] text-[#718096]"
          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
        >
          {message || "ここに一言メッセージが入ります。"}
        </span>
      </div>

      <div className="z-10 mb-6 pl-2">
        <p
          className="mb-1 text-[7px] uppercase tracking-[0.25em] text-[#a0aec0]"
          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
        >
          NAME
        </p>
        <h1
          className="text-2xl font-light tracking-[0.2em] text-[#1a202c]"
          style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
        >
          {name}
        </h1>
        <p
          className="mt-0.5 text-[8px] uppercase tracking-wide text-[#a0aec0]"
          style={{
            fontFamily:
              "var(--font-montserrat), var(--font-noto-sans-jp), sans-serif",
          }}
        >
          {roman}
        </p>
      </div>

      <div
        className="z-10 mb-2 space-y-1 pr-2 text-right text-[8px] text-[#4a5568]"
        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
      >
        <p className="font-medium text-[#1a202c]">{affiliation}</p>
        {skill && <p className="text-[#718096]">趣味：{skill}</p>}
      </div>
    </div>
  );
}
