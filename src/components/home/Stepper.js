import BrandLogo from "./BrandLogo";
import StepCircle from "./StepCircle";
import { STEP_SEQUENCE } from "../../lib/card";

export default function Stepper({ currentStep }) {
  return (
    <div className="fixed top-0 left-0 z-50 w-full border-b border-[#EAEAEA] bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <BrandLogo />

          <div className="flex w-full items-center">
            {STEP_SEQUENCE.map((step, idx) => (
              <div
                key={step.num}
                className="relative flex flex-1 flex-col items-center"
              >
                <div className="flex flex-col items-center">
                  <StepCircle stepNum={step.num} currentStep={currentStep} />
                  <p
                    className={`mt-1.5 text-[10px] tracking-[0.15em] ${
                      step.num < currentStep
                        ? "font-medium text-[#111]"
                        : step.num === currentStep
                          ? "font-semibold text-[#111]"
                          : "font-normal text-[#AAA]"
                    }`}
                  >
                    {step.label}
                  </p>
                </div>
                {idx < STEP_SEQUENCE.length - 1 && (
                  <div
                    className={`absolute top-4 left-1/2 h-[1px] w-full transition-all duration-500 ${
                      step.num < currentStep ? "bg-[#111]" : "bg-[#EAEAEA]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
