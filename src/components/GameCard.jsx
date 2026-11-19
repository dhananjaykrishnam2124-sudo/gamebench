import SafeImage from "./SafeImage.jsx";
import { gameHref } from "../router.js";

export default function GameCard({ game }) {
  return (
    <a className="card" href={gameHref(game.id)}>
      <div className="card-media">
        <SafeImage src={game.cover} alt={`${game.title} cover`} label="Cover image" />
      </div>
      <h2 className="card-title">{game.title}</h2>
    </a>
  );
}
