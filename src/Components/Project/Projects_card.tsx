// import { Link } from "react-router-dom";
// import { Iproject } from "../../Types/Interfaces";

// export function ProjectsCard({
//   project,
// }: {
//   project: Iproject;
// }): React.JSX.Element {
//   return (
// <Link to={`/project/${project.id}`}>
// <h2>{project.project_name}</h2>
//       <p>
//         <strong>Purpose:</strong> {project.purpose}
//       </p>
//       <p>
//         <strong>Technologies:</strong> {project.technologies?.join(", ")}
//       </p>
//       {project.image_filename && (
//        <img 
//        src={`http://localhost:5000/static/images/${project.image_filename}`} 
//        alt={`${project.project_name} screenshot`} 
//      />

//       )}
//     </Link>
//   );
// }


import { Link } from "react-router-dom";
import { Iproject } from "../../Types/Interfaces";
// import { BASE_URL } from "../../Config";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export function ProjectsCard({ project }: { project: Iproject }): React.JSX.Element {
  return (
    <Card
      sx={{
        width: 300,
        height: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 0 15px #f97316",
      }}
    >
      <Link
        to={`/project/${project.id}`}
        style={{
          textDecoration: "none",
          color: "inherit",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {project.image_filename && (
          <CardMedia
            component="img"
            height="140"
            image={project.image_filename}
            alt={`${project.project_name} screenshot`}
          />
        )}


        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              wordBreak: "break-word",
            }}
          >
            {project.project_name}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            <strong>Purpose:</strong> {project.purpose}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 1,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
            }}
          >
            <strong>Technologies:</strong> {project.technologies?.join(", ")}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
