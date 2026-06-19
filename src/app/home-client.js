"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  STEP_DATA,
  TOTAL_STEPS,
  buildCardUrl,
  getInitialActiveSns,
  getInitialFormData,
  parseCardParams,
  splitNameParts,
} from "../lib/card";
import Stepper from "../components/home/Stepper";
import Step1Form from "../components/home/Step1Form";
import Step2ThemePicker from "../components/home/Step2ThemePicker";
import Step3SocialLinks from "../components/home/Step3SocialLinks";
import Step4Share from "../components/home/Step4Share";

export default function HomeClient() {
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState(
    parseCardParams(searchParams).template
  );
  const [activeSns, setActiveSns] = useState(() =>
    getInitialActiveSns(searchParams)
  );
  const [formData, setFormData] = useState(() =>
    getInitialFormData(searchParams)
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParamsString);
    setSelectedTemplate(parseCardParams(params).template);
    setActiveSns(getInitialActiveSns(params));
    setFormData(getInitialFormData(params));
  }, [searchParamsString]);

  useEffect(() => {
    // Mobile browsers can keep the page zoomed after an input focus;
    // clearing focus when the step changes avoids carrying that state into STEP2.
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, [currentStep]);

  const nameParts = splitNameParts(formData.name);
  const romanParts = splitNameParts(formData.roman);

  const isStep1Complete =
    nameParts.familyName.length > 0 &&
    nameParts.givenName.length > 0 &&
    romanParts.familyName.length > 0 &&
    romanParts.givenName.length > 0 &&
    formData.affiliation.trim().length > 0;

  const toggleSns = (key) => {
    setActiveSns((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleNext = () => {
    if (currentStep === 1 && !isStep1Complete) {
      return;
    }

    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("新しいカードを作成します（初期画面に戻るなどの処理）");
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const cardUrl = buildCardUrl(formData, selectedTemplate);

  return (
    <>
      <Stepper currentStep={currentStep} />

      <div className="w-full mx-auto max-w-xl px-3 sm:px-6 pb-24 pt-28 sm:pt-36">
        <div className="min-h-[400px] flex flex-col justify-start rounded-sm border border-[#EAEAEA] bg-white p-5 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="mb-8">
            <h2 className="mb-2 text-lg font-light tracking-[0.1em] text-[#111]">
              {STEP_DATA[currentStep].title}
            </h2>
            <p className="text-xs font-light leading-relaxed text-[#888]">
              {STEP_DATA[currentStep].desc}
            </p>
          </div>

          <div className={`w-full min-w-0 ${currentStep === 4 ? "flex-1" : ""}`}>
            {currentStep === 1 && (
              <Step1Form formData={formData} setFormData={setFormData} />
            )}
            {currentStep === 2 && (
              <Step2ThemePicker
                formData={formData}
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
              />
            )}
            {currentStep === 3 && (
              <Step3SocialLinks
                formData={formData}
                setFormData={setFormData}
                activeSns={activeSns}
                toggleSns={toggleSns}
                selectedTemplate={selectedTemplate}
              />
            )}
            {currentStep === 4 && <Step4Share cardUrl={cardUrl} />}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-[#F5F5F5] pt-6">
            <button
              type="button"
              onClick={handlePrev}
              className="flex items-center gap-2 text-xs font-light tracking-[0.1em] text-[#888] transition-colors duration-300 hover:text-[#111] outline-none"
              style={{
                opacity: currentStep === 1 ? 0 : 1,
                pointerEvents: currentStep === 1 ? "none" : "auto",
              }}
            >
              <span className="text-base font-light">←</span> BACK
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={currentStep === 1 && !isStep1Complete}
              aria-disabled={currentStep === 1 && !isStep1Complete}
              className="flex items-center gap-2 text-xs font-light tracking-[0.1em] text-[#111] transition-colors duration-300 hover:text-[#888] outline-none disabled:cursor-not-allowed disabled:text-[#C7C7C7] disabled:hover:text-[#C7C7C7]"
            >
              {currentStep === TOTAL_STEPS ? (
                <>
                  FINISH <span className="text-base font-light">✓</span>
                </>
              ) : (
                <>
                  NEXT <span className="text-base font-light">→</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
