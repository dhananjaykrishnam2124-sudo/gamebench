import { useEffect, useLayoutEffect, useRef, useState } from "react";
import SafeImage from "./SafeImage.jsx";

const SPEED = 45; // pixels per second, moving left to right

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Continuous, seamless marquee. One "set" holds every screenshot; the set is
// repeated enough times to always cover the viewport, and the track wraps by
// exactly one set width, so there is never a gap or a jump.
export default function ScreenshotCarousel({ screenshots, title, paused, onOpen }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const setRef = useRef(null);
  const pos = useRef({ x: 0, setW: 0 });
  const [copies, setCopies] = useState(2);
  const [reduced] = useState(prefersReducedMotion);

  const apply = () => {
    const { x, setW } = pos.current;
    if (trackRef.current) trackRef.current.style.transform = `translate3d(${x - setW}px,0,0)`;
  };

  // Measure one set and decide how many copies are needed
  useLayoutEffect(() => {
    if (!screenshots.length || reduced) return;
    const measure = () => {
      const setW = setRef.current?.getBoundingClientRect().width || 0;
      const vw = viewportRef.current?.clientWidth || 0;
      if (!setW) return;
      pos.current.setW = setW;
      pos.current.x %= setW;
      setCopies(Math.max(2, Math.ceil(vw / setW) + 1));
      apply();
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(setRef.current);
    ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, [screenshots, reduced]);

  // Animation loop: stops while paused (lightbox open) and resumes where it left off
  useEffect(() => {
    if (paused || reduced || !screenshots.length) return;
    let last = performance.now();
    let raf;
    const tick = (now) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      const p = pos.current;
      if (p.setW > 0) {
        p.x = (p.x + SPEED * dt) % p.setW;
        apply();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused, reduced, screenshots]);

  if (!screenshots.length) {
    return (
      <div className="container">
        <p className="placeholder-note">
          No screenshots listed yet. Add their paths to this game's <code>screenshots</code> array in
          <code> src/data/game-data.js</code>.
        </p>
      </div>
    );
  }

  const total = reduced ? 1 : copies;
  return (
    <div
      ref={viewportRef}
      className={`carousel${reduced ? " is-static" : ""}`}
      role="region"
      aria-label={`${title} screenshots`}
    >
      <div ref={trackRef} className="carousel-track">
        {Array.from({ length: total }, (_, c) => (
          <div
            className="carousel-set"
            key={c}
            ref={c === 0 ? setRef : undefined}
            aria-hidden={c > 0 ? "true" : undefined}
          >
            {screenshots.map((src, i) => (
              <button
                key={src}
                type="button"
                className="shot"
                tabIndex={c > 0 ? -1 : 0}
                onClick={() => onOpen(i)}
                aria-label={`Open screenshot ${i + 1} of ${screenshots.length} in full screen`}
              >
                <SafeImage src={src} alt={c === 0 ? `${title} screenshot ${i + 1}` : ""} label="Screenshot not added yet" />
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
