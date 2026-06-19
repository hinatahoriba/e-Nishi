import LZString from "lz-string";

const KEY_MAP = {
  name: "n",
  roman: "r",
  affiliation: "a",
  skill: "s",
  message: "m",
  portfolio: "p",
  line: "ln",
  x: "x",
  insta: "i",
  tiktok: "tk",
  github: "gh",
};

function getParam(params, key) {
  return (typeof params.get === "function" ? params.get(key) : params[key]) || "";
}

function decodeCardData(params) {
  const d = getParam(params, "d");
  if (!d) return null;
  try {
    const raw = LZString.decompressFromEncodedURIComponent(d);
    if (!raw) return null;
    const data = JSON.parse(raw);
    return {
      name: data.n || "",
      roman: data.r || "",
      affiliation: data.a || "",
      skill: data.s || "",
      message: data.m || "",
      portfolio: data.p || "",
      line: data.ln || "",
      x: data.x || "",
      insta: data.i || "",
      tiktok: data.tk || "",
      github: data.gh || "",
      template: data.t || "1",
    };
  } catch {
    return null;
  }
}

export function parseCardParams(params) {
  const decoded = decodeCardData(params);
  if (decoded) return decoded;

  return {
    name: getParam(params, "name"),
    roman: getParam(params, "roman"),
    affiliation: getParam(params, "affiliation"),
    skill: getParam(params, "skill"),
    message: getParam(params, "message"),
    portfolio: getParam(params, "portfolio"),
    line: getParam(params, "line"),
    x: getParam(params, "x"),
    insta: getParam(params, "insta"),
    tiktok: getParam(params, "tiktok"),
    github: getParam(params, "github"),
    template: getParam(params, "template") || "1",
  };
}

export const STEP_DATA = {
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

export const STEP_SEQUENCE = [
  { num: 1, label: "FRONT" },
  { num: 2, label: "DESIGN" },
  { num: 3, label: "BACK" },
  { num: 4, label: "QR CODE" },
];

export const TOTAL_STEPS = STEP_SEQUENCE.length;

export const COLOR_OPTIONS = [
  { key: "stone", bgClass: "bg-stone-100", borderClass: "border-stone-300", hoverClass: "hover:border-stone-600", ringClass: "ring-stone-300" },
  { key: "blue", bgClass: "bg-blue-100", borderClass: "border-blue-300", hoverClass: "hover:border-blue-600", ringClass: "ring-blue-300" },
  { key: "rose", bgClass: "bg-rose-100", borderClass: "border-rose-300", hoverClass: "hover:border-rose-600", ringClass: "ring-rose-300" },
  { key: "amber", bgClass: "bg-amber-100", borderClass: "border-amber-300", hoverClass: "hover:border-amber-600", ringClass: "ring-amber-300" },
  { key: "emerald", bgClass: "bg-emerald-100", borderClass: "border-emerald-300", hoverClass: "hover:border-emerald-600", ringClass: "ring-emerald-300" },
  { key: "purple", bgClass: "bg-purple-100", borderClass: "border-purple-300", hoverClass: "hover:border-purple-600", ringClass: "ring-purple-300" },
  { key: "slate", bgClass: "bg-slate-100", borderClass: "border-slate-300", hoverClass: "hover:border-slate-600", ringClass: "ring-slate-300" },
  { key: "dark", bgClass: "bg-zinc-800", borderClass: "border-zinc-700", hoverClass: "hover:border-zinc-500", ringClass: "ring-zinc-700" },
];

export const SNS_OPTIONS = [
  { key: "line", icon: "fa-brands fa-line", label: "LINE" },
  { key: "x", icon: "fa-brands fa-x-twitter", label: "X" },
  { key: "insta", icon: "fa-brands fa-instagram", label: "Instagram" },
  { key: "tiktok", icon: "fa-brands fa-tiktok", label: "TikTok" },
  { key: "github", icon: "fa-brands fa-github", label: "GitHub" },
];

export const SNS_PLACEHOLDERS = {
  line: { placeholder: "https://line.me/ti/p/...", prefix: null },
  x: { placeholder: "username", prefix: "@" },
  insta: { placeholder: "username", prefix: "@" },
  tiktok: { placeholder: "username", prefix: "@" },
  github: { placeholder: "username", prefix: "github.com/" },
};

export const MESSAGE_MAX_LENGTH = 20;

export const CARD_THEMES = {
  stone: {
    bg: "bg-[#fcfbf9]",
    border: "border-stone-300/40",
    textPrimary: "text-stone-800",
    textSecondary: "text-stone-600",
    textTertiary: "text-stone-500",
    textMuted: "text-stone-400",
    textLight: "text-stone-300",
    divider: "bg-stone-300",
    icon: "text-stone-400 hover:text-stone-700 hover:scale-110",
    qrBg: "bg-stone-50 border-stone-200",
    qrInnerBg: "bg-white border-stone-300/60",
    fallbackBg: "bg-stone-50 border-stone-200",
    fallbackInnerBg: "bg-white border-stone-100",
  },
  blue: {
    bg: "bg-blue-50/80",
    border: "border-blue-300/40",
    textPrimary: "text-blue-900",
    textSecondary: "text-blue-700",
    textTertiary: "text-blue-600",
    textMuted: "text-blue-400",
    textLight: "text-blue-300",
    divider: "bg-blue-300",
    icon: "text-blue-400 hover:text-blue-700 hover:scale-110",
    qrBg: "bg-blue-100 border-blue-200",
    qrInnerBg: "bg-white border-blue-300/60",
    fallbackBg: "bg-blue-100 border-blue-200",
    fallbackInnerBg: "bg-white border-blue-100",
  },
  rose: {
    bg: "bg-rose-50/80",
    border: "border-rose-300/40",
    textPrimary: "text-rose-900",
    textSecondary: "text-rose-700",
    textTertiary: "text-rose-600",
    textMuted: "text-rose-400",
    textLight: "text-rose-300",
    divider: "bg-rose-300",
    icon: "text-rose-400 hover:text-rose-700 hover:scale-110",
    qrBg: "bg-rose-100 border-rose-200",
    qrInnerBg: "bg-white border-rose-300/60",
    fallbackBg: "bg-rose-100 border-rose-200",
    fallbackInnerBg: "bg-white border-rose-100",
  },
  amber: {
    bg: "bg-amber-50/80",
    border: "border-amber-300/40",
    textPrimary: "text-amber-900",
    textSecondary: "text-amber-700",
    textTertiary: "text-amber-600",
    textMuted: "text-amber-400",
    textLight: "text-amber-300",
    divider: "bg-amber-300",
    icon: "text-amber-400 hover:text-amber-700 hover:scale-110",
    qrBg: "bg-amber-100 border-amber-200",
    qrInnerBg: "bg-white border-amber-300/60",
    fallbackBg: "bg-amber-100 border-amber-200",
    fallbackInnerBg: "bg-white border-amber-100",
  },
  emerald: {
    bg: "bg-emerald-50/80",
    border: "border-emerald-300/40",
    textPrimary: "text-emerald-900",
    textSecondary: "text-emerald-700",
    textTertiary: "text-emerald-600",
    textMuted: "text-emerald-400",
    textLight: "text-emerald-300",
    divider: "bg-emerald-300",
    icon: "text-emerald-400 hover:text-emerald-700 hover:scale-110",
    qrBg: "bg-emerald-100 border-emerald-200",
    qrInnerBg: "bg-white border-emerald-300/60",
    fallbackBg: "bg-emerald-100 border-emerald-200",
    fallbackInnerBg: "bg-white border-emerald-100",
  },
  purple: {
    bg: "bg-purple-50/80",
    border: "border-purple-300/40",
    textPrimary: "text-purple-900",
    textSecondary: "text-purple-700",
    textTertiary: "text-purple-600",
    textMuted: "text-purple-400",
    textLight: "text-purple-300",
    divider: "bg-purple-300",
    icon: "text-purple-400 hover:text-purple-700 hover:scale-110",
    qrBg: "bg-purple-100 border-purple-200",
    qrInnerBg: "bg-white border-purple-300/60",
    fallbackBg: "bg-purple-100 border-purple-200",
    fallbackInnerBg: "bg-white border-purple-100",
  },
  slate: {
    bg: "bg-slate-50/80",
    border: "border-slate-300/40",
    textPrimary: "text-slate-900",
    textSecondary: "text-slate-700",
    textTertiary: "text-slate-600",
    textMuted: "text-slate-400",
    textLight: "text-slate-300",
    divider: "bg-slate-300",
    icon: "text-slate-400 hover:text-slate-700 hover:scale-110",
    qrBg: "bg-slate-100 border-slate-200",
    qrInnerBg: "bg-white border-slate-300/60",
    fallbackBg: "bg-slate-100 border-slate-200",
    fallbackInnerBg: "bg-white border-slate-100",
  },
  dark: {
    bg: "bg-zinc-800",
    border: "border-zinc-700/60",
    textPrimary: "text-zinc-100",
    textSecondary: "text-zinc-300",
    textTertiary: "text-zinc-400",
    textMuted: "text-zinc-500",
    textLight: "text-zinc-600",
    divider: "bg-zinc-700",
    icon: "text-zinc-400 hover:text-zinc-200 hover:scale-110",
    qrBg: "bg-zinc-900 border-zinc-700",
    qrInnerBg: "bg-zinc-100 border-zinc-600",
    fallbackBg: "bg-zinc-900 border-zinc-700",
    fallbackInnerBg: "bg-zinc-800 border-zinc-700",
  },
};

export const SOCIAL_LINKS = {
  github: {
    icon: "fa-brands fa-github",
    href: (value) => `https://github.com/${value}`,
  },
  x: {
    icon: "fa-brands fa-x-twitter",
    href: (value) => `https://x.com/${value}`,
  },
  line: {
    icon: "fa-brands fa-line",
    href: (value) =>
      value.startsWith("http") ? value : `https://line.me/ti/p/${value}`,
  },
  insta: {
    icon: "fa-brands fa-instagram",
    href: (value) => `https://instagram.com/${value}`,
  },
  tiktok: {
    icon: "fa-brands fa-tiktok",
    href: (value) => `https://tiktok.com/@${value}`,
  },
};

const SNS_KEYS = SNS_OPTIONS.map((option) => option.key);

export function splitNameParts(value) {
  const normalized = (value || "").trim().replace(/[\s\u3000]+/g, " ");

  if (!normalized) {
    return { familyName: "", givenName: "" };
  }

  const [familyName = "", ...givenNameParts] = normalized.split(" ");

  return {
    familyName,
    givenName: givenNameParts.join(" "),
  };
}

export function joinNameParts(familyName, givenName) {
  return [familyName, givenName]
    .map((part) => (part || "").trim())
    .filter(Boolean)
    .join(" ");
}

export function getInitialFormData(params) {
  const { template: _, ...formData } = parseCardParams(params);
  return formData;
}

export function getInitialActiveSns(params) {
  const decoded = parseCardParams(params);
  return SNS_KEYS.filter((key) => decoded[key]);
}

export function buildCardUrl(formData, selectedTemplate) {
  const data = {};
  Object.entries(KEY_MAP).forEach(([longKey, shortKey]) => {
    if (formData[longKey]) data[shortKey] = formData[longKey];
  });
  if (selectedTemplate) data.t = selectedTemplate;

  const compressed = LZString.compressToEncodedURIComponent(JSON.stringify(data));
  return `/card?d=${compressed}`;
}

export function getFullCardUrl(cardUrl, origin) {
  return origin ? `${origin}${cardUrl}` : cardUrl;
}

export function buildQrApiUrl(cardUrl, origin) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(getFullCardUrl(cardUrl, origin))}`;
}
