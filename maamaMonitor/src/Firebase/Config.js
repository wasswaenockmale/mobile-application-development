import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';
// import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtofwXKk0FVtr2j75kykQRV6vCAp2_n8o",
  authDomain: "mamamonitor-abd5f.firebaseapp.com",
  databaseURL: "https://mamamonitor-abd5f-default-rtdb.firebaseio.com",
  projectId: "mamamonitor-abd5f",
  storageBucket: "mamamonitor-abd5f.appspot.com",
  messagingSenderId: "251168060720",
  appId: "1:251168060720:web:fab1c5f50a181777fa04f5"
};

// npx expo instll react-native@0.71.7 - install the latest
// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;