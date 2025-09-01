import type { ExperienceItem as Item } from "../data/cvData";
import { Card, CardContent, CardHeader, Typography, Stack } from "@mui/material";

export default function ExperienceCard({ role, company, period, location, bullets }: Item) {
  return (
    <Card variant="outlined">
      <CardHeader
        title={<Typography variant="h3">{role}</Typography>}
        subheader={company}
      />
      <CardContent>
        <Stack direction="row" spacing={1} sx={{ color: "text.secondary", mb: bullets && bullets.length ? 1 : 0 }}>
          <Typography variant="body2">{period}</Typography>
          {location && <Typography variant="body2">• {location}</Typography>}
        </Stack>
        {bullets && bullets.length > 0 && (
          <ul style={{ marginTop: 0 }}>
            {bullets.map((b, idx) => <li key={idx}><Typography variant="body2">{b}</Typography></li>)}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
