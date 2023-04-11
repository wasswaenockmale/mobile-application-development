// import { Button, StyleSheet, Text, View } from 'react-native';
// import SignUp from './Components/SignUp';
// import DashBoard from './Components/DashBoard';
import {useState, useEffect} from 'react';
import SplashScreen from './Components/SplashScreen';
import Login from './Components/Login';


export default function App(){
  const [splash, setSplash] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setSplash(true);
    },2500);
  },[]); // Onmount

  if(splash){
    return <Login />
  }else{
    return <SplashScreen />
  }
}


