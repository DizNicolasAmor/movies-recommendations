import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, Container, IconButton, Typography, Toolbar } from '@mui/material';
import { getUser } from '../../redux/slices/user.slice';

export interface Props {}

export const Header: FC<Props> = () => {
  const user = useSelector(getUser);

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
          {user ? <Button color="inherit">Logout</Button> : <Button color="inherit">Login</Button>}
        </Toolbar>
      </AppBar>
    </Container>
  );
};
