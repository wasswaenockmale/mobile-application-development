
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Screens/Home';
import Login from './components/Screens/Login';
import Sign from './components/Screens/Sign';
import History from './components/Screens/History'
import Welcome from './components/Screens/WelcomeScreen';
import MedicalSignUp from './components/Screens/MedicalSignUp'
import MedicalLogin from './components/Screens/MedicalLogin';
import MedicalInfo from './components/Screens/MedicalInfo';
import MaamaInfo from './components/Screens/newMaama';
import Doctor from './components/Screens/Doctor'

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
        <Stack.Screen name='MaamaInfo' component={MaamaInfo} />
        <Stack.Screen name='MedicalSignUp' component={MedicalSignUp} />
        <Stack.Screen name='MedicalLogin' component={MedicalLogin} />
        <Stack.Screen name='MedicalInfo' component={MedicalInfo} />
        <Stack.Screen name='Doctor' component={Doctor} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}