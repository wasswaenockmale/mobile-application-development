import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    StatusBar,
} from 'react-native';


import Field from '../helpers/Field'
import Btn from '../helpers/Btn';
import { useState } from 'react';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height;

const MaamaInfo = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [lnmp, setLnmp] = useState('');
    const [nok, setNok] = useState('');
    const [nokPhoneNumber, setNokPhoneNumber] = useState('');

    const functions = {
        handleAge: newText=>{
            setAge(newText);
        },
        handleName: newText=>{
            setName(newText);
        },
        handleLnmp: newText=>{
            setLnmp(newText);
        },
        handleNok: newText=>{
            setNok(newText);
        },
        handleNokPhoneNumber: newText=>{
            setNokPhoneNumber(newText);
        },
        pressBtn: function(){
            if(name != '' && nok != '' && age != '' && nokPhoneNumber != '' && lnmp != ''){
                console.log(name);
                console.log(nok);
                console.log(nokPhoneNumber)
            }else{
                alert('There is something wrong!!!!');
            }
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Help us understand you.</Text>
            <Text>We want to know more about you.</Text>
            <View style={styles.innerView}>
                <Text>What is your name?</Text>
                <Field placeholder="Your Full name" onChange={functions.handleName}/>
                <Text>How old are you?</Text>
                <Field placeholder="Age" onChange={functions.handleAge}/>
                <Text>When did you last have your periods?</Text>
                <Field placeholder="LNMP" onChange={functions.handleLnmp}/>
                <Text>Next of Kin's Name</Text>
                <Field placeholder="Next of Kin" onChange={functions.handleNok}/>
                <Text>Help us capture his number</Text>
                <Field placeholder="NOK's Phone number" onChange={functions.handleNokPhoneNumber}/>
                <Btn Width="90%" textColor="white" bgColor="purple" btnLabel="Submit" Press={functions.pressBtn}/>
            </View>
            <StatusBar barStyle="light-content" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:20,
    },
    innerView:{
        backgroundColor:'white',
        height:windowHeight,
        width:windowWidth,
        padding:5,
        borderTopLeftRadius:90,
        borderTopRightRadius:90,
        alignItems:'center',
    },
    text:{
        fontSize:30,
        color:'purple'
    },
})


export default MaamaInfo;