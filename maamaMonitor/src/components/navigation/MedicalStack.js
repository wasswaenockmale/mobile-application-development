import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MedicalInfo from "../../../components/Screens/MedicalInfo";
import MedicalSignUp from "../../../components/Screens/MedicalSignUp";
import MedicalInfo from "../../../components/Screens/MedicalInfo";
import Doctor from "../../../components/Screens/Doctor";

const Stack = createNativeStackNavigator();

export default function MedicalStack(){
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='MedicalSignUp' component={MedicalSignUp} />
        <Stack.Screen name='MedicalLogin' component={MedicalLogin} />
        <Stack.Screen name='MedicalInfo' component={MedicalInfo} />
        <Stack.Screen name='Doctor' component={Doctor} />
    </Stack.Navigator>
}