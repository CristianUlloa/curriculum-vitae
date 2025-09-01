import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#111827" },
    secondary: { main: "#4f46e5" },
    background: { default: "#fafafa" }
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
