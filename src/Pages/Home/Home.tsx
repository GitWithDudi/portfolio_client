import { Link } from "react-router-dom";


export function Home(): React.JSX.Element {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>
        <Link to="/projects">View My Projects</Link>
      </p>
    </div>
  );
}
