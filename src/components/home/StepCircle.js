export default function StepCircle({ stepNum, currentStep }) {
  if (stepNum < currentStep) {
    return (
      <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#111] text-[11px] font-light text-white transition-all duration-500">
        ✓
      </div>
    );
  }

  if (stepNum === currentStep) {
    return (
      <div
        className="z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#111] bg-white text-sm font-light text-[#111] shadow-sm transition-all duration-500 scale-105"
        style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
      >
        {stepNum < 10 ? `0${stepNum}` : stepNum}
      </div>
    );
  }

  return (
    <div
      className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F3F3] text-sm font-light text-[#AAA] transition-all duration-500"
      style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
    >
      {stepNum < 10 ? `0${stepNum}` : stepNum}
    </div>
  );
}
