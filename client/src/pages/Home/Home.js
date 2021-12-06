import "./Home.scss";
import { Link } from "react-router-dom";
import CatHead from "../../components/Heads/CatHead";

export default function Home() {
  return (
    <main className="home">
      <h2 className="home__title">Welcome to Creature Factory!</h2>
      <section className="home__container">
        <svg width="200" height="100" className="home__cat">
          <CatHead />
        </svg>
        <Link to="/create">
          <button className="home__button">Get Started</button>
        </Link>
      </section>
    </main>
  );
}
