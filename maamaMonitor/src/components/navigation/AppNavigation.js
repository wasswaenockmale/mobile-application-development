import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

export default function AppNav(){
    const { user } = useContext(AuthContext);

    return(
        <NavigationContainer>
            {user ? <AuthStack /> : <AppStack />}
        </NavigationContainer>
    )
}