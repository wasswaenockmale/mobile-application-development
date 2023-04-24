
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Screens/Home';
import Login from './components/Screens/Login';
import Sign from './components/Screens/Sign';
import History from './components/Screens/History'
import Welcome from './components/Screens/WelcomeScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Sign' component={Sign} />
        <Stack.Screen name='History' component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}