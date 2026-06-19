import CardTemplate1 from "./CardTemplate1";
import CardTemplate2 from "./CardTemplate2";
import CardTemplate3 from "./CardTemplate3";
import CardTemplate4 from "./CardTemplate4";
import CardTemplate5 from "./CardTemplate5";
import CardTemplate6 from "./CardTemplate6";

export const CARD_TEMPLATES = [
  {
    id: "1",
    label: "デフォルト",
    pageBg: "bg-[#fbfbfb]",
    component: CardTemplate1,
  },
  {
    id: "2",
    label: "儚げシアー・ブルー",
    pageBg: "bg-[#eef5f9]",
    component: CardTemplate2,
  },
  {
    id: "3",
    label: "アーキテクチャル・モダン",
    pageBg: "bg-[#e9ebe8]",
    component: CardTemplate3,
  },
  {
    id: "4",
    label: "アシンメトリー・フレーム",
    pageBg: "bg-[#e4e4e4]",
    component: CardTemplate4,
  },
  {
    id: "5",
    label: "韓国っぽニュアンス",
    pageBg: "bg-[#f0edf5]",
    component: CardTemplate5,
  },
  {
    id: "6",
    label: "フレンチガーリー",
    pageBg: "bg-[#eaf0f6]",
    component: CardTemplate6,
  },
];
export function getTemplateById(id) {
  return CARD_TEMPLATES.find((t) => t.id === id) ?? CARD_TEMPLATES[0];
}
