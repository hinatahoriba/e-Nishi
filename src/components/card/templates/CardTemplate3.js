"use client";

export default function CardTemplate3({
  name,
  roman,
  affiliation,
  skill,
  message,
}) {
  return (
    <div className="relative flex h-full w-full select-none flex-col justify-between overflow-hidden rounded-sm border border-[#d8deda] bg-[#f4f6f5] p-8 text-[#1a201c] shadow-xl">
      <div className="absolute bottom-0 top-0 left-6 w-px bg-[#2c3b31]/15" />

      <div className="z-10 pl-4 pt-4">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-[#2c3b31]">
            <i className="fa-solid fa-university" />
          </span>
          <span className="font-sans text-sm font-medium tracking-[0.15em] uppercase">
            {affiliation}
          </span>
        </div>
        <p className="mt-0.5 pl-4 text-[7px] uppercase tracking-[0.1em] text-[#5a635e]">
          所属研究室・部署など
        </p>
      </div>

      <div className="z-10 space-y-2 pl-4">
        <span className="block text-[7px] font-medium uppercase tracking-[0.25em] text-[#5a635e]">
          MEMBER
        </span>
        <div className="space-y-1">
          <h1 className="font-sans text-2xl font-medium tracking-[0.2em] text-[#1a201c]">
            {name}
          </h1>
          <p className="text-[9px] font-light tracking-[0.1em] text-[#5a635e]">
            {roman}
          </p>
        </div>
      </div>

      <div className="z-10 border-t border-[#2c3b31]/10 pb-4 pl-4 pt-4">
        {skill && (
          <div className="flex items-start gap-2 text-[8.5px] leading-relaxed text-[#5a635e]">
            <span className="mt-0.5 w-3 text-[#2c3b31]/60">
              <i className="fa-solid fa-heart" />
            </span>
            <div>
              <span className="mb-0.5 block text-[7px] tracking-wider text-[#2c3b31]/50 uppercase">
                HOBBY
              </span>
              <span className="tracking-wide">趣味：{skill}</span>
            </div>
          </div>
        )}

        {message && (
          <div className="mt-3 flex items-start gap-2 text-[8.5px] leading-relaxed text-[#5a635e]">
            <span className="mt-0.5 w-3 text-[#2c3b31]/60">
              <i className="fa-solid fa-comment-dots" />
            </span>
            <div>
              <span className="mb-0.5 block text-[7px] tracking-wider text-[#2c3b31]/50 uppercase">
                MESSAGE
              </span>
              <span className="tracking-wide">{message}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
