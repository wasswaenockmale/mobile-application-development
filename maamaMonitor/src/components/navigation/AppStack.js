import { createNativeStackNavigator } from "@react-navigation/native-stack"
import WelcomeScreen from "../Screens/WelcomeScreen";
import Login from "../Screens/Login";
import Sign from "../Screens/Sign";
import ForgotPassword from "../Screens/ForgotPassword";

const Stack = createNativeStackNavigator();

export default function AppStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="welcomeScreen" component={WelcomeScreen}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={Sign}/>
            <Stack.Screen name="forgotpassword" component={ForgotPassword} />
        </Stack.Navigator>
    )
}