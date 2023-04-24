import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';


import Background from '../helpers/background';
import Field from '../helpers/login/Field'
import Btn from '../helpers/Btn';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height;

const Login = (props) => {

    return(
        <Background>
            <View style={styles.container}>
                <Text style={styles.text}>Login</Text>
                <View style={styles.innerView}>
                    <Text>Welcome Back</Text>
                    <Text>Login to your account</Text>
                    <Field placeholder="Email" keyboardType={"email-address"}/>
                    <Field placeholder="Password" secureTextEntry={true}/>
                    <View style={styles.forget}>
                        <Text>Forgot password ?</Text>
                    </View>
                    <Btn Width="90%" textColor="white" bgColor="#4b6043" btnLabel="Login" Press={()=>{
                        alert("Welcome home");
                        props.navigation.navigate('Home');
                    }}/>

                    <View>
                        <Text>Don't have an account ?</Text>
                        <TouchableOpacity onPress={()=>{
                            alert("Register with us");
                            props.navigation.navigate('Sign')
                        }}>
                            <Text>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
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
        fontSize:64,
        marginVertical:10,
        color:'white'
    },
    forget:{

    }
})


export default Login;