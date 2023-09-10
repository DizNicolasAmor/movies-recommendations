import React, { FC, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import setupFirebase from '../../utils/firebase';

const Authentication: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string | null>();
  const { auth, googleAuthProvider } = setupFirebase();

  const handleSubmit = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((data) => setName(data.user.email))
      .catch(console.error);
  };

  const handleGoogleLogin = async () => {
    await signInWithPopup(auth, googleAuthProvider)
      .then((data) => setName(data.user.email))
      .catch(console.error);
  };

  const logout = async () => {
    await signOut(auth)
      .then((data) => {
        console.log(data);
        setName(null);
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
    <div>
      <h1> {name} </h1>
      <div className="email">
        <label htmlFor="email">
          Email Address
          <input id="email" type="text" name="email" value={email} onChange={handleInputChange} />
        </label>
      </div>
      <div className="password">
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
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleGoogleLogin}>Sign-in with Google</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Authentication;
