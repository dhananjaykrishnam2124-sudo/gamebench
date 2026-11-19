import { isPlaceholder } from "../data/placeholder.js";

// Renders editable text. Placeholder text gets a clearly marked style.
export default function RichText({ text }) {
  if (isPlaceholder(text)) return <p className="placeholder-note">{text}</p>;
  return text
    .split(/\n\s*\n/)
    .map((para, i) => <p key={i}>{para}</p>);
}

export function InlineValue({ text }) {
  return isPlaceholder(text) ? <span className="inline-placeholder">{text}</span> : <>{text}</>;
}
