'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ backgroundColor: '#121212', borderBottom: '1px solid #333' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

        <Typography variant="h6" component={Link} href="/" sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 'bold' }}>
          CUBE <Box component="span" sx={{ color: 'secondary.main' }}>SECRETS</Box>
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Button color="inherit" component={Link} href="/maisVendidos">Mais Vendidos</Button>
          <Button color="inherit" component={Link} href="/">Cubos</Button>
          <Button color="inherit" component={Link} href="/acessorios">Acessórios</Button>
          <Button color="inherit" component={Link} href="/aprenda">Aprenda a Montar</Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>

          <IconButton
            color="inherit"
            component="a"
            href="https://www.instagram.com/cube.secrets/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon sx={{ color: '#E1306C' }} />
            <Typography variant="body2" sx={{ ml: 0.5, color: '#E1306C', display: { xs: 'none', sm: 'block' } }}>
              cube.secrets
            </Typography>
          </IconButton>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu de navegação"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuItem onClick={handleCloseNavMenu} component={Link} href="/maisVendidos">
                <Typography sx={{ textAlign: 'center' }}>
                  Mais Vendidos
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} href="/">
                <Typography sx={{ textAlign: 'center' }}>
                  Cubos
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} href="/acessorios">
                <Typography sx={{ textAlign: 'center' }}>
                  Acessórios
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} href="/aprenda">
                <Typography sx={{ textAlign: 'center' }}>
                  Aprenda a Montar
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

        </Box>
      </Toolbar>
    </AppBar>
  );
}