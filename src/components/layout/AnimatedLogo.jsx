"use client";
import { useRef, useCallback } from "react";

export default function AnimatedLogo({ variant = "full", size = "sm" }) {
  const scopeRef = useRef(null);

  const replay = useCallback(() => {
    const el = scopeRef.current;
    if (!el) return;
    const targets = el.querySelectorAll(".dot, .ln, .logo-name, .logo-sub");
    targets.forEach((t) => {
      t.style.animation = "none";
      void t.offsetWidth;
      t.style.animation = "";
    });
  }, []);

  const subtitle = variant === "icon" ? "" : "sistemas digitales";

  return (
    <div
      className={`logo logo-${size}`}
      ref={scopeRef}
      onClick={replay}
      style={{ cursor: "pointer" }}
      title="Reproducir animación"
    >
      <svg viewBox="0 0 52 52" fill="none">
        <line className="ln ln-d1" x1="10" y1="10" x2="42" y2="42" />
        <line className="ln ln-d2" x1="42" y1="10" x2="10" y2="42" />
        <line className="ln ln-v"  x1="26" y1="10" x2="26" y2="42" />
        <line className="ln ln-h"  x1="10" y1="26" x2="42" y2="26" />
        <circle className="dot dot-tl" cx="10" cy="10" r="3.5" />
        <circle className="dot dot-tm" cx="26" cy="10" r="3.5" />
        <circle className="dot dot-tr" cx="42" cy="10" r="3.5" />
        <circle className="dot dot-ml" cx="10" cy="26" r="3.5" />
        <circle className="dot dot-c"  cx="26" cy="26" r="6" />
        <circle className="dot dot-mr" cx="42" cy="26" r="3.5" />
        <circle className="dot dot-bl" cx="10" cy="42" r="3.5" />
        <circle className="dot dot-bm" cx="26" cy="42" r="3.5" />
        <circle className="dot dot-br" cx="42" cy="42" r="3.5" />
      </svg>

      {variant !== "icon" && (
        <div className="logo-text">
          <span className="logo-name">kodra</span>
          <span className="logo-sub">{subtitle}</span>
        </div>
      )}
    </div>
  );
}
