import {useState, useEffect} from 'react';
import SplashScreen from './Components/screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Components/screens/Login';
import SignUp from './Components/screens/SignUp';
import DashBoard from './Components/screens/DashBoard';
import LogoTitle from './Components/helpers/LogoTitle';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import { Button } from 'react-native';
import Back from './Components/helpers/Back';

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
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name='SignUp' component={SignUp} options={{headerShown: false}} />
          <Stack.Screen name='Home' component={DashBoard} options={{
            headerShown:false
            // headerTitle:'Dashboard',
            // headerTitle: () => <LogoTitle />, 
            // headerRight: ()=>{
            //   <Button 
            //   onPress={()=>alert("The button works very well")}
            //   title='Info'
            //   color="#fff" />
            // },
            // headerLeft:()=>{
            //   <Back />
            // }
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }else{
    return <SplashScreen />
  }
}


