import { initializeApp } from "firebase/app";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);