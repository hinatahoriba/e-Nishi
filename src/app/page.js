"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const STEP_DATA = {
  1: {
    title: "表面情報の入力",
    desc: "カードのメインとなる基本情報を入力してください。",
  },
  2: {
    title: "デザインの編集",
    desc: "カードのテーマやスタイルを選択してください。",
  },
  3: {
    title: "裏面情報の入力",
    desc: "SNSやポートフォリオのリンクを任意で追加します。",
  },
  4: {
    title: "QRコードと共有",
    desc: "作成したデジタル名刺を保存・共有しましょう。",
  },
};

const TOTAL_STEPS = 4;

const COLOR_OPTIONS = [
  { key: "stone", bgClass: "bg-stone-100", borderClass: "border-stone-300", hoverClass: "hover:border-stone-600", ringClass: "ring-stone-300" },
  { key: "blue", bgClass: "bg-blue-100", borderClass: "border-blue-300", hoverClass: "hover:border-blue-600", ringClass: "ring-blue-300" },
  { key: "rose", bgClass: "bg-rose-100", borderClass: "border-rose-300", hoverClass: "hover:border-rose-600", ringClass: "ring-rose-300" },
  { key: "amber", bgClass: "bg-amber-100", borderClass: "border-amber-300", hoverClass: "hover:border-amber-600", ringClass: "ring-amber-300" },
  { key: "emerald", bgClass: "bg-emerald-100", borderClass: "border-emerald-300", hoverClass: "hover:border-emerald-600", ringClass: "ring-emerald-300" },
  { key: "purple", bgClass: "bg-purple-100", borderClass: "border-purple-300", hoverClass: "hover:border-purple-600", ringClass: "ring-purple-300" },
  { key: "slate", bgClass: "bg-slate-100", borderClass: "border-slate-300", hoverClass: "hover:border-slate-600", ringClass: "ring-slate-300" },
  { key: "dark", bgClass: "bg-zinc-800", borderClass: "border-zinc-700", hoverClass: "hover:border-zinc-500", ringClass: "ring-zinc-700" },
];

const SNS_OPTIONS = [
  { key: "line", icon: "fa-brands fa-line", label: "LINE" },
  { key: "x", icon: "fa-brands fa-x-twitter", label: "X" },
  { key: "insta", icon: "fa-brands fa-instagram", label: "Instagram" },
  { key: "tiktok", icon: "fa-brands fa-tiktok", label: "TikTok" },
  { key: "github", icon: "fa-brands fa-github", label: "GitHub" },
];

function StepCircle({ stepNum, currentStep }) {
  if (stepNum < currentStep) {
    return (
      <div className="w-8 h-8 rounded-full bg-[#111] text-white flex items-center justify-center font-light text-[11px] z-10 transition-all duration-500">
        ✓
      </div>
    );
  }
  if (stepNum === currentStep) {
    return (
      <div className="font-[var(--font-cormorant-garamond)] w-8 h-8 rounded-full border border-[#111] bg-white text-[#111] flex items-center justify-center font-light text-sm z-10 transition-all duration-500 shadow-sm scale-105"
        style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
      >
        {stepNum < 10 ? `0${stepNum}` : stepNum}
      </div>
    );
  }
  return (
    <div className="w-8 h-8 rounded-full bg-[#F3F3F3] text-[#AAA] flex items-center justify-center font-light text-sm z-10 transition-all duration-500"
      style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
    >
      {stepNum < 10 ? `0${stepNum}` : stepNum}
    </div>
  );
}

function BrandLogo() {
  return (
    <Link
      href="/"
      className="hidden shrink-0 items-center gap-3 sm:flex"
      aria-label="E-NISHI home"
    >
      <Image
        src="/icon.png"
        alt="E-NISHI icon"
        width={44}
        height={44}
        className="h-10 w-10 object-contain"
        priority
      />
      <span className="h-10 w-px bg-[#C7A86B]/70" aria-hidden="true" />
      <div className="flex items-baseline gap-3 text-[#222]">
        <span
          className="text-[1.9rem] leading-none tracking-[-0.06em] sm:text-[2.35rem]"
          style={{ fontFamily: "var(--font-cormorant-garamond), serif" }}
        >
          縁
        </span>
        <span className="text-[0.74rem] font-light tracking-[0.34em] text-[#2A2A2A] sm:text-[0.88rem]">
          E-NISHI
        </span>
      </div>
    </Link>
  );
}

function Stepper({ currentStep }) {
  const steps = [
    { num: 1, label: "FRONT" },
    { num: 2, label: "DESIGN" },
    { num: 3, label: "BACK" },
    { num: 4, label: "QR CODE" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-[#EAEAEA]">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <BrandLogo />

          <div className="flex w-full items-center">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="flex-1 relative flex flex-col items-center"
              >
                <div className="flex flex-col items-center">
                  <StepCircle stepNum={step.num} currentStep={currentStep} />
                  <p
                    className={`mt-1.5 text-[10px] tracking-[0.15em] ${
                      step.num < currentStep
                        ? "font-medium text-[#111]"
                        : step.num === currentStep
                          ? "font-semibold text-[#111]"
                          : "font-normal text-[#AAA]"
                    }`}
                  >
                    {step.label}
                  </p>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className={`absolute top-4 left-1/2 w-full h-[1px] transition-all duration-500 ${
                      step.num < currentStep ? "bg-[#111]" : "bg-[#EAEAEA]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Step1({ formData, setFormData }) {
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
        <label className="input-label">所属（大学・学部・学科など）</label>
        <input
          type="text"
          className="input-field"
          placeholder="〇〇大学 〇〇学部 〇〇学科"
          value={formData.affiliation}
          onChange={(e) =>
            setFormData({ ...formData, affiliation: e.target.value })
          }
        />
      </div>
      <div>
        <label className="input-label">特技</label>
        <input
          type="text"
          className="input-field"
          placeholder="プログラミング、写真撮影"
          value={formData.skill}
          onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
        />
      </div>
      <div>
        <label className="input-label">一言メッセージ</label>
        <textarea
          className="input-field resize-none h-16"
          placeholder="よろしくお願いします。"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>
    </div>
  );
}

function Step2({ selectedColor, setSelectedColor }) {
  return (
    <div className="space-y-6">
      <label className="input-label mb-4">カードのテーマカラーを選択</label>
      <div className="flex flex-wrap gap-4">
        {COLOR_OPTIONS.map((color) => (
          <button
            key={color.key}
            type="button"
            className={`w-12 h-12 rounded-full ${color.bgClass} transition-all duration-300 ${color.hoverClass} ${
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

function SnsInput({ snsKey, icon, label, placeholder, prefix, value, onChange }) {
  return (
    <div className="fade-in-down">
      <label className="text-[11px] text-[#111] font-medium block">
        <i className={`${icon} mr-1`} />
        {label}
        <span className="text-[#888] font-light ml-1">
          {snsKey === "line"
            ? "URLまたはID"
            : "ユーザー名"}
        </span>
      </label>
      {prefix ? (
        <div className="flex items-center gap-1">
          <span className="text-[#AAA] text-xs">{prefix}</span>
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

const SNS_PLACEHOLDERS = {
  line: { placeholder: "https://line.me/ti/p/...", prefix: null },
  x: { placeholder: "username", prefix: "@" },
  insta: { placeholder: "username", prefix: "@" },
  tiktok: { placeholder: "username", prefix: "@" },
  github: { placeholder: "username", prefix: "github.com/" },
};

function Step3({ formData, setFormData, activeSns, toggleSns }) {
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
        <span className="input-label mb-3">
          追加したいSNSを選択してください
        </span>

        <div className="flex flex-wrap gap-2 mb-6">
          {SNS_OPTIONS.map((sns) => (
            <button
              key={sns.key}
              type="button"
              className={`flex items-center gap-1.5 px-4 py-1.5 border rounded-full text-xs transition-all outline-none ${
                activeSns.includes(sns.key)
                  ? "bg-[#111] text-white border-[#111]"
                  : "bg-white text-[#888] border-[#EAEAEA] hover:border-[#111] hover:text-[#111]"
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

function Step4({ cardUrl }) {
  const handleCopyLink = () => {
    const fullUrl = window.location.origin + cardUrl;

    navigator.clipboard
      .writeText(fullUrl)
      .then(() => {
        alert("リンクをコピーしました！");
      })
      .catch(() => {
        alert("コピーに失敗しました。");
      });
  };

  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    typeof window !== "undefined"
      ? window.location.origin + cardUrl
      : cardUrl
  )}`;

  const handleDownloadQr = async () => {
    try {
      const response = await fetch(qrApiUrl);
      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "digital-business-card-qr.png";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error(error);
      alert("QRコードの保存に失敗しました");
    }
  };

  return (
    <div className="space-y-6 flex flex-col items-center justify-center py-4">
      <div className="p-4 border border-[#EAEAEA] bg-[#FBFBFB] rounded-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={qrApiUrl}
          alt="QR Code"
          className="w-32 h-32 mix-blend-multiply"
        />
      </div>

      <p className="text-[11px] text-[#888] tracking-wider text-center leading-relaxed">
        あなたのデジタル名刺が完成しました。
        <br />
        以下のオプションから共有できます。
      </p>

      <div className="flex flex-col w-full max-w-xs gap-3 mt-4">
        <Link
          href={cardUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 bg-[#111] text-white text-xs tracking-wider rounded-sm hover:bg-[#333] transition-colors duration-300 outline-none"
        >
          <i className="fa-solid fa-arrow-up-right-from-square text-sm" />
          名刺ページを開く
        </Link>

        <button
          type="button"
          onClick={handleCopyLink}
          className="flex items-center justify-center gap-2 py-3 px-4 border border-[#EAEAEA] bg-white text-[#111] text-xs tracking-wider rounded-sm hover:bg-[#F5F5F5] transition-colors duration-300 outline-none"
        >
          <i className="fa-regular fa-copy text-sm" />
          リンクをコピー
        </button>

        <button
          type="button"
          onClick={handleDownloadQr}
          className="flex items-center justify-center gap-2 py-3 px-4 border border-[#EAEAEA] bg-white text-[#111] text-xs tracking-wider rounded-sm hover:bg-[#F5F5F5] transition-colors duration-300 outline-none"
        >
          <i className="fa-solid fa-download text-sm" />
          QRコードを保存
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedColor, setSelectedColor] = useState("stone");
  const [activeSns, setActiveSns] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    roman: "",
    affiliation: "",
    skill: "",
    message: "",
    portfolio: "",
    line: "",
    x: "",
    insta: "",
    tiktok: "",
    github: "",
  });

  const toggleSns = (key) => {
    setActiveSns((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const generateCardUrl = () => {
    const params = new URLSearchParams();
    if (formData.name) params.append("name", formData.name);
    if (formData.roman) params.append("roman", formData.roman);
    if (formData.affiliation) params.append("affiliation", formData.affiliation);
    if (formData.skill) params.append("skill", formData.skill);
    if (formData.message) params.append("message", formData.message);
    if (formData.portfolio) params.append("portfolio", formData.portfolio);
    if (formData.line) params.append("line", formData.line);
    if (formData.x) params.append("x", formData.x);
    if (formData.insta) params.append("insta", formData.insta);
    if (formData.tiktok) params.append("tiktok", formData.tiktok);
    if (formData.github) params.append("github", formData.github);
    if (selectedColor) params.append("color", selectedColor);
    return `/card?${params.toString()}`;
  };

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    } else {
      alert("新しいカードを作成します（初期画面に戻るなどの処理）");
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const cardUrl = generateCardUrl();

  return (
    <>
      <Stepper currentStep={currentStep} />

      <div className="pt-28 pb-24 px-6 max-w-xl mx-auto sm:pt-36">
        <div className="bg-white border border-[#EAEAEA] p-10 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.02)] min-h-[400px] flex flex-col justify-between">
          <div className="mb-8">
            <h2 className="text-lg font-light tracking-[0.1em] text-[#111] mb-2">
              {STEP_DATA[currentStep].title}
            </h2>
            <p className="text-xs text-[#888] font-light leading-relaxed">
              {STEP_DATA[currentStep].desc}
            </p>
          </div>

          <div className="flex-1">
            {currentStep === 1 && (
              <Step1 formData={formData} setFormData={setFormData} />
            )}
            {currentStep === 2 && (
              <Step2
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
              />
            )}
            {currentStep === 3 && (
              <Step3
                formData={formData}
                setFormData={setFormData}
                activeSns={activeSns}
                toggleSns={toggleSns}
              />
            )}
            {currentStep === 4 && <Step4 cardUrl={cardUrl} />}
          </div>

          <div className="flex justify-between items-center mt-12 pt-6 border-t border-[#F5F5F5]">
            <button
              onClick={handlePrev}
              className="flex items-center gap-2 text-xs font-light tracking-[0.1em] text-[#888] hover:text-[#111] transition-colors duration-300 outline-none"
              style={{
                opacity: currentStep === 1 ? 0 : 1,
                pointerEvents: currentStep === 1 ? "none" : "auto",
              }}
            >
              <span className="text-base font-light">←</span> BACK
            </button>
            <button
              onClick={handleNext}
              className="flex items-center gap-2 text-xs font-light tracking-[0.1em] text-[#111] hover:text-[#888] transition-colors duration-300 outline-none"
            >
              {currentStep === TOTAL_STEPS ? (
                <>
                  FINISH <span className="text-base font-light">✓</span>
                </>
              ) : (
                <>
                  NEXT <span className="text-base font-light">→</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
