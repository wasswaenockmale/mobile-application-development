import Home from "../Screens/Home";
import Login from "../Screens/Login";
import Sign from "../Screens/Sign";
import History from "../Screens/History";
import MaamaInfo from "../Screens/newMaama";
import MedicalSignUp from "../Screens/MedicalSignUp";
import MedicalLogin from "../Screens/MedicalLogin";
import MedicalInfo from "../Screens/MedicalInfo";
import Doctor from "../Screens/Doctor";
import BP from "../Screens/BP";
import MoreMama from "../Screens/MoreInfo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../Screens/WelcomeScreen";

const Stack = createNativeStackNavigator()
export default function AppStacks(){
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='History' component={History} />
      <Stack.Screen name='MaamaInfo' component={MaamaInfo} />
      <Stack.Screen name='MedicalSignUp' component={MedicalSignUp} />
      <Stack.Screen name='MedicalLogin' component={MedicalLogin} />
      <Stack.Screen name='MedicalInfo' component={MedicalInfo} />
      <Stack.Screen name='Doctor' component={Doctor} />
      <Stack.Screen name='BP' component={BP} />
      <Stack.Screen name='MoreInfo' component={MoreMama} />
    </Stack.Navigator>
  );
}

export function UnAuthorized() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Welcome' component={WelcomeScreen} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Sign' component={Sign} />
    </Stack.Navigator>
  );
}