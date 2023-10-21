import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { Login } from '../Login';
import setupFirebase from '../../utils/firebase';
import { TypeUser, getUser, resetUser, setUser } from '../../redux/slices/user.slice';

const Authentication: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const { auth, googleAuthProvider } = setupFirebase();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = async ({ email, password }: { email: string; password: string }) => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      const newUser: TypeUser = {
        displayName: data.user.displayName,
        email: data.user.email,
        uid: data.user.uid,
      };
      dispatch(setUser(newUser));
      handleClose();
    } catch (err) {
      const message = err instanceof FirebaseError ? `Login error: ${err.code}` : 'Login error';
      toast(message, { type: 'error' });
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      const data = await signInWithPopup(auth, googleAuthProvider);
      const newUser: TypeUser = {
        displayName: data.user.displayName,
        email: data.user.email,
        uid: data.user.uid,
      };
      dispatch(setUser(newUser));
      handleClose();
    } catch (err) {
      const message = err instanceof FirebaseError ? `Login error: ${err.code}` : 'Login error';
      toast(message, { type: 'error' });
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      await dispatch(resetUser());
    } catch (err) {
      const message = err instanceof FirebaseError ? `Logout error: ${err.code}` : 'Logout error';
      toast(message, { type: 'error' });
    }
  };

  return (
    <>
      {user.uid ? (
        <Button onClick={handleLogout} variant="contained">
          Log out
        </Button>
      ) : (
        <Button onClick={handleOpen} variant="contained">
          Log in
        </Button>
      )}
      <Login
        handleClose={handleClose}
        handleLogin={handleLogin}
        handleLoginWithGoogle={handleLoginWithGoogle}
        open={open}
      />
    </>
  );
};

export default Authentication;
