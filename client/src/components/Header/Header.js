import "./Header.scss"
import { Link } from "react-router-dom"

export default function Header() {
return (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
      <Link to="/gallery">Gallery</Link>
    </nav>
  </header>
);
}