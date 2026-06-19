"use client";

export default function CardTemplate2({
  name,
  roman,
  affiliation,
  skill,
  message,
}) {
  return (
    <div className="relative flex h-full w-full select-none flex-col justify-between overflow-hidden rounded-sm border border-blue-50/50 bg-white p-8 text-center text-[#56687a] shadow-xl">
      <div className="absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-blue-100/40 blur-2xl" />
      <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-indigo-50/60 blur-xl" />

      <div className="z-10 mt-4 space-y-1">
        <div className="text-xs text-[#96b3cc]">
          <i className="fa-regular fa-moon" />
        </div>
        <span className="font-serif text-sm font-light tracking-[0.1em] text-[#56687a]">
          {affiliation}
        </span>
        <p className="text-[7px] uppercase tracking-[0.15em] text-[#96b3cc]">
          affiliation
        </p>
      </div>

      <div className="z-10 space-y-1.5">
        <p className="text-[8px] uppercase tracking-[0.15em] text-stone-300">
          name
        </p>
        <h1 className="font-sans text-xl font-light tracking-[0.25em] text-[#425366]">
          {name}
        </h1>
        <p className="text-[8px] font-light tracking-[0.05em] italic text-[#96b3cc]">
          {roman}
        </p>
      </div>

      <div className="z-10 mb-4 flex flex-col items-center gap-1 text-[9px] font-light tracking-widest text-[#96b3cc]">
        {skill && (
          <div className="flex items-center gap-1 text-[#7a9bb8]">
            <span>趣味：{skill}</span>
          </div>
        )}
        {message && (
          <span className="mt-0.5 text-[8px] tracking-wider text-stone-400">
            {message}
          </span>
        )}
      </div>
    </div>
  );
}
