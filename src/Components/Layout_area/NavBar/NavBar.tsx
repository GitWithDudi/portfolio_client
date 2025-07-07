import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export function NavBar(): React.JSX.Element {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/recommendations">Recommendations</Link>
    </nav>
  );
}
