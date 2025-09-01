import { cvData } from "../data/cvData";
import { Box, Typography } from "@mui/material";


export default function Header() {
  const { name } = cvData.contact;
  return (
    <Box component="header" sx={{ pb: 2, mb: 2, borderBottom: 1, borderColor: "divider" }}>
      <Typography variant="h1" gutterBottom>{name}</Typography>

    </Box>
  );
}
