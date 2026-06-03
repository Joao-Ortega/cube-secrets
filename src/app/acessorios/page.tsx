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

export default function AccessoriesPage() {
  // Estados para controlar os filtros
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [platformFilter, setPlatformFilter] = useState<string>('Todos');

  // 1. Filtra por categoria (Acessórios) e Plataforma
  const filteredAccessories = products.filter(product => {
    // É um acessório?
    const isAccessory = product.category === 'Acessórios';

    // Bate com a plataforma escolhida? (Se for "Todos", passa direto)
    const matchPlatform = platformFilter === 'Todos' || product.platform === platformFilter;

    // Retorna true apenas se for acessório E for da plataforma selecionada
    return isAccessory && matchPlatform;
  });

  // 2. Aplica a ordenação de preço na lista já filtrada
  const sortedAndFilteredProducts = [...filteredAccessories].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price; // Mais Barato primeiro
    } else {
      return b.price - a.price; // Mais Caro primeiro
    }
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        Acessórios para Cubos Mágicos
      </Typography>

      {/* Box contendo os filtros alinhados de forma responsiva */}
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: { xs: 'flex-start', sm: 'flex-end' },
        gap: 2,
        mb: 4
      }}>

        {/* Filtro de Plataforma */}
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

        {/* Ordenação de Preço */}
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

      {/* Grid de Produtos */}
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
              Nenhum acessório encontrado com esses filtros.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}