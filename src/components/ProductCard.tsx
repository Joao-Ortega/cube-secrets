'use client';

import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Box, Chip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { products } from '@/data/products';

// Componente isolado para gerenciar o estado da imagem de cada produto
export function ProductCard({ product }: { product: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Novo estado para controlar quando a animação de fade deve ocorrer
  const [isFading, setIsFading] = useState(false);

  // Duração da animação de fade em milissegundos
  const fadeDuration = 500;

  useEffect(() => {
    if (!product.images || product.images.length <= 1) return;

    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);

        setIsFading(false);
      }, fadeDuration); // Tempo exato da transição CSS

    }, 3500); // Tempo total que cada imagem fica visível (aumentei um pouco para ficar mais agradável)

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
          // CONFIGURAÇÃO DA ANIMAÇÃO CSS
          // Transiciona a propriedade 'opacity'
          transition: `opacity ${fadeDuration}ms ease-in-out`,
          // Controla a opacidade baseada no estado do React
          opacity: isFading ? 0 : 1,
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        {/* ... (resto do conteúdo do card permanece igual) ... */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1 }}>
          <Chip
            label={product.platform}
            size="small"
            sx={{
              backgroundColor: product.platform === 'Amazon' ? '#232F3E' : '#FFE600',
              color: product.platform === 'Amazon' ? '#FFFFFF' : '#000000',
              fontWeight: 'bold',
              // Opcional: uma bordinha sutil no ML para destacar no tema dark
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