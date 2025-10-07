
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Iproject } from "../../Types/Interfaces";
// import { ProjectsCard } from "../../Components/Project/Projects_card";

// export function Projects(): React.JSX.Element {
//   const [projects, setProjects] = useState<Iproject[]>([]);
//   const [selectedTech, setSelectedTech] = useState("All");
//   const [allTechnologies, setAllTechnologies] = useState<string[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/projects")
//       .then((response) => {
//         setProjects(response.data);
//         setLoading(false);

//         const techs = Array.from(
//           new Set(
//             response.data.flatMap((project: Iproject) => project.technologies || []) as string[]
//           )
//         );
//         setAllTechnologies(techs);
//       })
//       .catch((error) => {
//         console.error("Error fetching projects:", error);
//         setError("Failed to load recommendations");
//         setLoading(false);
//       });
//   }, []);

//   const handleTechChange = (tech: string) => {
//     setSelectedTech(tech);

//     if (tech === "All") {
//       axios
//         .get("http://localhost:5000/projects")
//         .then((response) => setProjects(response.data))
//         .catch((error) => console.error("Error fetching all projects:", error));
//     } else {
//       axios
//         .get(`http://localhost:5000/projects/tech/${tech}`)
//         .then((response) => setProjects(response.data))
//         .catch((error) => console.error("Error fetching projects by tech:", error));
//     }
//   };
//   if (loading) return <div>Loading projecs...</div>;
//   if (error) return <div>{error}</div>;


//   return (
//     <div>
//       <h1>My Projects</h1>

//       <label htmlFor="tech-select">Filter by technology:</label>
//       <select
//         id="tech-select"
//         value={selectedTech}
//         onChange={(e) => handleTechChange(e.target.value)}
//       >
//         <option value="All">All</option>
//         {allTechnologies.map((tech) => (
//           <option key={tech} value={tech}>
//             {tech}
//           </option>
//         ))}
//       </select>

//       {projects.map((project) => (
//         <ProjectsCard key={project.id} project={project} />
//       ))}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import axios from "axios";
import { Iproject } from "../../Types/Interfaces";
import { ProjectsCard } from "../../Components/Project/Projects_card";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";

export function Projects(): React.JSX.Element {
  const [projects, setProjects] = useState<Iproject[]>([]);
  const [selectedTech, setSelectedTech] = useState("All");
  const [allTechnologies, setAllTechnologies] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/projects")
      .then((response) => {
        setProjects(response.data);
        setLoading(false);

        const techs = Array.from(
          new Set(
            response.data.flatMap((project: Iproject) => project.technologies || []) as string[]
          )
        );
        setAllTechnologies(techs);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects");
        setLoading(false);
      });
  }, []);

  const handleTechChange = (tech: string) => {
    setSelectedTech(tech);

    const url =
      tech === "All"
        ? "http://localhost:5000/projects"
        : `http://localhost:5000/projects/tech/${tech}`;

    axios
      .get(url)
      .then((response) => setProjects(response.data))
      .catch((error) => {
        console.error("Error fetching filtered projects:", error);
        setError("Failed to filter projects");
      });
  };

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Box sx={{ padding: 4, paddingTop: "80px", paddingBottom: "80px" }}>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>

      <FormControl sx={{ minWidth: 200, mb: 4 }}>
        <InputLabel id="tech-select-label">Filter by Technology</InputLabel>
        <Select
          labelId="tech-select-label"
          value={selectedTech}
          label="Filter by Technology"
          onChange={(e) => handleTechChange(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          {allTechnologies.map((tech) => (
            <MenuItem key={tech} value={tech}>
              {tech}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={3}>
        {projects.map((project: Iproject) => (
          <Grid  key={project.id}>
            <ProjectsCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
