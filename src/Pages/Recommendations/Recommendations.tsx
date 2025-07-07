// import { Irecommend } from '../../Types/Interfaces';
// import { useEffect, useState } from "react";
// import axios from "axios";

// export function Recommendations(): React.JSX.Element {
//   const [recommendations, setRecommendations] = useState<Irecommend[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/recommendations")
//       .then((response) => {
//         setRecommendations(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching recommendations:", error);
//         setError("Failed to load recommendations");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div>Loading recommendations...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       {recommendations.map((rec) => (
//         <div key={rec.id}>
//           <h3>{rec.name}</h3>
//           <p>{rec.role} at {rec.company}</p>
//           <p>Date: {rec.recommendation_date}</p>
//           <a
//             href={`http://localhost:5000/${rec.recommendation_file_path}`}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button>View Recommendation File</button>
//           </a>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }




import { Irecommend } from '../../Types/Interfaces';
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CardActions,
} from "@mui/material";  

export function Recommendations(): React.JSX.Element {
  const [recommendations, setRecommendations] = useState<Irecommend[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/recommendations")
      .then((response) => {
        setRecommendations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recommendations:", error);
        setError("Failed to load recommendations");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading recommendations...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Box sx={{ padding: 4, paddingTop: "80px", paddingBottom: "80px" }}>
      <Typography variant="h4" gutterBottom>
        Recommendations
      </Typography>

      <Grid container spacing={3}>
        {recommendations.map((rec) => (
          <Grid item xs={12} sm={6} md={4} key={rec.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ wordBreak: "break-word" }}
                >
                  {rec.name}
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
                  <strong>Role:</strong> {rec.role}
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
                  <strong>Company:</strong> {rec.company}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Date: {rec.recommendation_date}
                </Typography>
              </CardContent>

              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  href={`http://localhost:5000/${rec.recommendation_file_path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Recommendation File
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
