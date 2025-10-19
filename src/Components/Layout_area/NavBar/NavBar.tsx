import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export function NavBar(): React.JSX.Element {
  return (
    <nav className={styles.navbar}>
      {/* Checkbox מוסתר לשליטה על ההמבורגר */}
      <input type="checkbox" id="nav-toggle" className={styles["nav-toggle"]} />

      {/* כפתור המבורגר */}
      <label htmlFor="nav-toggle" className={styles.hamburger}>
        ☰
      </label>

      {/* הקישורים */}
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/recommendations">Recommendations</Link>
      </div>
    </nav>
  );
}
