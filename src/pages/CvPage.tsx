import { Container, Box, Typography, Divider } from "@mui/material";

import Header from "../components/Header";
import Section from "../components/Section";
import ChipList from "../components/ChipList";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import CertificateCard from "../components/CertificateCard";
import { cvData } from "../data/cvData";

export default function CvPage() {
  const d = cvData;
  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Header />

      <Section title="Perfil" id="perfil">
        <Typography>{d.profile}</Typography>
      </Section>

      <Section title="Competencias" id="competencias">
        <ChipList items={d.competencias} />
      </Section>

      <Section title="Tecnologías" id="tecnologias">
        <ChipList items={d.tecnologias} />
      </Section>

      <Section title="Experiencia" id="experiencia">
        <Box sx={{ display: "grid", gap: 2 }}>
          {d.experience.map((e, i) => (
            <Box key={i}>
              <ExperienceCard {...e} />
            </Box>
          ))}
        </Box>

        {d.practices.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h3" sx={{ mb: 1 }}>
              Prácticas
            </Typography>
            <Box sx={{ display: "grid", gap: 2 }}>
              {d.practices.map((p, i) => (
                <Box key={`p-${i}`}>
                  <ExperienceCard {...p} />
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Section>

      <Section title="Formación" id="formacion">
        <Box sx={{ display: "grid", gap: 2 }}>
          {d.education.map((ed, i) => (
            <Box key={i}>
              <EducationCard {...ed} />
            </Box>
          ))}
        </Box>
      </Section>

      <Section title="Cursos" id="cursos">
        <Box sx={{ display: "grid", gap: 2 }}>
          {d.courses.map((c, i) => (
            <Box key={i}>
              {/* Reutilizamos EducationCard para cursos simples */}
              <EducationCard
                degree={c.title}
                institution=""
                period={c.period ?? ""}
                notes={c.description}
              />
            </Box>
          ))}
        </Box>
      </Section>

      <Section title="Certificados" id="certificados">
        <Box sx={{ display: "grid", gap: 2 }}>
          {d.certificates.map((c, i) => (
            <Box key={i}>
              <CertificateCard {...c} />
            </Box>
          ))}
        </Box>
      </Section>

      <Section title="Pasatiempos e intereses" id="hobbies">
        <ChipList items={d.hobbies} />
      </Section>

      <Divider sx={{ my: 3 }} />
      <Box sx={{ textAlign: "center", color: "text.secondary", fontSize: 12 }}>
        Generado con Material UI · Edita el contenido en{" "}
        <code>src/data/cvData.ts</code>
      </Box>
    </Container>
  );
}
