import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import CvPage from "./pages/CvPage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CvPage />
    </ThemeProvider>
  );
}
