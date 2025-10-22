import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function Contact(): React.JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        padding: "25px",
      }}
    >
      <h1>Contact Me</h1>
      <p>
        If you have any questions or would like to get in touch, please feel free to reach out via email at{" "}
        <a href="mailto:dudi.gitar@gmail.com" target="_blank" rel="noopener noreferrer">
          dudi.gitar@gmail.com
        </a>.
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "20px",
        }}
      >
        <span>Visit my LinkedIn:</span>
        <IconButton
          href="https://www.linkedin.com/in/david-cohen-0979582a4"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#0a66c2",
            "&:hover": { color: "#004182" },
          }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}
