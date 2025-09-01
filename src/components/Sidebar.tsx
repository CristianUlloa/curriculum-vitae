import { Box, Link, Stack, Chip } from "@mui/material";
import { cvData } from "../data/cvData";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Section from "./Section";
import ChipList from "../components/ChipList";



export default function ContactSidebar({ }) {
    const { email, phone, location, linkedin } = cvData.contact;
  
  return (
    <Box sx={{ p: 2 }}>
      <Section title="Datos Personales" id="DatosPersonales">
        <Stack direction="column" spacing={1.5}>
          <Chip
            icon={<MailOutlineIcon />}
            label={<Link href={`mailto:${email}`}>{email}</Link>}
            variant="outlined"
            sx={{ justifyContent: "flex-start" }}
          />
          <Chip
            icon={<PhoneIcon />}
            label={<Link href={`tel:${phone.replace(/[^+\d]/g,"")}`}>{phone}</Link>}
            variant="outlined"
            sx={{ justifyContent: "flex-start" }}
          />
          <Chip
            icon={<PlaceIcon />}
            label={location}
            variant="outlined"
            sx={{ justifyContent: "flex-start" }}
          />
          <Chip
            icon={<LinkedInIcon />}
            label={<Link href={linkedin} target="_blank" rel="noreferrer">LinkedIn</Link>}
            variant="outlined"
            sx={{ justifyContent: "flex-start" }}
          />
        </Stack>
      </Section>

      <Section title="Competencias" id="competencias">
        <ChipList items={cvData.competencias} />
      </Section>
      <Section title="Tecnologías" id="tecnologias">
        <ChipList items={cvData.tecnologias} />
      </Section>
      <Section title="Pasatiempos e intereses" id="hobbies">
        <ChipList items={cvData.hobbies} />
      </Section>
    </Box>
  );
}
