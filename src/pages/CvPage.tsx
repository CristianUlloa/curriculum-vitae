import { Container, Box, Typography, Divider, useTheme } from "@mui/material";
import Header from "../components/Header";
import Section from "../components/Section";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import CertificateCard from "../components/CertificateCard";
import { cvData } from "../data/cvData";
import Sidebar from "../components/Sidebar";

export default function CvPage() {
  const d = cvData;
  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1200px",
        py: 3,
        background: theme.palette.background.default
,
      }}
    >
      {/* Header con color de fondo */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          borderRadius: 2,
          mb: 3,
          px: 3,
          py: 2,
        }}
      >
        <Header />
      </Box>
      <Box sx={{ display: "flex", gap: 3 }}>
        {/* Sidebar izquierda con color de fondo */}
        <Box
          sx={{
            width: "30%",
            minWidth: 200,
            bgcolor: "secondary.main",
            color: "secondary.contrastText",
            borderRadius: 2,
            p: 2,
            boxShadow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <Sidebar />
        </Box>
        {/* Contenido principal */}
        <Box
          sx={{
            flex: 1,
            bgcolor: "background.default",
            color: "text.primary",
            borderRadius: 2,
            p: 2,
            boxShadow: 1,
          }}
        >
          <Section title="Perfil" id="perfil">
            <Typography>{d.profile}</Typography>
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
          
          <Divider sx={{ my: 3 }} />
          <Box sx={{ textAlign: "center", color: "text.secondary", fontSize: 12 }}>
            © {new Date().getFullYear()} <a href="https://cristhiannica.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>cristhiannica.com</a>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
