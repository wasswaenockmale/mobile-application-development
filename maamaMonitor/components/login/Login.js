import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import InputLogin from './InputLogin';
import { useState } from 'react';

const Login = () => {
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.textContent}>Login</Text>
                <InputLogin showText="Enter phonenumber" />
                <InputLogin showText="Enter password" />
                <TouchableOpacity style={styles.btn} onPress={() => alert('Clicked the login button')}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <Text>Sign up</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    },
    textContent:{
        textAlign:'center'
    },
    btn:{
        borderWidth:1,
        borderColor:'green',
        borderRadius:5,
        width:"40%",
        height:40,
        padding:5,
        margin:10,
        alignSelf:'center'
    },
    loginText:{
        fontSize:20,
        textAlign:'center',
        color:'green'
    }
})


export default Login;