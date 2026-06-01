'use client';

import { Container, Typography, Grid } from '@mui/material';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {
  const bestSellers = products.filter(p => p.category === 'Cubo 3x3');

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
        Cubos Mais Vendidos
      </Typography>

      <Grid container spacing={4}>
        {bestSellers.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
            {/* Usando o novo componente aqui */}
            <ProductCard product={product} />
          </Grid>
        ))}
    </Grid>
    </Container >
  );
}