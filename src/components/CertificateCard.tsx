import type { CertificateItem as Item } from "../data/cvData";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function CertificateCard({ title, date, description }: Item) {
  return (
    <Card variant="outlined">
      <CardHeader title={<Typography variant="h3">{title}</Typography>} />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ mb: description ? 1 : 0 }}>{date}</Typography>
        {description && <Typography variant="body2">{description}</Typography>}
      </CardContent>
    </Card>
  );
}
