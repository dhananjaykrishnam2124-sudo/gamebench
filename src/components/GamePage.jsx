import { useState } from "react";
import { getGame } from "../data/game-data.js";
import SafeImage from "./SafeImage.jsx";
import FactList from "./FactList.jsx";
import RichText from "./RichText.jsx";
import ScreenshotCarousel from "./ScreenshotCarousel.jsx";
import Lightbox from "./Lightbox.jsx";

// One reusable template for all 19 games. Only the data changes.
export default function GamePage({ id }) {
  const game = getGame(id);
  const [viewer, setViewer] = useState(null); // null or index of open screenshot

  if (!game) {
    return (
      <div className="container narrow section">
        <h1 className="page-title">Game not found</h1>
        <p>This game is not in the collection. <a className="text-link" href="#/">Return to the homepage</a>.</p>
      </div>
    );
  }

  const { minimumRequirements: r } = game;
  return (
    <article>
      <div className="container">
        {/* A. Title */}
        <h1 className="page-title game-title">{game.title}</h1>
        {/* B. Main image */}
        <div className="main-image">
          <SafeImage src={game.mainImage} alt={`${game.title} main image`} label="Main image" />
        </div>
      </div>

      <div className="container narrow">
        {/* C. Description */}
        <section className="section" aria-labelledby="desc-h">
          <h2 id="desc-h">Description</h2>
          <p>{game.description}</p>
        </section>

        {/* D. Game information */}
        <section className="section" aria-labelledby="info-h">
          <h2 id="info-h" className="visually-hidden">Game information</h2>
          <FactList
            items={[
              { label: "Developer", value: game.developer },
              { label: "Genre", value: game.genre },
              { label: "Release Date", value: game.releaseDate },
            ]}
          />
        </section>

        {/* E. Minimum system requirements */}
        <section className="section" aria-labelledby="req-h">
          <h2 id="req-h">Minimum System Requirements</h2>
          <FactList
            items={[
              { label: "CPU", value: r.cpu },
              { label: "RAM", value: r.ram },
              { label: "Video Card", value: r.videoCard },
              { label: "Disk Space", value: r.diskSpace },
            ]}
          />
        </section>
      </div>

      {/* F. Screenshots */}
      <section className="section screens" aria-labelledby="shots-h">
        <div className="container narrow">
          <h2 id="shots-h">Screenshots</h2>
        </div>
        <ScreenshotCarousel
          screenshots={game.screenshots}
          title={game.title}
          paused={viewer !== null}
          onOpen={setViewer}
        />
      </section>

      {/* G. My Experience */}
      <div className="container narrow">
        <section className="section" aria-labelledby="exp-h">
          <h2 id="exp-h">My Experience</h2>
          <RichText text={game.experience} />
        </section>
      </div>

      {viewer !== null && (
        <Lightbox
          images={game.screenshots}
          index={viewer}
          title={game.title}
          onChange={setViewer}
          onClose={() => setViewer(null)}
        />
      )}
    </article>
  );
}
