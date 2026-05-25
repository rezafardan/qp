import { motion } from "motion/react";
import { CARD_W, CARD_H } from "./skillData";

const SkillCard = ({ card, isActive, stackPos, total }) => (
  <motion.div
    animate={{
      x: stackPos * 12,
      y: stackPos * -5,
      rotate: stackPos * 1.8,
      scale: 1 - stackPos * 0.025,
      opacity: stackPos === 3 ? 0.2 : 1 - stackPos * 0.15,
      zIndex: total - stackPos,
    }}
    transition={{ type: "spring", stiffness: 350, damping: 30 }}
    style={{
      gridArea: "1 / 1",
      width: CARD_W,
      height: CARD_H,
      transformOrigin: "bottom right",
    }}
  >
    <div
      className={`w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700 shadow-2xl flex flex-col ${
        isActive ? "ring-1 ring-violet-500/40" : ""
      }`}
    >
      <div className="bg-white py-3 px-4 shrink-0">
        <h4 className="text-black text-xs text-center font-extrabold tracking-widest">
          {card.category}
        </h4>
      </div>

      <div className="flex-1 overflow-hidden px-3 py-3">
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.08 }}
            className="flex flex-col gap-1.5"
          >
            {card.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 border border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:border-violet-400 transition-all duration-300 text-xs rounded"
              >
                <span className="text-base shrink-0">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  </motion.div>
);

export default SkillCard;
