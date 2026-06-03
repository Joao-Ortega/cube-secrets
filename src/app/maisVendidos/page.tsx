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

// Função auxiliar para transformar a string "R$ 79,90" no número 79.90
const parsePrice = (priceString: string) => {
  if (!priceString) return 0;
  // Remove tudo que não for número ou vírgula, e troca a vírgula por ponto
  const cleanString = priceString.replace(/[^\d,]/g, '').replace(',', '.');
  return parseFloat(cleanString) || 0;
};

export default function Home() {
  // Estado para controlar a ordenação. Começa como 'asc' (ascendente = mais barato)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // 1. Filtra apenas os cubos 3x3
  const bestSellers = products.filter(p => p.isBestSeller);

  // 2. Ordena os produtos baseando-se no estado atual
  const sortedProducts = [...bestSellers].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price; // Mais Barato primeiro
    } else {
      return b.price - a.price; // Mais Caro primeiro
    }
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        Cubos Mais Vendidos
      </Typography>

      {/* Barra de Controles (Filtros/Ordenação) */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
        <FormControl size="small" sx={{ minWidth: 200, backgroundColor: 'background.paper' }}>
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

      {/* Grid de Produtos usando o array já ordenado */}
      <Grid container spacing={4}>
        {sortedProducts.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}