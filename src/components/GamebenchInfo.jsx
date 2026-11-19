import { gamebenchInfo } from "../data/site-content.js";
import RichText from "./RichText.jsx";

export default function GamebenchInfo() {
  return (
    <div className="container narrow">
      <h1 className="page-title">Gamebench</h1>
      {gamebenchInfo.sections.map((s, i) => (
        <section key={s.title} className={`section${i === 0 ? " no-rule" : ""}`} aria-labelledby={`gb-${i}`}>
          <h2 id={`gb-${i}`}>{s.title}</h2>
          <RichText text={s.content} />
        </section>
      ))}
    </div>
  );
}
