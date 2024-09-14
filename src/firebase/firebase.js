// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD4ITeYxGVK7gqpOnKVEvEPUSCCAWBmTjY',
  authDomain: 'doctor-tests.firebaseapp.com',
  projectId: 'doctor-tests',
  storageBucket: 'doctor-tests.appspot.com',
  messagingSenderId: '1048296938335',
  appId: '1:1048296938335:web:3549a30ee8a13b0cc874ea',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
