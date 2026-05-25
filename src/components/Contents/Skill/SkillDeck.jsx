import { useState, useRef } from "react";
import { CARD_W, CARD_H } from "./skillData";
import SkillCard from "./SkillCard";

const SkillDeck = ({ cards }) => {
  const [current, setCurrent] = useState(0);
  const dragStartX = useRef(null);
  const total = cards.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const handleDragStart = (e) => {
    dragStartX.current = e.type === "touchstart"
      ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e) => {
    if (dragStartX.current === null) return;
    const endX = e.type === "touchend"
      ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX.current - endX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    dragStartX.current = null;
  };

  return (
    <section className="flex flex-col items-center gap-8 w-full py-4">
      <div
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        style={{
          display: "grid",
          width: CARD_W + 50,
          height: CARD_H + 40,
          cursor: "grab",
          userSelect: "none",
        }}
      >
        {[...Array(total)].map((_, i) => {
          const stackPos = (i - current + total) % total;
          if (stackPos > 3) return null;
          return (
            <SkillCard
              key={i}
              card={cards[i]}
              isActive={stackPos === 0}
              stackPos={stackPos}
              total={total}
            />
          );
        })}
      </div>

      <div className="flex items-center gap-5">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-violet-500 transition-all duration-300 text-sm"
        >
          ←
        </button>
        <div className="flex gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-5 h-2 bg-violet-500"
                  : "w-2 h-2 bg-neutral-700 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-violet-500 transition-all duration-300 text-sm"
        >
          →
        </button>
      </div>

      <p className="text-[10px] tracking-[0.3em] text-neutral-600 uppercase -mt-4">
        {current + 1} / {total} — {cards[current].category}
      </p>
    </section>
  );
};

export default SkillDeck;
