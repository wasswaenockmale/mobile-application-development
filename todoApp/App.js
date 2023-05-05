import {useState, useEffect} from 'react';
import SplashScreen from './Components/screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Components/screens/Login';
import SignUp from './Components/screens/SignUp';
import DashBoard from './Components/screens/DashBoard';
import LogoTitle from './Components/helpers/LogoTitle';

const Stack = createNativeStackNavigator();

export default function App(){
  const [splash, setSplash] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setSplash(true);
    },2000);
  },[]);


  if(splash){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='Home' component={DashBoard} options={{headerTitle: () => <LogoTitle />}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }else{
    return <SplashScreen />
  }
}


