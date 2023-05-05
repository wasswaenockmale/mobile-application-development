import {View, TextInput, StyleSheet, Button, Text} from 'react-native';
import LoginFooter from './LoginFooter';
import React, { useState } from 'react';

const LoginCard = (props)=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getEmail = (text) => {
        setEmail(text);
    }

    const getPassword = (text) => {
        setPassword(text);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.logText}>Login</Text>
            <TextInput 
                style={styles.textInput} 
                placeholder="Enter email" 
                placeholderTextColor='#fff' 
                // keyboardType='email-address' 
                onChangeText={newText => setEmail(newText)}/>

            <TextInput 
                style={styles.textInput} 
                placeholder="Enter password" 
                placeholderTextColor='#fff' 
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}/>

            <Button title="Login" style={styles.btn} onPress={()=> {
                if(email != "" && password != ""){
                    props.navigation.navigate('Home',{email, password});
                }else{
                    alert("Email and password can't be empty!");
                }
            }}/>
            <LoginFooter navigation={props.navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'60%',
        width: '70%',
        alignContent:'center',
        justifyContent:'center',
        // borderWidth:1,
        padding:10,
        margin:5,
        // backgroundColor:'#fff'

    },
    textInput:{
        borderRadius:5,
        borderBottomWidth:1,
        borderBottomColor:'#fff',
        padding: 10,
        margin:10,
        color:'#fff',
    },
    logText:{
        color:'#fff',
        fontSize:30,
        textAlign:'center'
    },
    btn:{
        borderRadius:40
    }
});

export default LoginCard;