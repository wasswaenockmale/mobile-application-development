// In my perspective, a medical center should register doctors and create accounts for doctors. 
// This should not be an implementation for today. 
// It should a future implementation.

import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import Field from '../helpers/Field'
import Btn from '../helpers/Btn';
import { useState } from 'react';
import { db } from '../../Firebase/firebase';
import { ref } from 'firebase/database';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height;

const MedicalSignUp = (props) => {

    const [name, setName]  = useState('');
    // const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [pConfirm, setPConfirm] = useState('')

    // For saving date to the database
    function create(pId, name,username, email, phone, password){
        set(ref(db, 'medicalCenter/' + pId), {
            name: name,
            username: username,
            email: email,
            phone: phone,
            password: password,
            // More is to be saved to this user.
        }).then(() => {
            alert('Data submitted')
        }).catch((error) => {
            alert(error);
        });
    }

    const storeTextInput = {
        getName: text => {
            setName(text);
        },
        getUsername: text => {
            setUsername(text);
        },
        getEmail: text => {
            setEmail(text);
        },
        getPhone: text => {
            setPhone(text);
        },
        getPassword: text => {
            setPassword(text);
        },
        getPConfirm: text => {
            setPConfirm(text)
        }
    }

    
    return(
        <>
            <View style={styles.container}>
                <View style={styles.loginHeader}>
                    {/* <Text style={styles.text}></Text> */}
                    <Text style={styles.text}>Register your medical center</Text>
                    <Text style={{fontSize: 20, color: 'white'}}>Together let's the lifes of expectant mothers.</Text>
                </View>
                
                <Text>Create your account</Text>
                <View style={styles.innerView}>
                    <Field placeholder="Enter the name of the medical center" onChange={storeTextInput.getName}/>
                    {/* <Field placeholder="Username" onChange={storeTextInput.getUsername}/> */}
                    <Field placeholder="Medical center's email" keyboardType={"email-address"} onChange={storeTextInput.getEmail}/>
                    <Field placeholder="medical center fax number" onChange={storeTextInput.getEmail}/>
                    <Field placeholder="Enter password to manage your clients" secureTextEntry={true} onChange={storeTextInput.getPassword}/>
                    <Field placeholder="Confirm Password" secureTextEntry={true} onChange={storeTextInput.getPConfirm}/>

                    <Btn Width="90%" textColor="white" bgColor="purple" btnLabel="Proceed" Press={() => {
                        if( name != '' && 
                            email != '' &&
                            phone != '' &&
                            password != '' &&
                            pConfirm != ''){
                                if(password === pConfirm){
                                    // from here, send data to the database.
                                    // props.navigation.navigate('Login');
                                    alert("This works very well.")
                                }else{
                                    alert('Your passwords don\'t much ');
                                }
                            }
                    }}/>

                    <View style={styles.forget}>
                        <Text>Already have an account ?</Text>
                        <TouchableOpacity onPress={()=> {
                            // alert("Registered");
                            props.navigation.navigate('Login')
                        }}>
                            <Text style={{color:'purple'}}> Login</Text>
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
        paddingTop:50,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        alignItems:'center',
    },
    text:{
        fontSize:50,
        // marginVertical:10,
        color:'white'
    },
    forget:{
        flexDirection:'row',

    }
})

export default MedicalSignUp;