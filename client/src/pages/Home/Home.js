import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <h2 className="home__title">Welcome to Creature Factory!</h2>
      <Link to="/create">
        <button className="home__button">Get Started</button>
      </Link>
    </main>
  );
}
