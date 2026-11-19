import { games } from "../data/game-data.js";
import GameCard from "./GameCard.jsx";

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Games That Gave Me Memories</h1>
        <p>
          These games are more than just entertainment to me. Each one holds a special place in my
          memories and has given me something worth remembering. Explore the collection to discover
          what makes each of them special.
        </p>
      </section>
      <ul className="grid" aria-label="Game collection">
        {games.map((g) => (
          <li key={g.id}>
            <GameCard game={g} />
          </li>
        ))}
      </ul>
    </div>
  );
}
