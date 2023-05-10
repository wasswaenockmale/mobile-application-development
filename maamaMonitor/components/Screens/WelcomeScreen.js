import React from "react";
import Background from "../helpers/background";
import { StyleSheet, View, Text } from "react-native";
import Btn from "../helpers/Btn";

const WelcomeScreen = (props) =>{
    return(
        <>
            <View style={styles.container}>
                <Text style={{...styles.text, marginTop:50}}>Maama Monitor</Text>
                <Text style={{...styles.text, marginBottom: 60, fontSize:20}}>Welcomes you</Text>
                <Btn Width="100%" bgColor="purple" textColor="white" btnLabel="Login" borderWidth={2} borderColor="purple" Press={() =>props.navigation.navigate('Login')}/>
                <Btn Width="100%" bgColor="white" textColor="purple" btnLabel="Sign up" borderWidth={2} borderColor="purple" Press={() => props.navigation.navigate('Sign')}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 40,
        marginVertical:100,
        // backgroundColor:'purple'
        // borderWidth:1
    },
    text:{
        color:'purple',
        fontSize:40,
        textAlign: "center"
    }
})
export default WelcomeScreen;