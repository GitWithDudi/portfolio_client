import { Outlet, Link } from 'react-router-dom';

export function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/projects">Projects</Link> |{" "}
        <Link to="/recommendations">Recommendations</Link> |{" "}
        <Link to="/add-recommendation">Add Recommendation</Link>
      </nav>

      <hr />

      {/* כאן יוצגו הדפים */}
      <Outlet />
    </div>
  );
}
