import type { EducationItem as Item } from "../data/cvData";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function EducationCard({ degree, institution, period, notes }: Item) {
  return (
    <Card variant="outlined">
      <CardHeader title={<Typography variant="h3">{degree}</Typography>} subheader={institution} />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ mb: notes ? 1 : 0 }}>{period}</Typography>
        {notes && <Typography variant="body2">{notes}</Typography>}
      </CardContent>
    </Card>
  );
}
