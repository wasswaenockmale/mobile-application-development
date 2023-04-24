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

const Sign = (props) => {

    return(
        <Background>
            <View style={styles.container}>
                <Text style={styles.text}>Register</Text>
                <Text>Create your account</Text>
                <View style={styles.innerView}>
                    <Field placeholder="Your name"/>
                    <Field placeholder="Username"/>
                    <Field placeholder="Email" keyboardType={"email-address"}/>
                    <Field placeholder="Phonenumber"/>
                    <Field placeholder="Password" secureTextEntry={true}/>
                    <Field placeholder="Confirm Password" secureTextEntry={true}/>
                    {/* <View style={styles.forget}>
                        <Text>Forgot password ?</Text>
                    </View> */}
                    <Btn Width="90%" textColor="white" bgColor="#4b6043" btnLabel="Sign up"/>

                    <View>
                        <Text>Already have an account ?</Text>
                        <TouchableOpacity onPress={()=> {
                            alert("Registered");
                            props.navigation.navigate('Login')
                        }}>
                            <Text>Login</Text>
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
        paddingTop:50,
        borderTopLeftRadius:90,
        borderTopRightRadius:90,
        alignItems:'center',
    },
    text:{
        fontSize:50,
        // marginVertical:10,
        color:'white'
    },
    forget:{

    }
})


export default Sign;