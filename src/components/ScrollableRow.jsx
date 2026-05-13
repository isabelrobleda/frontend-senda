import React, { useRef, useState, useEffect, useCallback } from "react";

function ScrollableRow({ children, gap = "gap-4" }) {
  const scrollRef = useRef(null);
  const [thumbStyle, setThumbStyle] = useState({ left: "0%", width: "30%" });

  const updateThumb = useCallback(() => {
    const el = scrollRef.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    const ratio = el.clientWidth / el.scrollWidth;
    const thumbW = Math.max(ratio * 100, 8);
    const maxScroll = el.scrollWidth - el.clientWidth;
    const progress = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
    const thumbLeft = progress * (100 - thumbW);
    setThumbStyle({ left: `${thumbLeft}%`, width: `${thumbW}%` });
  }, []);

  useEffect(() => {
    updateThumb();
    window.addEventListener("resize", updateThumb);
    return () => window.removeEventListener("resize", updateThumb);
  }, [updateThumb]);

  const scrollBy = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <div
        ref={scrollRef}
        onScroll={updateThumb}
        className={`overflow-x-auto flex flex-row ${gap} [&::-webkit-scrollbar]:hidden [scrollbar-width:none]`}
      >
        {children}
      </div>
      <div className="flex items-center gap-3 mt-6">
        <button
          onClick={() => scrollBy(-1)}
          className="flex-shrink-0 text-[#009bce] hover:text-[#007cae] text-2xl font-bold leading-none"
          aria-label="scroll left"
        >
          ‹
        </button>
        <div className="relative flex-1 h-3 bg-[#cce9f5] rounded-full overflow-hidden">
          <div
            className="absolute top-0 h-3 bg-[#009bce] rounded-full transition-[left] duration-75"
            style={thumbStyle}
          />
        </div>
        <button
          onClick={() => scrollBy(1)}
          className="flex-shrink-0 text-[#009bce] hover:text-[#007cae] text-2xl font-bold leading-none"
          aria-label="scroll right"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default ScrollableRow;
