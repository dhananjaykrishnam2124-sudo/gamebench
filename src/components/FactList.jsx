import { InlineValue } from "./RichText.jsx";

// Bullet list of "Label: value" rows, used for game info, requirements,
// system specifications and About Us details.
export default function FactList({ items }) {
  return (
    <ul className="facts">
      {items.map(({ label, value }) => (
        <li key={label}>
          <strong>{label}:</strong> <InlineValue text={value} />
        </li>
      ))}
    </ul>
  );
}
