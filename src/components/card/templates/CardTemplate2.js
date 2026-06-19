"use client";

export default function CardTemplate2({
  name,
  roman,
  affiliation,
  skill,
  message,
}) {
  const hasBottom = Boolean(skill || message);

  return (
    <div
      className="w-full h-full bg-[#fdfaf9] rounded-sm shadow-xl p-8 flex flex-col justify-between items-center text-center border border-[#e3dad5]/50"
      style={{ color: "#5c4e48" }}
    >
      <div className="mt-6 text-center">
        <p className="text-[10px] tracking-[0.25em] font-light" style={{ color: "#bfa095" }}>
          {affiliation}
        </p>
      </div>

      <div className="space-y-2">
        <h1
          className="text-2xl font-light tracking-[0.3em]"
          style={{
            fontFamily: "var(--font-cormorant-garamond), serif",
            color: "#5c4e48",
          }}
        >
          {name}
        </h1>
        {roman && (
          <p className="text-[8px] tracking-[0.2em] uppercase font-light" style={{ color: "#b0a09a" }}>
            {roman}
          </p>
        )}
      </div>

      <div className="mb-6 w-full flex flex-col items-center gap-2">
        {hasBottom && (
          <div className="w-4 h-[1px] mb-1" style={{ backgroundColor: "#bfa095" }} />
        )}
        {skill && (
          <p className="text-[9px] tracking-[0.2em]" style={{ color: "#b0a09a" }}>
            {skill}
          </p>
        )}
        {message && (
          <p className="text-[8px] tracking-[0.15em] font-light" style={{ color: "#c8bdb8" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
