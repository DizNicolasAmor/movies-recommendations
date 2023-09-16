import React, { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';

export interface Props {
  handleLogin: () => void;
  handleLoginWithGoogle: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Login: FC<Props> = ({ handleLogin, handleLoginWithGoogle }) => {
  return (
    <Box data-testid="authentication" sx={{ textAlign: 'center' }}>
      <Typography component="h1" sx={{ m: 3 }} variant="h3">
        Login
      </Typography>
      {/*
      <Typography sx={{ m: 3 }}>Hello {user?.displayName || 'user'}</Typography>
      <Box className="email">
        <label htmlFor="email">
          Email Address
          <input id="email" type="text" name="email" value={email} onChange={handleInputChange} />
        </label>
      </Box>
      <Box className="password">
        <label htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </label>
      </Box>
      <Button onClick={handleLogin} sx={{ display: 'block', mx: 'auto', my: 3 }} variant="outlined">
        Submit
      </Button>
      */}
      <Button
        onClick={handleLoginWithGoogle}
        sx={{ display: 'block', mx: 'auto', my: 3 }}
        variant="outlined"
      >
        Sign in with Google
      </Button>
    </Box>
  );
};

export default Login;
