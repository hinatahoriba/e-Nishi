"use client";

export default function CardTemplate5({
  name,
  roman,
  affiliation,
  skill,
  message,
}) {
  return (
    <div className="relative flex h-full w-full select-none flex-col justify-between overflow-hidden rounded-sm border border-purple-100 bg-[#fdfcfa] p-8 text-center text-[#5a5266] shadow-xl">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-200/50 blur-2xl" />
      <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-amber-100/60 blur-2xl" />

      <div className="z-10 mt-6 space-y-1">
        <span className="block text-xl font-bold tracking-[0.15em] text-[#5a5266]">
          {affiliation}
        </span>
        <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-purple-400">
          organization
        </p>
      </div>

      <div className="z-10 space-y-1">
        <p className="text-[9px] tracking-[0.15em] text-stone-400">NAME</p>
        <h1 className="text-xl font-semibold tracking-[0.1em] text-[#4a4256]">
          {name}
        </h1>
        <p className="text-[10px] font-light tracking-[0.05em] text-purple-400">
          {roman}
        </p>
      </div>

      <div className="z-10 mb-4 space-y-1">
        {skill && (
          <p className="text-[10px] tracking-[0.05em] text-stone-400">
            趣味：{skill}
          </p>
        )}
        {message && (
          <p className="text-[11px] font-medium tracking-[0.05em] text-amber-500">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
