import React, { FC, useState } from 'react';
import { Box } from '@mui/material';
import { User, createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { Login } from '../Login';

import setupFirebase from '../../utils/firebase';

const Authentication: FC = () => {
  const [user, setUser] = useState<User | null>();
  const { auth, googleAuthProvider } = setupFirebase();

  const handleLogin = async ({ email, password }: { email: string; password: string }) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((data) => setUser(data.user))
      .catch(console.error);
  };

  const handleLoginWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider)
      .then((data) => setUser(data.user))
      .catch(console.error);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const logout = async () => {
    await signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch(console.error);
  };

  return (
    <Box data-testid="authentication" sx={{ textAlign: 'center' }}>
      {user ? (
        <Box>Log out</Box>
      ) : (
        <Login handleLogin={handleLogin} handleLoginWithGoogle={handleLoginWithGoogle} />
      )}
    </Box>
  );
};

export default Authentication;
