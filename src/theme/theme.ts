import { createTheme } from "@mui/material/styles";

// Paleta de 3 colores: header, sidebar, contenido
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1a237e",         // Header: azul oscuro
      contrastText: "#fff",
    },
    secondary: {
      main: "#f4f4f5",         // Sidebar: gris claro
      contrastText: "#333",
    },
    background: {
      default: "#ffffff",      // Contenido: blanco
      paper: "#ffffff",
    },
    text: {
      primary: "#222",         // Texto principal
      secondary: "#333",       // Texto sidebar
    },
  },
  typography: {
    fontFamily: [
      "Inter","Roboto","-apple-system","Segoe UI","Helvetica","Arial","Apple Color Emoji","Segoe UI Emoji"
    ].join(","),
    h1: { fontWeight: 800, fontSize: "2rem" },
    h2: { fontWeight: 700, fontSize: "1.35rem" },
    h3: { fontWeight: 700, fontSize: "1.05rem" }
  },
  shape: { borderRadius: 14 }
});

export default theme;
