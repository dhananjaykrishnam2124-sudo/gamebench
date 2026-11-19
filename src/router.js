// Tiny hash router. Hash URLs (#/game/gta-5) work on GitHub Pages with no
// server configuration and keep relative asset paths valid on every page.
import { useEffect, useState } from "react";

const read = () => {
  const h = window.location.hash.slice(1);
  return h.startsWith("/") ? h : "/";
};

export function useRoute() {
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const onChange = () => setRoute(read());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

export const gameHref = (id) => `#/game/${id}`;
