'use client';

import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4, 
        px: 2, 
        mt: 'auto',
        backgroundColor: '#050505',
        borderTop: '1px solid #1a1a1a' 
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="caption" color="text.secondary" align="center" sx={{ display: 'block', mb: 1 }}>
          Como Participante do Programa de Associados da Amazon, o Cube Secrets é remunerado pelas compras qualificadas.
        </Typography>
        
        <Typography variant="caption" color="text.secondary" align="center" sx={{ display: 'block' }}>
          © {new Date().getFullYear()} Cube Secrets. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
}