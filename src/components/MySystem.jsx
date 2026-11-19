import { mySystem } from "../data/site-content.js";
import SafeImage from "./SafeImage.jsx";
import FactList from "./FactList.jsx";
import RichText from "./RichText.jsx";

export default function MySystem() {
  return (
    <div className="container narrow">
      <h1 className="page-title">{mySystem.title}</h1>
      <div className="system-image">
        <SafeImage src={mySystem.image} alt="Samsung Galaxy Book 4" label="Galaxy Book 4 image" />
      </div>
      <section className="section" aria-labelledby="spec-h">
        <h2 id="spec-h">System Specifications</h2>
        <FactList items={mySystem.specs} />
      </section>
      <section className="section" aria-labelledby="about-sys-h">
        <h2 id="about-sys-h">About My System</h2>
        <RichText text={mySystem.about} />
      </section>
    </div>
  );
}
