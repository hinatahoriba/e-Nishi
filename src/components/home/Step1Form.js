import { MESSAGE_MAX_LENGTH } from "../../lib/card";

export default function Step1Form({ formData, setFormData }) {
  return (
    <div className="space-y-6">
      <div>
        <label className="input-label">
          氏名<span className="required-mark">必須</span>
        </label>
        <input
          type="text"
          className="input-field"
          placeholder="山田 太郎"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="input-label">
            ローマ字<span className="required-mark">必須</span>
          </label>
          <input
            type="text"
            className="input-field text-base"
            style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
            placeholder="Taro Yamada"
            value={formData.roman}
            onChange={(e) => setFormData({ ...formData, roman: e.target.value })}
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
