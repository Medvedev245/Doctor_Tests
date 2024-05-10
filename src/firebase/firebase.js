import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCqrMZSEkdPXvR3effc0qbe26Lg9uUHQdY',
  authDomain: 'medicine-tests-db.firebaseapp.com',
  projectId: 'medicine-tests-db',
  storageBucket: 'medicine-tests-db.appspot.com',
  messagingSenderId: '818702799015',
  appId: '1:818702799015:web:d5b3c44de02458cb7bcb82',
};

export const app = initializeApp(firebaseConfig);
