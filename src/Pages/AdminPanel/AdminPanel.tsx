import { Link } from "react-router-dom";

export function AdminPanel(): React.JSX.Element {
  return (
    <div>
      <h1>Panel Admin</h1>
      <p>Welcome to the admin panel. Here you can:</p>

      <ul>
        <li>
          <Link to="/add-project">Add New Project</Link>
        </li>
        <li>
          <Link to="/add-recommendation">Add New Recommendation</Link>
        </li>
      </ul>
    </div>
  );
}
