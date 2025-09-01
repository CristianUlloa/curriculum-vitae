import { cvData } from "../data/cvData";
import { Box, Stack, Typography, Link, Chip } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Header() {
  const { name, email, phone, location, linkedin } = cvData.contact;
  return (
    <Box component="header" sx={{ pb: 2, mb: 2, borderBottom: 1, borderColor: "divider" }}>
      <Typography variant="h1" gutterBottom>{name}</Typography>
      <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap">
        <Chip icon={<MailOutlineIcon />} label={<Link href={`mailto:${email}`}>{email}</Link>} variant="outlined" />
        <Chip icon={<PhoneIcon />} label={<Link href={`tel:${phone.replace(/[^+\d]/g,"")}`}>{phone}</Link>} variant="outlined" />
        <Chip icon={<PlaceIcon />} label={location} variant="outlined" />
        <Chip icon={<LinkedInIcon />} label={<Link href={linkedin} target="_blank" rel="noreferrer">LinkedIn</Link>} variant="outlined" />
      </Stack>
    </Box>
  );
}
