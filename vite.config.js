import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" keeps every asset URL relative, so the site works when hosted
// under a repository path such as https://username.github.io/gamebench/
export default defineConfig({
  base: "./",
  plugins: [react()],
});
