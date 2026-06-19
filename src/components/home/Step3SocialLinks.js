"use client";

import { useState } from "react";
import { SNS_OPTIONS, SNS_PLACEHOLDERS } from "../../lib/card";
import BusinessCard from "../card/BusinessCard";
import SnsInput from "./SnsInput";

const BACK_PREVIEW_SAMPLE = {
  name: "山田 花子",
  roman: "Yamada Hanako",
  affiliation: "株式会社サンプル",
  skill: "企画 / デザイン",
  message: "よろしくお願いします。",
  portfolio: "https://example.com/portfolio",
  line: "sample-line-id",
  x: "sample_name",
  insta: "sample.creator",
  tiktok: "sample.creator",
  github: "sample-user",
};

function BackPreviewCard({ formData, selectedTemplate, showSample }) {
  const previewData = showSample
    ? BACK_PREVIEW_SAMPLE
    : {
        name: formData.name,
        roman: formData.roman,
        affiliation: formData.affiliation,
        skill: formData.skill,
        message: formData.message,
        portfolio: formData.portfolio,
        line: formData.line,
        twitter: formData.x,
        insta: formData.insta,
        tiktok: formData.tiktok,
        github: formData.github,
  };

  return (
    <div className="pointer-events-none mx-auto flex w-full max-w-[14rem] justify-center">
      <BusinessCard
        {...previewData}
        templateId={selectedTemplate}
        isFlipped
        onToggleFlip={() => {}}
        className="w-full"
        showFlipHint={false}
      />
    </div>
  );
}

export default function Step3SocialLinks({
  formData,
  setFormData,
  activeSns,
  toggleSns,
  selectedTemplate,
}) {
  const [portfolioPasted, setPortfolioPasted] = useState(false);

  const handlePastePortfolio = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setFormData({ ...formData, portfolio: text });
      setPortfolioPasted(true);
      setTimeout(() => setPortfolioPasted(false), 1500);
    } catch {}
  };

  const hasPortfolio = Boolean(formData.portfolio.trim());
  const hasSNS = Boolean(
    formData.line.trim() ||
      formData.x.trim() ||
      formData.insta.trim() ||
      formData.tiktok.trim() ||
      formData.github.trim()
  );
  const showSamplePreview = !hasPortfolio && !hasSNS;

  return (
    <div className="space-y-5">
      <BackPreviewCard
        formData={formData}
        selectedTemplate={selectedTemplate}
        showSample={showSamplePreview}
      />

      <div className="space-y-5">
        <div>
          <label className="input-label">ポートフォリオ</label>
          <div className="relative flex items-center">
            <input
              type="url"
              className="input-field pr-6"
              placeholder="https://your-portfolio.com"
              value={formData.portfolio}
              onChange={(e) =>
                setFormData({ ...formData, portfolio: e.target.value })
              }
            />
            <button
              type="button"
              onClick={handlePastePortfolio}
              className="absolute right-0 pb-2 text-[#CCC] transition-colors hover:text-[#111]"
              title="クリップボードから貼り付け"
            >
              <i className={portfolioPasted ? "fa-solid fa-check text-green-500" : "fa-regular fa-paste"} />
            </button>
          </div>
        </div>

        <div>
          <span className="input-label mb-3">
            追加したいSNSを選択してください
          </span>

          <div className="mb-6 flex flex-wrap gap-2">
            {SNS_OPTIONS.map((sns) => (
              <button
                key={sns.key}
                type="button"
                className={`flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs transition-all outline-none ${
                  activeSns.includes(sns.key)
                    ? "border-[#111] bg-[#111] text-white"
                    : "border-[#EAEAEA] bg-white text-[#888] hover:border-[#111] hover:text-[#111]"
                }`}
                onClick={() => toggleSns(sns.key)}
              >
                <i className={`${sns.icon} text-sm`} />
                <span>{sns.label}</span>
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {activeSns.map((snsKey) => {
              const snsOption = SNS_OPTIONS.find((s) => s.key === snsKey);
              if (!snsOption) {
                return null;
              }

              const { placeholder, prefix } = SNS_PLACEHOLDERS[snsKey];

              return (
                <SnsInput
                  key={snsKey}
                  snsKey={snsKey}
                  icon={snsOption.icon}
                  label={snsOption.label}
                  placeholder={placeholder}
                  prefix={prefix}
                  value={formData[snsKey]}
                  onChange={(e) =>
                    setFormData({ ...formData, [snsKey]: e.target.value })
                  }
                />
              );
            })}
          </div>
        </div>

        <p className="text-[11px] leading-relaxed text-[#888]">
          ポートフォリオリンク、SNSリンクのどちらも追加しない場合は裏面は作成されません。
        </p>
      </div>
    </div>
  );
}
