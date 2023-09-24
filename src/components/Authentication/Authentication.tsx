import React, { FC, useState } from 'react';
import { Box, Button } from '@mui/material';
import { toast } from 'react-toastify';
import { User, createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { Login } from '../Login';

import setupFirebase from '../../utils/firebase';

const Authentication: FC = () => {
  const [user, setUser] = useState<User | null>();
  const { auth, googleAuthProvider } = setupFirebase();

  const handleLogin = async ({ email, password }: { email: string; password: string }) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((data) => setUser(data.user))
      .catch((err: Error | FirebaseError) => {
        const message = `Login error: ${err instanceof FirebaseError ? err.code : err.message}`;
        toast(message, { type: 'error' });
      });
  };

  const handleLoginWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider)
      .then((data) => setUser(data.user))
      .catch((err: Error | FirebaseError) => {
        const message = `Login error: ${err instanceof FirebaseError ? err.code : err.message}`;
        toast(message, { type: 'error' });
      });
  };

  const logout = async () => {
    await signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((err: Error | FirebaseError) => {
        const message = `Logout error: ${err instanceof FirebaseError ? err.code : err.message}`;
        toast(message, { type: 'error' });
      });
  };

  return (
    <Box data-testid="authentication" sx={{ textAlign: 'center' }}>
      {user ? (
        <Box>
          <Button onClick={logout} sx={{ display: 'block', mx: 'auto', my: 3 }} variant="outlined">
            Log out
          </Button>
        </Box>
      ) : (
        <Login handleLogin={handleLogin} handleLoginWithGoogle={handleLoginWithGoogle} />
      )}
    </Box>
  );
};

export default Authentication;
