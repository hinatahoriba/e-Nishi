import CardTemplate1 from "./CardTemplate1";
import CardTemplate2 from "./CardTemplate2";

export const CARD_TEMPLATES = [
  {
    id: "1",
    component: CardTemplate1,
  },
  {
    id: "2",
    component: CardTemplate2,
  },
];
export function getTemplateById(id) {
  return CARD_TEMPLATES.find((t) => t.id === id) ?? CARD_TEMPLATES[0];
}
