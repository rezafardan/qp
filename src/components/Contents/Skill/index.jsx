// src/components/Contents/Skill/index.jsx
import { useTranslation } from "react-i18next";
import { SKILL_ICON_SETS } from "./skillData";
import SkillDeck from "./SkillDeck";

const Skill = () => {
  const { t } = useTranslation();
  const cardsData = t("skills.cards", { returnObjects: true });

  const cards = Array.isArray(cardsData)
    ? cardsData.map((card, i) => ({
        category: card.category,
        items: (card.items ?? []).map((label, j) => ({
          icon: SKILL_ICON_SETS[i]?.[j] ?? null,
          label,
        })),
      }))
    : [];

  return <SkillDeck cards={cards} />;
};

export default Skill;
