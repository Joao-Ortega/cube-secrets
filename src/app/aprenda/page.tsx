'use client';

import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Box, Chip, Stack } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { courses } from '@/data/courses';
import { CheckCircleOutlineOutlined } from '@mui/icons-material';

export default function LearnPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      {/* Cabeçalho da Página */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Treinamentos <Box component="span" sx={{ color: 'secondary.main' }}>Cube Secrets</Box>
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Escolha o seu desafio. Nossos cursos foram estruturados com uma metodologia lógica e sequencial para você dominar as camadas de cada cubo sem frustração.
        </Typography>
      </Box>

      {/* Grid de Cursos */}
      <Grid container spacing={4}>
        {courses.map((course) => (
          <Grid size={{ xs: 12, md: 6 }} key={course.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'background.paper',
                transition: 'transform 0.2s, border-color 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  borderColor: 'primary.main',
                }
              }}
            >
              {/* Imagem de Capa do Curso */}
              <CardMedia
                component="img"
                height="220"
                image={course.image}
                alt={course.title}
                sx={{ objectFit: 'cover' }}
              />

              {/* Conteúdo do Card */}
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                {/* Badges de Informações Rápidas */}
                <Stack sx={{ marginBottom: 2, flexWrap: 'wrap', direction: 'row' }} spacing={1} useFlexGap>
                  <Chip
                    icon={<SignalCellularAltIcon fontSize="small" />}
                    label={course.level}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                  <Chip
                    icon={<AccessTimeIcon fontSize="small" />}
                    label={`${course.lessonsCount} aulas`}
                    size="small"
                    variant="outlined"
                  />
                </Stack>

                <Typography sx={{ fontWeight: 'bold' }} variant="h5" component="h2" gutterBottom>
                  {course.title}
                </Typography>

                <Typography sx={{ marginBottom: 3 }} variant="body2" color="text.secondary">
                  {course.description}
                </Typography>

                {/* Lista de Vantagens / O que está incluso */}
                <Typography sx={{ fontWeight: 'bold', marginBottom: 1 }} variant="subtitle2" color="text.primary">
                  O que você vai receber:
                </Typography>
                <Grid sx={{ marginBottom: 2 }} container spacing={1}>
                  {course.features.map((feature, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CheckCircleOutlineOutlined sx={{ color: 'secondary.main', fontSize: 18 }} />
                        <Typography variant="caption" color="text.secondary">{feature}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>

              {/* Rodapé do Card com Preço e Ação */}
              <Box sx={{ borderTop: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 3 }}>
                <Box>
                  <Typography sx={{ variant: "caption", color: "text.secondary", display: "block" }}>Investimento</Typography>
                  <Typography sx={{ fontWeight: 'bold' }} variant="h6" color="secondary.main">{course.price}</Typography>
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<MenuBookIcon />}
                  component="a"
                  href={course.linkKiwify}
                  target={course.linkKiwify !== '#' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  disabled={course.linkKiwify === '#'}
                  sx={{ px: 3 }}
                >
                  {course.linkKiwify === '#' ? 'Em Breve' : 'Acessar Curso pelo Kiwify'}
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}