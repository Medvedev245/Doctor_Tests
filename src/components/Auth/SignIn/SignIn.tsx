import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';
import React, { FormEvent, useState } from 'react';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [copyPassword, setCopyPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  function sign(e: FormEvent) {
    e.preventDefault();
    if (password !== copyPassword) {
      setError('Hesla se neshodují');
      console.log(error);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user);
        setEmail('');
        setPassword('');
        setCopyPassword('');
        setError('');
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <h3>Registrace</h3>
      <form onSubmit={sign}>
        <input
          placeholder="Enter your email"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          type="email"
        />
        <input
          placeholder="Enter your password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          type="password"
        />
        <button>Enter</button>
      </form>
    </div>
  );
  //зарегаться
};

export default SignIn;
