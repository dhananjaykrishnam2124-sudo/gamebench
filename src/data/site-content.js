// Editable content for My System, About Us and Gamebench pages.
// Replace each "ph(...)" value with your own text. Separate paragraphs with a blank line.
import { ph } from "./placeholder.js";

export const mySystem = {
  title: "Galaxy Book 4",
  // Put your photo here (any of jpg/png/webp, update the extension below to match)
  image: "./assets/my-system/galaxy-book-4.jpg",
  specs: [
    { label: "Display", value: ph("your display details") },
    { label: "Processor", value: ph("your processor") },
    { label: "Graphics", value: ph("your graphics") },
    { label: "Memory", value: ph("your memory") },
    { label: "Storage", value: ph("your storage") },
    { label: "Operating System", value: ph("your operating system") },
    { label: "Charging", value: ph("your charging details") },
  ],
  about: ph("your description of your system"),
};

export const aboutUs = {
  content: ph("the main About Us content"),
  details: [
    { label: "Developer", value: ph("developer name") },
    { label: "Published Through", value: ph("publishing platform") },
    { label: "AI Used", value: ph("the AI tools used") },
    { label: "References", value: ph("your references") },
  ],
};

export const gamebenchInfo = {
  sections: [
    { title: "Why I Made This Site", content: ph("why you created this website") },
    { title: "My Experience", content: ph("your gaming experience and the memories behind this collection") },
    { title: "How I Made It", content: ph("how you built the site and which tools you used") },
  ],
};
