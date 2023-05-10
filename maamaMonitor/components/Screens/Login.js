import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';


import Background from '../helpers/background';
import Field from '../helpers/Field'
import Btn from '../helpers/Btn';
import { Database } from 'firebase/database';
import { Auth } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/firebase';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height;

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUser = (change) => {
        setUsername(change);
    }

    const handlePassword = (change) => {
        setPassword(change);
    }
    return(
        <>
            <View style={styles.container}>
                <View style={styles.loginHeader}>
                    <Text style={styles.text}>Welcome Back</Text>
                </View>
                <View style={styles.innerView}>
                    {/* <Text style={styles.text}>Login</Text> */}
                    <Image source={require('../../assets/beautiful-pregnant-woman-purple-background-vector-illustration-50215465.png')} style={styles.logo} />
                    <Text style={{fontSize:20, color: 'purple', marginTop:10}}>Login to your account</Text>
                    <Field placeholder="Email" keyboardType={"email-address"} onChange={handleUser}/>
                    <Field placeholder="Password" secureTextEntry={true} onChange={handlePassword} />
                    <TouchableOpacity
                        style={
                            {...styles.forget, 
                                alignSelf:'center', 
                                marginBottom:10
                            }}
                            onPress={() => alert('set new password')}
                        >
                        <Text style={{color:'purple'}}>Forgot password ?</Text>
                    </TouchableOpacity>
                    <Btn Width="90%" textColor="white" bgColor="purple" btnLabel="Login" Press={()=>{
                        if(username !== "" && password !== ""){
                            // auth
                            props.navigation.navigate('Home');
                        }else{
                            alert('One of the fields are empty');
                        }
                    }}/>

                    <View style={styles.forget}>
                        <Text>Don't have an account ?</Text>
                        <TouchableOpacity onPress={()=>{
                            // alert("Register with us");
                            props.navigation.navigate('Sign')
                        }}>
                            <Text style={{color:'purple'}}> Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    innerView:{
        backgroundColor:'white',
        height:windowHeight,
        width:windowWidth,
        paddingTop:100,
        borderTopLeftRadius:90,
        borderTopRightRadius:90,
        alignItems:'center'
    },
    text:{
        fontSize:30,
        marginVertical:10,
        color:'purple'
    },
    forget:{
        flexDirection:'row',
    },
    loginHeader:{
        height:'15%',
        justifyContent:'center'
    },
    logo:{
        width:70,
        height:70,
        top:30,
        position:'absolute',
        borderRadius:50,
    }
})


export default Login;