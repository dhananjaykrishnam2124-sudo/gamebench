import { aboutUs } from "../data/site-content.js";
import FactList from "./FactList.jsx";
import RichText from "./RichText.jsx";

export default function AboutUs() {
  return (
    <div className="container narrow">
      <h1 className="page-title">About Us</h1>
      <section className="section no-rule">
        <RichText text={aboutUs.content} />
      </section>
      <section className="section" aria-label="Details">
        <FactList items={aboutUs.details} />
      </section>
      <p className="thank-you">Thank You</p>
    </div>
  );
}
