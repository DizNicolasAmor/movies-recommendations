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
          <IconButton aria-label="menu" color="inherit" edge="start" size="large" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography component="div" sx={{ flexGrow: 1 }} variant="h6">
            Movies recommendations
          </Typography>
          <Authentication />
        </Toolbar>
      </AppBar>
    </Container>
  );
};
