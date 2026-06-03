'use client';

import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sizeFilter, setSizeFilter] = useState<string>('Todos');
  const [platformFilter, setPlatformFilter] = useState<string>('Todos');

  const filteredCubes = products.filter(product => {
    const isCube = product.category.includes('Cubo');

    const matchSize = sizeFilter === 'Todos' || product.category.includes(sizeFilter);

    const matchPlatform = platformFilter === 'Todos' || product.platform === platformFilter;

    return isCube && matchSize && matchPlatform;
  });

  const sortedAndFilteredProducts = [...filteredCubes].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        Cubos
      </Typography>

      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: { xs: 'flex-start', sm: 'flex-end' },
        gap: 2,
        mb: 4
      }}>

        <FormControl size="small" sx={{ width: { xs: '100%', sm: 'auto' }, minWidth: 160, backgroundColor: 'background.paper' }}>
          <InputLabel id="platform-label">Plataforma</InputLabel>
          <Select
            labelId="platform-label"
            id="platform-select"
            value={platformFilter}
            label="Plataforma"
            onChange={(e) => setPlatformFilter(e.target.value)}
          >
            <MenuItem value="Todos">Todas as Lojas</MenuItem>
            <MenuItem value="Amazon">Amazon</MenuItem>
            <MenuItem value="Mercado Livre">Mercado Livre</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ width: { xs: '100%', sm: 'auto' }, minWidth: 150, backgroundColor: 'background.paper' }}>
          <InputLabel id="size-label">Tamanho</InputLabel>
          <Select
            labelId="size-label"
            id="size-select"
            value={sizeFilter}
            label="Tamanho"
            onChange={(e) => setSizeFilter(e.target.value)}
          >
            <MenuItem value="Todos">Todos</MenuItem>
            <MenuItem value="2x2">2x2</MenuItem>
            <MenuItem value="3x3">3x3</MenuItem>
            <MenuItem value="4x4">4x4</MenuItem>
            <MenuItem value="5x5">5x5</MenuItem>
            <MenuItem value="6x6">6x6</MenuItem>
            <MenuItem value="7x7">7x7</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ width: { xs: '100%', sm: 'auto' }, minWidth: 200, backgroundColor: 'background.paper' }}>
          <InputLabel id="sort-label">Ordenar por Preço</InputLabel>
          <Select
            labelId="sort-label"
            id="sort-select"
            value={sortOrder}
            label="Ordenar por Preço"
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
          >
            <MenuItem value="asc">Mais Barato</MenuItem>
            <MenuItem value="desc">Mais Caro</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={4}>
        {sortedAndFilteredProducts.length > 0 ? (
          sortedAndFilteredProducts.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <Grid size={{ xs: 12 }}>
            <Typography variant="h6" sx={{ mt: 4, color: 'text.secondary', textAlign: 'center' }}>
              Nenhum cubo encontrado com esses filtros.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

