/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {SplashScreen, Login} from './Components/'
import React, { useEffect } from 'react';

function App() {
  // When the application has loaded using the useEffect hook, then load the login page.
  useEffect(()=>{
    <Login />
  }, []);

  return <SplashScreen />;
}

export default App;
