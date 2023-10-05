import React, { FC } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Box, Button, TextField, Typography } from '@mui/material';

export type TypeFormData = {
  email: string;
  password: string;
};

export interface Props {
  handleLogin: SubmitHandler<TypeFormData>;
  handleLoginWithGoogle: () => void;
}

export const Login: FC<Props> = ({ handleLogin, handleLoginWithGoogle }) => {
  const { handleSubmit, control } = useForm<TypeFormData>();

  return (
    <Box data-testid="authentication" sx={{ textAlign: 'center' }}>
      <Typography component="h1" sx={{ m: 3 }} variant="h3">
        Login
      </Typography>

      <form onSubmit={handleSubmit(handleLogin)}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="Email" variant="outlined" />}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label="Password"
              sx={{ display: 'block', mx: 'auto', my: 1, width: '250px' }}
              variant="outlined"
            />
          )}
        />
        <Button
          color="primary"
          sx={{ display: 'block', mx: 'auto', my: 1, p: 1 }}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </form>

      <Typography sx={{ mx: 'auto', my: 1 }}>or</Typography>

      <Button
        onClick={handleLoginWithGoogle}
        sx={{ display: 'block', mx: 'auto', my: 1, p: 1 }}
        variant="outlined"
      >
        Sign in with Google
      </Button>
    </Box>
  );
};
