import React from "react";
import Background from "../helpers/background";
import { StyleSheet, View, Text } from "react-native";
import Btn from "../helpers/Btn";

const WelcomeScreen = (props) =>{
    return(
        <Background>
            <View style={styles.container}>
                <Text style={{...styles.text, marginTop:50}}>Welcome to</Text>
                <Text style={{...styles.text, marginBottom: 60}}>Maama Monitor</Text>
                <Btn Width="100%" bgColor="green" textColor="white" btnLabel="Login" Press={() =>props.navigation.navigate('Login')}/>
                <Btn Width="100%" bgColor="white" textColor="green" btnLabel="Sign up" Press={() => props.navigation.navigate('Sign')}/>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 40,
        marginVertical:100,
        // borderWidth:1
    },
    text:{
        color:'white',
        fontSize:40,
    }
})
export default WelcomeScreen;