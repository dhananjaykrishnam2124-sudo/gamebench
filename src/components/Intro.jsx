import { useEffect, useState } from "react";

// 0 = mounted (invisible) -> 1 = fading in / visible -> 2 = fading out -> done
export default function Intro({ onDone }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 60),
      setTimeout(() => setPhase(2), 2400),
      setTimeout(onDone, 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <div className="intro" role="status">
      <p className={phase === 1 ? "visible" : ""}>
        Games are not just games. They are memories.
      </p>
    </div>
  );
}
