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

  const bestSellers = products.filter(p => p.isBestSeller);

  const sortedProducts = [...bestSellers].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price; 
    } else {
      return b.price - a.price;
    }
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        Cubos Mais Vendidos
      </Typography>

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