import './App.css'
import { Link, Outlet } from 'react-router-dom'



 export function App() {

  return (
    


    <nav>
      <Link to="/">Home | </Link>
      <Link to="/projects">Projects | </Link>
      <Link to="/about">About | </Link>
      <Link to="/recommendations">Recommendations | </Link>
      <Link to="/add-recommendation">Add Recommendation </Link>

    
      <Outlet />
    </nav>

    
  ) 
}

export default App
