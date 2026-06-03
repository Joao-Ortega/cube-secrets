'use client';

import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4, 
        px: 2, 
        mt: 'auto', // Joga o footer pro final da página
        backgroundColor: '#050505', // Um tom levemente mais escuro que o background padrão
        borderTop: '1px solid #1a1a1a' 
      }}
    >
      <Container maxWidth="lg">
        {/* Aviso legal da Amazon */}
        <Typography variant="caption" color="text.secondary" align="center" sx={{ display: 'block', mb: 1 }}>
          Como Participante do Programa de Associados da Amazon, o Cube Secrets é remunerado pelas compras qualificadas.
        </Typography>
        
        {/* Direitos autorais */}
        <Typography variant="caption" color="text.secondary" align="center" sx={{ display: 'block' }}>
          © {new Date().getFullYear()} Cube Secrets. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
}