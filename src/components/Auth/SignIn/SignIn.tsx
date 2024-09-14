import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';
import React, { FormEvent, useState } from 'react';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  function sign(e: FormEvent) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user);
        setEmail('');
        setPassword('');
        setError('');
      })
      .catch(error => {
        setError('Váš účet nebyl nalezen');
        console.log(error);
      });
  }

  return (
    <div>
      <h3>Přihlaste se ke svému účtu</h3>
      <form>
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
        <button onClick={sign}>Enter</button>
      </form>
      {error ? <p>hesla se neshodují</p> : ''}
    </div>
  );
  //зарегаться
};

export default SignIn;
