'use client';

import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

export default function Navbar() {
  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ backgroundColor: '#121212', borderBottom: '1px solid #333' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component={Link} href="/" sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 'bold' }}>
          CUBE <Box component="span" sx={{ color: 'secondary.main' }}>SECRETS</Box>
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button color="inherit" component={Link} href="/">Cubos</Button>
          <Button color="inherit" component={Link} href="/acessorios">Acessórios</Button>
          <Button color="inherit" component={Link} href="/aprenda">Aprenda a Montar</Button>
        </Box>

        <IconButton
          color="inherit"
          component="a"
          href="https://www.instagram.com/cube.secrets/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon sx={{ color: '#E1306C' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}