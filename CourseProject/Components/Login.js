import React, {useState} from "react";
import {Text, TextInput, View, StyleSheet, Button, StatusBar} from 'react-native';

const Login = ()=>{
    const [user, setUser] = useState('');
    return (
        <View style={styles.constainer}>
            <Text style={styles.text}>Login</Text>
            <TextInput placeholder="Enter email" style={styles.textInput} placeholderTextColor={'blue'} />
            <TextInput placeholder="Enter password" style={styles.textInput} placeholderTextColor={'blue'} passwordRules={'hide'}/>
            <StatusBar style="auto"/>
            <Button title="Login" style={styles.btn} onPress={()=> alert("Checking info")}/>
            <Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        testID:'login',
        fontSize:30,
        color:'blue'
    },
    constainer: {
        margin: 10,
        borderRadius: 5,
        backgroundColor: 'cream',
        padding: 5,
        flex:1,
        alignContent: 'center',
        justifyContent: 'center',
        // borderWidth: 2,
        // borderColor: 'black'
    },
    textInput: {
        padding: 10,
        margin: 10,
        color:'blue',
        borderRadius: 5,
        borderWidth:1,
        borderColor:'blue'

    },
    btn: {
        margin: 20,
        padding: 10,
        borderRadius: 5,
    }
});

export default Login;