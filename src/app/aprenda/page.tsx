'use client';

import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Box, Chip, Stack } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { courses } from '@/data/courses';
import { CheckCircleOutlineOutlined } from '@mui/icons-material';

export default function LearnPage() {
  const successGreen = '#10b981';

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Treinamentos <Box component="span" sx={{ color: successGreen }}>Cube Secrets</Box>
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Escolha o seu desafio. Nossos cursos foram estruturados com uma metodologia lógica e sequencial para você dominar as camadas de cada cubo sem frustração.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {courses.map((course) => (
          <Grid size={{ xs: 12 }} key={course.id}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                backgroundColor: 'background.paper',
                transition: 'transform 0.2s, border-color 0.2s',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  borderColor: successGreen,
                }
              }}
            >
              <CardMedia
                component="img"
                image={course.image}
                alt={course.title}
                sx={{
                  width: { xs: '100%', md: '320px' },
                  height: { xs: '200px', md: 'auto' },
                  objectFit: 'cover'
                }}
              />

              <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Stack direction="row" spacing={1} sx={{ marginBottom: 2, flexWrap: 'wrap' }} useFlexGap>
                    <Chip
                      icon={<SignalCellularAltIcon fontSize="small" />}
                      label={course.level}
                      size="small"
                      sx={{ borderColor: successGreen, color: successGreen }}
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

                  <Typography sx={{ fontWeight: 'bold', marginBottom: 1 }} variant="subtitle2" color="text.primary">
                    O que você vai receber:
                  </Typography>
                  <Grid container spacing={1}>
                    {course.features.map((feature, index) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CheckCircleOutlineOutlined sx={{ color: successGreen, fontSize: 18 }} />
                          <Typography variant="caption" color="text.secondary">{feature}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>

                <Box sx={{
                  borderTop: { xs: '1px solid #222', md: 'none' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 3,
                  pt: { md: 0 }
                }}>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                      Investimento
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }} color={successGreen}>
                      {course.price}
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    startIcon={<MenuBookIcon />}
                    component="a"
                    href={course.linkKiwify}
                    target={course.linkKiwify !== '#' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    disabled={course.linkKiwify === '#'}
                    sx={{
                      px: 3,
                      backgroundColor: course.linkKiwify !== '#' ? successGreen : undefined,
                      '&:hover': {
                        backgroundColor: course.linkKiwify !== '#' ? '#059669' : undefined,
                      }
                    }}
                  >
                    {course.linkKiwify === '#' ? 'Em Breve' : 'Acessar Curso'}
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}