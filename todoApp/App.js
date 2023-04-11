import {useState, useEffect} from 'react';
import SplashScreen from './Components/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import DashBoard from './Components/DashBoard';

const Stack = createNativeStackNavigator();

export default function App(){
  const [splash, setSplash] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setSplash(true);
    },2000);
  },[]); // Onmount


  if(splash){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="SignUp" component={SignUp}/>
          <Stack.Screen name='Home' component={DashBoard}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }else{
    return <SplashScreen />
  }
}


