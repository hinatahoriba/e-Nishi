"use client";

import { useState } from "react";
import { CARD_TEMPLATES } from "../card/templates";
import BusinessCard from "../card/BusinessCard";

const CARD_W = 320;
const CARD_H = Math.round(CARD_W * (91 / 55));

const THUMB_W = 96;
const THUMB_SCALE = THUMB_W / CARD_W;
const THUMB_H = Math.round(CARD_H * THUMB_SCALE);

const PREVIEW_W = 200;
const PREVIEW_H = Math.round(CARD_H * (PREVIEW_W / CARD_W));
const PREVIEW_SCALE = PREVIEW_W / CARD_W;

function CardPreview({ formData, selectedTemplate }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const previewData = {
    name: formData.name || "山田 花子",
    roman: formData.roman || "Yamada Hanako",
    affiliation: formData.affiliation || "株式会社サンプル",
    skill: formData.skill || "",
    message: formData.message || "",
    portfolio: formData.portfolio || "",
    line: formData.line || "",
    twitter: formData.x || "",
    insta: formData.insta || "",
    tiktok: formData.tiktok || "",
    github: formData.github || "",
  };

  const hasBackContent = Boolean(
    previewData.portfolio || previewData.line || previewData.twitter ||
    previewData.insta || previewData.tiktok || previewData.github
  );

  return (
    <div className="flex justify-center">
      <div
        style={{
          width: PREVIEW_W,
          height: PREVIEW_H,
          position: "relative",
          overflow: "hidden",
          cursor: hasBackContent ? "pointer" : "default",
        }}
        onClick={() => hasBackContent && setIsFlipped((prev) => !prev)}
      >
        <div
          style={{
            width: CARD_W,
            height: CARD_H,
            transform: `scale(${PREVIEW_SCALE})`,
            transformOrigin: "top left",
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        >
          <BusinessCard
            {...previewData}
            templateId={selectedTemplate}
            isFlipped={isFlipped}
            onToggleFlip={() => setIsFlipped((prev) => !prev)}
            className="w-80"
            showFlipHint={false}
          />
        </div>
      </div>
    </div>
  );
}

function TemplateThumbnail({ template, isSelected, onClick, formData }) {
  const { component: TemplateComponent } = template;

  const previewData = {
    name: formData.name || "山田 花子",
    roman: formData.roman || "Yamada Hanako",
    affiliation: formData.affiliation || "株式会社サンプル",
    skill: formData.skill || "",
    message: formData.message || "",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-shrink-0 flex flex-col items-center gap-2.5 outline-none group"
      aria-label={`テンプレートを選択: ${template.label ?? template.id}`}
      aria-pressed={isSelected}
    >
      <div
        style={{ width: THUMB_W, height: THUMB_H }}
        className={`relative overflow-hidden rounded-sm transition-all duration-300 ${
          isSelected
            ? "ring-2 ring-offset-2 ring-[#111] shadow-md"
            : "ring-1 ring-[#e0e0e0] opacity-65 group-hover:opacity-100 group-hover:ring-[#999] group-hover:shadow-sm"
        }`}
      >
        <div
          style={{
            width: CARD_W,
            height: CARD_H,
            transform: `scale(${THUMB_SCALE})`,
            transformOrigin: "top left",
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        >
          <TemplateComponent {...previewData} />
        </div>
      </div>
    </button>
  );
}

export default function Step2ThemePicker({
  formData,
  selectedTemplate,
  setSelectedTemplate,
}) {
  return (
    <div className="space-y-5">
      <CardPreview formData={formData} selectedTemplate={selectedTemplate} />

      <div className="space-y-5">
        <label className="input-label">デザインテンプレートを選択</label>
        <div
          className="flex gap-4 overflow-x-auto py-3 px-1 w-full"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#ddd transparent", WebkitOverflowScrolling: "touch" }}
        >
          {CARD_TEMPLATES.map((template) => (
            <TemplateThumbnail
              key={template.id}
              template={template}
              isSelected={selectedTemplate === template.id}
              onClick={() => setSelectedTemplate(template.id)}
              formData={formData}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
