import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <div className="header__logo-outline">
          <div className="header__logo-container">
            {" "}
            <h3 className="header__logo">
              Creature <br /> Factory
            </h3>
          </div>
        </div>
      </Link>
      <nav className="header__nav">
        <Link to="/create" className="header__nav-link">
          Create
        </Link>
        <Link to="/gallery" className="header__nav-link">
          Gallery
        </Link>
      </nav>
    </header>
  );
}
