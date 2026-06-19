import { useState } from "react";

export default function SnsInput({
  snsKey,
  icon,
  label,
  placeholder,
  prefix,
  value,
  onChange,
}) {
  const [pasted, setPasted] = useState(false);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      onChange({ target: { value: text } });
      setPasted(true);
      setTimeout(() => setPasted(false), 1500);
    } catch {}
  };

  const inputWithButton = (inner) => (
    <div className="relative flex items-center">
      {inner}
      <button
        type="button"
        onClick={handlePaste}
        className="absolute right-0 pb-2 text-[#CCC] transition-colors hover:text-[#111]"
        title="クリップボードから貼り付け"
      >
        <i className={pasted ? "fa-solid fa-check text-green-500" : "fa-regular fa-paste"} />
      </button>
    </div>
  );

  return (
    <div className="fade-in-down">
      <label className="block text-[11px] font-medium text-[#111]">
        <i className={`${icon} mr-1`} />
        {label}
        <span className="ml-1 font-light text-[#888]">
          {snsKey === "line" ? "URLまたはID" : "ユーザー名"}
        </span>
      </label>
      {prefix ? (
        inputWithButton(
          <div className="flex w-full items-center gap-1 pr-6">
            <span className="text-xs text-[#AAA]">{prefix}</span>
            <input
              type="text"
              className="input-field"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          </div>
        )
      ) : (
        inputWithButton(
          <input
            type="text"
            className="input-field pr-6"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )
      )}
    </div>
  );
}
