import React, { FC } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';

export type TypeFormData = {
  email: string;
  password: string;
};

export interface Props {
  handleClose: () => void;
  handleLogin: SubmitHandler<TypeFormData>;
  handleLoginWithGoogle: () => void;
  open: boolean;
}

export const Login: FC<Props> = ({ handleClose, handleLogin, handleLoginWithGoogle, open }) => {
  const { handleSubmit, control } = useForm<TypeFormData>();

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-login-title">
      <Box
        data-testid="authentication"
        sx={{
          background: '#FFF',
          borderRadius: '3px',
          mx: 'auto',
          my: 7,
          p: 3,
          textAlign: 'center',
          width: '300px',
        }}
      >
        <Typography component="h1" id="modal-login-title" sx={{ m: 3 }} variant="h3">
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
    </Modal>
  );
};
