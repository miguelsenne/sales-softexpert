import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { CustomLink } from './styles';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ justifyContent: { xs: 'space-between' } }}
        >
          <Box display="flex" alignItems="center">
            <img src="/imagens/logo.png" alt="logo" />
            <Typography variant="h6" color="GrayText">
              Aplicação teste de vendas
            </Typography>
          </Box>

          <Box>
            <CustomLink href="/produtos">Produtos</CustomLink>
            <CustomLink href="/vendas">Vendas</CustomLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
