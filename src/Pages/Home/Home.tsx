// import { Link } from "react-router-dom";


// export function Home(): React.JSX.Element {
//   return (
//     <div>
//       <h1>Welcome to My Portfolio</h1>
//       <p>
//         <Link to="/projects">View My Projects</Link>
//       </p>
//     </div>
//   );
// }


// import React from "react";
// import { Box, Typography, Button, Fade, Stack } from "@mui/material";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

// export function Home(): React.JSX.Element {
//   const [checked, setChecked] = React.useState(false);

//   React.useEffect(() => {
//     setChecked(true);
//   }, []);

//   return (
//     <Fade in={checked} timeout={1000}>
//       <Box
//         sx={{
//           maxWidth: 800,
//           margin: "80px auto 40px",
//           padding: 3,
//           bgcolor: "background.paper",
//           borderRadius: 2,
//           boxShadow: 3,
//           textAlign: "center",
//         }}
//       >
//         <Typography variant="h3" component="h1" gutterBottom>
//           שלום, אני דוד
//         </Typography>

//         <Typography variant="h6" color="text.secondary" paragraph>
//           Full Stack Developer עם גישה יסודית ומודרנית לבניית מערכות יציבות ותחזוקתיות.
//           מחבר בין Frontend ל-Backend בצורה הרמונית, תוך תשומת לב לחווית המשתמש ויעילות הקוד.
//         </Typography>

//         <Stack
//           direction="row"
//           spacing={4}
//           justifyContent="center"
//           sx={{ marginTop: 3 }}
//         >
//           <Button
//             variant="outlined"
//             startIcon={<GitHubIcon />}
//             href="https://github.com/yourgithubusername"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             GitHub
//           </Button>

//           <Button
//             variant="outlined"
//             startIcon={<LinkedInIcon />}
//             href="https://linkedin.com/in/yourlinkedinprofile"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             LinkedIn
//           </Button>
//         </Stack>
//       </Box>
//     </Fade>
//   );
// }


import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export function Home(): React.JSX.Element {
  return (
    <Box sx={{ padding: 4, paddingTop: "80px", paddingBottom: "80px" }}>
      {/* Section ראשי */}
      <Box sx={{ pl: 20}}>
        <Grid container spacing={4} alignItems="center">
          <Grid>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Hello.
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.7, mb: 1 }}>
              I'm David
            </Typography>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Full Stack Developer
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                sx={{ mr: 2, bgcolor: "#f97316", "&:hover": { bgcolor: "#ea580c" } }}
              >
                Got a project?
              </Button>

            </Box>
          </Grid>

          <Grid  sx={{ pl: 10}}>
            <Box
              component="img"
              src="src/assets/images/logo 1.webp"
              alt="logo"
              sx={{
                width: "100%",
                borderRadius: 3,
                boxShadow: "0 0 15px #f97316",
                maxWidth: 230,
                mx: "auto",
                display: "block",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          mt: 6,
          display: "flex",
          justifyContent: "center",
          gap: 4,
          opacity: 0.3,
          flexWrap: "wrap",
          fontWeight: "bold",
          letterSpacing: 1.2,
        }}
      >
        {["Docker", "CSS", "TypeScript", "Postman", "MySQL", "Neon", "Firebase", "Flask", "Python", "React", "Mui", "GitHub"].map((tech) => (
          <Typography key={tech}>{tech}</Typography>
        ))}
      </Box>


    </Box>
  );
}
