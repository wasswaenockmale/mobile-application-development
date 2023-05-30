import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../../../components/Screens/Home";
import Doctor from "../../../components/Screens/Doctor";
import WelcomeScreen from "../../../components/Screens/WelcomeScreen";
import History from "../../../components/Screens/History";
import MaamaInfo from "../../../components/Screens/newMaama";


const Stack = createNativeStackNavigator();

export default function AuthStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Doctor" component={Doctor} />
            <Stack.Screen name='History' component={History} />
            <Stack.Screen name='MaamaInfo' component={MaamaInfo} />
            <Stack.Screen name='BP' component={BP} />
            <Stack.Screen name='MoreInfo' component={MoreMama} />
        </Stack.Navigator>
    )
}