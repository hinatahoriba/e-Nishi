export default function SnsInput({
  snsKey,
  icon,
  label,
  placeholder,
  prefix,
  value,
  onChange,
}) {
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
        <div className="flex items-center gap-1">
          <span className="text-xs text-[#AAA]">{prefix}</span>
          <input
            type="text"
            className="input-field"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      ) : (
        <input
          type="text"
          className="input-field"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
