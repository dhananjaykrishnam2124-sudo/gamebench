import { useCallback, useEffect, useRef } from "react";
import SafeImage from "./SafeImage.jsx";

export default function Lightbox({ images, index, title, onClose, onChange }) {
  const overlayRef = useRef(null);
  const closeRef = useRef(null);
  const touch = useRef(null);
  const n = images.length;

  const go = useCallback((d) => onChange((index + d + n) % n), [index, n, onChange]);

  // Lock page scroll, move focus into the dialog, restore both on close
  useEffect(() => {
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab") {
        const f = overlayRef.current?.querySelectorAll("button");
        if (!f?.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touch.current || n < 2) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
  };

  return (
    <div
      ref={overlayRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshot viewer`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button ref={closeRef} type="button" className="lb-btn lb-close" onClick={onClose} aria-label="Close viewer">
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" /></svg>
      </button>
      {n > 1 && (
        <>
          <button type="button" className="lb-btn lb-nav lb-prev" onClick={() => go(-1)} aria-label="Previous screenshot">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
          </button>
          <button type="button" className="lb-btn lb-nav lb-next" onClick={() => go(1)} aria-label="Next screenshot">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
          </button>
        </>
      )}
      <div className="lb-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onClick={(e) => e.target === e.currentTarget && onClose()}>
        <SafeImage key={images[index]} className="lb-img" src={images[index]} alt={`${title} screenshot ${index + 1} of ${n}`} label="Screenshot not added yet" />
      </div>
      <p className="lb-count" aria-live="polite">{index + 1} / {n}</p>
    </div>
  );
}
