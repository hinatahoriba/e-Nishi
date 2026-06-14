"use client";

import { COLOR_OPTIONS } from "../../lib/card";

export default function Step2ThemePicker({ selectedColor, setSelectedColor }) {
  return (
    <div className="space-y-6">
      <label className="input-label mb-4">カードのテーマカラーを選択</label>
      <div className="flex flex-wrap gap-4">
        {COLOR_OPTIONS.map((color) => (
          <button
            key={color.key}
            type="button"
            className={`h-12 w-12 rounded-full ${color.bgClass} transition-all duration-300 ${color.hoverClass} ${
              selectedColor === color.key
                ? `border-4 ${color.borderClass} ring-4 ${color.ringClass}`
                : `border-2 ${color.borderClass}`
            }`}
            onClick={() => setSelectedColor(color.key)}
          />
        ))}
      </div>
    </div>
  );
}
