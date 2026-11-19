import { useEffect, useState } from "react";
import { useRoute } from "./router.js";
import Intro from "./components/Intro.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import GamePage from "./components/GamePage.jsx";
import MySystem from "./components/MySystem.jsx";
import AboutUs from "./components/AboutUs.jsx";
import GamebenchInfo from "./components/GamebenchInfo.jsx";

const INTRO_KEY = "gamebench:intro-seen";

const hasSeenIntro = () => {
  try {
    return localStorage.getItem(INTRO_KEY) === "1";
  } catch {
    return false;
  }
};

const TITLES = {
  "/": "Gamebench",
  "/my-system": "My System · Gamebench",
  "/about": "About Us · Gamebench",
  "/gamebench": "Gamebench · About this site",
};

function Page({ route }) {
  if (route === "/") return <Home />;
  if (route === "/my-system") return <MySystem />;
  if (route === "/about") return <AboutUs />;
  if (route === "/gamebench") return <GamebenchInfo />;
  if (route.startsWith("/game/")) return <GamePage id={route.slice(6)} />;
  return <Home />;
}

export default function App() {
  const [introDone, setIntroDone] = useState(hasSeenIntro);
  const route = useRoute();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (TITLES[route]) document.title = TITLES[route];
  }, [route]);

  const finishIntro = () => {
    try {
      localStorage.setItem(INTRO_KEY, "1");
    } catch {
      /* storage unavailable: intro simply shows again next visit */
    }
    setIntroDone(true);
  };

  if (!introDone) return <Intro onDone={finishIntro} />;

  return (
    <div className="app app-enter">
      <Header route={route} />
      <main key={route} className="page">
        <Page route={route} />
      </main>
    </div>
  );
}
