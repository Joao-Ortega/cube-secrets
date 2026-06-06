'use client';

import { useState, useEffect } from 'react';
import { Typography, Card, CardMedia, CardContent, Button, Box, Chip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export function ProductCard({ product }: { product: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const fadeDuration = 600;

  useEffect(() => {
    if (!product.images || product.images.length <= 1) return;

    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);

        setIsFading(false);
      }, fadeDuration);

    }, 3500);

    return () => clearInterval(interval);
  }, [product.images]);

  const renderImage = product.images ? product.images[currentImageIndex] : product.image;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'background.paper' }}>
      <CardMedia
        component="img"
        height="250"
        image={renderImage}
        alt={product.name}
        sx={{
          objectFit: 'contain',
          p: 2,
          backgroundColor: '#fff',
          transition: `opacity ${fadeDuration}ms ease-in-out`,
          opacity: isFading ? 0 : 1,
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
          <Chip
            label={product.platform}
            size="small"
            sx={{
              backgroundColor: product.platform === 'Amazon' ? '#232F3E' : '#FFE600',
              color: product.platform === 'Amazon' ? '#FFFFFF' : '#000000',
              fontWeight: 'bold',
              border: product.platform === 'Mercado Livre' ? '1px solid #cca300' : 'none'
            }}
          />
          <Typography variant="h6" color="secondary.main">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(product.price)}
          </Typography>
        </Box>
        <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1">
          {product.name}
        </Typography>
      </CardContent>
      <Box sx={{ padding: 2, textAlign: 'center' }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<ShoppingCartIcon />}
          component="a"
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mb: 0.5 }}
        >
          Ver na Loja
        </Button>

        {product.platform === 'Amazon' && (
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.65rem', display: 'block' }}>
            (link patrocinado)
          </Typography>
        )}
      </Box>
    </Card>
  );
}