"use client";

export default function CardTemplate6({
  name,
  roman,
  affiliation,
  skill,
  message,
}) {
  return (
    <div className="relative flex h-full w-full select-none flex-col justify-between overflow-hidden rounded-sm border-2 border-[#d6e2ee] bg-white p-8 text-center text-[#6b7b8c] shadow-xl">
      <div className="absolute inset-2 rounded-lg border border-dashed border-[#d6e2ee]" />

      <div className="relative z-10 mt-4 space-y-1">
        <div className="mb-1 text-lg text-[#a6c1ee]">
          <i className="fa-solid fa-ribbon" />
        </div>
        <span className="font-serif text-sm font-semibold tracking-[0.1em] text-[#526273]">
          {affiliation}
        </span>
        <p className="text-[8px] uppercase tracking-[0.15em] text-[#a6c1ee]">
          organization / company
        </p>
      </div>

      <div className="relative z-10 space-y-1">
        <p className="text-[8px] uppercase tracking-[0.2em] text-stone-400">
          name
        </p>
        <h1 className="font-serif text-xl font-medium tracking-[0.2em] text-[#526273]">
          {name}
        </h1>
        <p className="text-[9px] font-light tracking-[0.1em] text-[#a6c1ee]">
          {roman}
        </p>
      </div>

      <div className="relative z-10 mb-4 space-y-2 text-center">
        {skill && (
          <p className="text-[10px] tracking-[0.05em] text-[#526273]">
            <span className="mb-0.5 block text-[8px] uppercase tracking-[0.1em] text-stone-400">
              Hobby
            </span>
            {skill}
          </p>
        )}
        {message && (
          <p className="mt-1 text-[10px] italic tracking-[0.05em] text-stone-400">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
