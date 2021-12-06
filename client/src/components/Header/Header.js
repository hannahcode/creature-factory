import "./Header.scss";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="header__content-container">
        <Link to="/" className="header__logo-link">
          <div className="header__logo-outline">
            <div className="header__logo-container">
              {" "}
              <h3 className="header__logo">Creature Factory</h3>
            </div>
          </div>
        </Link>
        <nav className="header__nav">
          <Link
            to="/create"
            className={`header__nav-link && ${
              pathname === "/create" ? "header__nav-link--current" : ""
            } `}
          >
            Create
          </Link>
          <Link
            to="/gallery"
            className={`header__nav-link && ${
              pathname === "/gallery" ? "header__nav-link--current" : ""
            } `}
          >
            Gallery
          </Link>
        </nav>
      </div>
    </header>
  );
}
