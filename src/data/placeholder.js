// Anything starting with this tag is rendered as a clearly marked placeholder.
export const PLACEHOLDER_TAG = "[PLACEHOLDER]";
export const ph = (what) => `${PLACEHOLDER_TAG} Add ${what} here.`;
export const isPlaceholder = (text) =>
  typeof text === "string" && text.trim().startsWith(PLACEHOLDER_TAG);
