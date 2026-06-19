import {
  joinNameParts,
  MESSAGE_MAX_LENGTH,
  splitNameParts,
} from "../../lib/card";

export default function Step1Form({ formData, setFormData }) {
  const nameParts = splitNameParts(formData.name);
  const romanParts = splitNameParts(formData.roman);

  const updateName = (familyName, givenName) => {
    setFormData((prev) => ({
      ...prev,
      name: joinNameParts(familyName, givenName),
    }));
  };

  const updateRoman = (familyName, givenName) => {
    setFormData((prev) => ({
      ...prev,
      roman: joinNameParts(familyName, givenName),
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="input-label">
          氏名<span className="required-mark">必須</span>
        </label>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <input
            type="text"
            className="input-field"
            placeholder="姓：山田"
            aria-label="氏名の姓"
            autoComplete="family-name"
            value={nameParts.familyName}
            onChange={(e) => updateName(e.target.value, nameParts.givenName)}
          />
          <input
            type="text"
            className="input-field"
            placeholder="名：太郎"
            aria-label="氏名の名"
            autoComplete="given-name"
            value={nameParts.givenName}
            onChange={(e) => updateName(nameParts.familyName, e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="input-label">
          フリガナ（ローマ字）<span className="required-mark">必須</span>
        </label>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <input
            type="text"
            className="input-field text-base"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            placeholder="姓：Yamada"
            aria-label="フリガナの姓"
            autoComplete="family-name"
            value={romanParts.familyName}
            onChange={(e) => updateRoman(e.target.value, romanParts.givenName)}
          />
          <input
            type="text"
            className="input-field text-base"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            placeholder="名：Taro"
            aria-label="フリガナの名"
            autoComplete="given-name"
            value={romanParts.givenName}
            onChange={(e) => updateRoman(romanParts.familyName, e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="input-label">
          所属（大学・会社など）<span className="required-mark">必須</span>
        </label>
        <input
          type="text"
          className="input-field"
          placeholder="〇〇大学・株式会社〇〇"
          value={formData.affiliation}
          onChange={(e) =>
            setFormData({ ...formData, affiliation: e.target.value })
          }
        />
      </div>
      <div>
        <label className="input-label">趣味</label>
        <input
          type="text"
          className="input-field"
          placeholder="読書、写真撮影"
          value={formData.skill}
          onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
        />
      </div>
      <div>
        <label className="input-label">一言メッセージ</label>
        <textarea
          className="input-field h-16 resize-none"
          maxLength={MESSAGE_MAX_LENGTH}
          aria-describedby="message-limit"
          placeholder="よろしくお願いします。"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        <p id="message-limit" className="mt-1 text-right text-[10px] text-[#AAA]">
          {formData.message.length}/{MESSAGE_MAX_LENGTH}文字
        </p>
      </div>
    </div>
  );
}
