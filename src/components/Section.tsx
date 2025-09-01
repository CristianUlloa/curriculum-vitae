import { Box, Typography } from "@mui/material";

type Props = { title: string; children: React.ReactNode; id?: string };
export default function Section({ title, children, id }: Props) {
  return (
    <Box id={id} sx={{ mt: 3 }}>
      <Typography variant="h2" sx={{ mb: 1, pl: 1, borderLeft: 4, borderColor: "primary.main" }}>
        {title}
      </Typography>
      <Box>{children}</Box>
    </Box>
  );
}
