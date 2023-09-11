import React, { FC, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { User, createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import setupFirebase from '../../utils/firebase';

const Authentication: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<User | null>();
  const { auth, googleAuthProvider } = setupFirebase();

  const handleSubmit = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((data) => setUser(data.user))
      .catch(console.error);
  };

  const handleGoogleLogin = async () => {
    await signInWithPopup(auth, googleAuthProvider)
      .then((data) => setUser(data.user))
      .catch(console.error);
  };

  const logout = async () => {
    await signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch(console.error);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography component="h1" sx={{ m: 3 }} variant="h3">
        Login
      </Typography>
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
      <Button
        onClick={handleSubmit}
        sx={{ display: 'block', mx: 'auto', my: 3 }}
        variant="outlined"
      >
        Submit
      </Button>
      {user ? (
        <Button onClick={logout} sx={{ display: 'block', mx: 'auto', my: 3 }} variant="outlined">
          Logout
        </Button>
      ) : (
        <Button
          onClick={handleGoogleLogin}
          sx={{ display: 'block', mx: 'auto', my: 3 }}
          variant="outlined"
        >
          Sign in with Google
        </Button>
      )}
    </Box>
  );
};

export default Authentication;
