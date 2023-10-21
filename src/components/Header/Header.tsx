import React, { FC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Container, IconButton, Typography, Toolbar } from '@mui/material';
import Authentication from '../Authentication/Authentication';

export interface Props {}

export const Header: FC<Props> = () => {
  return (
    <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movies recommendations
          </Typography>
          <Authentication />
        </Toolbar>
      </AppBar>
    </Container>
  );
};
