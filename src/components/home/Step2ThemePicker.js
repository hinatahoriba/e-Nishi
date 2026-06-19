"use client";

import { CARD_TEMPLATES } from "../card/templates";

const CARD_W = 320;
const CARD_H = Math.round(CARD_W * (91 / 55));

const THUMB_W = 96;
const SCALE = THUMB_W / CARD_W;
const THUMB_H = Math.round(CARD_H * SCALE);

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
            transform: `scale(${SCALE})`,
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
      <label className="input-label">デザインテンプレートを選択</label>
      <div
        className="flex gap-4 overflow-x-auto py-3 px-2 -mx-1"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#ddd transparent" }}
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
  );
}
