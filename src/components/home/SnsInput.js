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
      {snsKey === "insta" && (
        <div className="mt-2 rounded-lg bg-[#FFF5F8] px-3 py-2.5 text-[11px] text-[#555]">
          <p className="mb-1.5 font-medium text-[#333]">ユーザー名の確認方法</p>
          <ol className="space-y-1 leading-relaxed">
            <li className="flex items-center gap-2">
              <span className="font-medium text-[#C13584]">①</span>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-3 py-1 text-[11px] font-medium text-white transition-opacity hover:opacity-80"
              >
                <i className="fa-brands fa-instagram text-sm" />
                プロフィール画面を開く
              </a>
            </li>
            <li>
              <span className="mr-1 font-medium text-[#C13584]">②</span>
              名前の下の「@ユーザー名」を確認
            </li>
            <li>
              <span className="mr-1 font-medium text-[#C13584]">③</span>
              @を除いたユーザー名を戻ってきて入力
            </li>
          </ol>
        </div>
      )}
      {snsKey === "tiktok" && (
        <div className="mt-2 rounded-lg bg-[#F7F7F7] px-3 py-2.5 text-[11px] text-[#555]">
          <p className="mb-1.5 font-medium text-[#333]">ユーザー名の確認方法</p>
          <ol className="space-y-1 leading-relaxed">
            <li className="flex items-center gap-2">
              <span className="font-medium text-[#010101]">①</span>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-[#010101] px-3 py-1 text-[11px] font-medium text-white transition-opacity hover:opacity-70"
              >
                <i className="fa-brands fa-tiktok text-sm" />
                プロフィール画面を開く
              </a>
            </li>
            <li>
              <span className="mr-1 font-medium text-[#010101]">②</span>
              プロフィール画面で「@ユーザー名」を確認
            </li>
            <li>
              <span className="mr-1 font-medium text-[#010101]">③</span>
              @を除いたユーザー名を戻ってきて入力
            </li>
          </ol>
        </div>
      )}
      {snsKey === "github" && (
        <div className="mt-2 rounded-lg bg-[#F6F8FA] px-3 py-2.5 text-[11px] text-[#555]">
          <p className="mb-1.5 font-medium text-[#333]">ユーザー名の確認方法</p>
          <ol className="space-y-1 leading-relaxed">
            <li className="flex items-center gap-2">
              <span className="font-medium text-[#181717]">①</span>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-[#181717] px-3 py-1 text-[11px] font-medium text-white transition-opacity hover:opacity-70"
              >
                <i className="fa-brands fa-github text-sm" />
                プロフィール画面を開く
              </a>
            </li>
            <li>
              <span className="mr-1 font-medium text-[#181717]">②</span>
              アイコン横の「ユーザー名」を確認
            </li>
            <li>
              <span className="mr-1 font-medium text-[#181717]">③</span>
              ユーザー名を戻ってきて入力
            </li>
          </ol>
        </div>
      )}
      {snsKey === "x" && (
        <div className="mt-2 rounded-lg bg-[#F7F7F7] px-3 py-2.5 text-[11px] text-[#555]">
          <p className="mb-1.5 font-medium text-[#333]">ユーザー名の確認方法</p>
          <ol className="space-y-1 leading-relaxed">
            <li className="flex items-center gap-2">
              <span className="font-medium text-[#111]">①</span>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-[#111] px-3 py-1 text-[11px] font-medium text-white transition-opacity hover:opacity-70"
              >
                <i className="fa-brands fa-x-twitter text-sm" />
                プロフィール画面を開く
              </a>
            </li>
            <li>
              <span className="mr-1 font-medium text-[#111]">②</span>
              プロフィール画面で「@ユーザー名」を確認
            </li>
            <li>
              <span className="mr-1 font-medium text-[#111]">③</span>
              @を除いたユーザー名を戻ってきて入力
            </li>
          </ol>
        </div>
      )}
      {snsKey === "line" && (
        <div className="mt-2 rounded-lg bg-[#F6FFF6] px-3 py-2.5 text-[11px] text-[#555]">
          <p className="mb-1.5 font-medium text-[#333]">LINEのURLの取得方法</p>
          <ol className="space-y-1 leading-relaxed">
            <li className="flex items-center gap-2">
              <span className="font-medium text-[#06C755]">①</span>
              <a
                href="https://line.me/R/nv/QRCodeReader"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-[#06C755] px-3 py-1 text-[11px] font-medium text-white transition-opacity hover:opacity-80"
              >
                <i className="fa-brands fa-line text-sm" />
                QRコードリーダーを起動
              </a>
            </li>
            <li>
              <span className="mr-1 font-medium text-[#06C755]">②</span>
              画面下部の「マイQRコード」を押す
            </li>
            <li>
              <span className="mr-1 font-medium text-[#06C755]">③</span>
              「リンクをコピー」して戻ってきて貼り付け
            </li>
          </ol>
        </div>
      )}
    </div>
  );
}
