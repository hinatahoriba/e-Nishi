"use client";

import { SNS_OPTIONS, SNS_PLACEHOLDERS } from "../../lib/card";
import SnsInput from "./SnsInput";

export default function Step3SocialLinks({
  formData,
  setFormData,
  activeSns,
  toggleSns,
}) {
  return (
    <div className="space-y-6">
      <div>
        <label className="input-label">ポートフォリオ</label>
        <input
          type="url"
          className="input-field"
          placeholder="https://your-portfolio.com"
          value={formData.portfolio}
          onChange={(e) =>
            setFormData({ ...formData, portfolio: e.target.value })
          }
        />
      </div>

      <div className="pt-2">
        <span className="input-label mb-3">追加したいSNSを選択してください</span>

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
    </div>
  );
}
