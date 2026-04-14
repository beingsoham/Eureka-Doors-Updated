"use client";
import { useEffect } from "react";

export function useCounter() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".counter").forEach((el) => {
              const target = parseInt((el as HTMLElement).dataset.target || "0");
              const suffix = (el as HTMLElement).dataset.suffix || "";
              const start = performance.now();
              function update(t: number) {
                const p = Math.min((t - start) / 2000, 1);
                const v = Math.floor((1 - Math.pow(1 - p, 3)) * target);
                el.textContent =
                  (target >= 1000 ? v.toLocaleString("en-IN") : v) + suffix;
                if (p < 1) requestAnimationFrame(update);
                else el.textContent = target.toLocaleString("en-IN") + suffix;
              }
              requestAnimationFrame(update);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".stat-card").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
