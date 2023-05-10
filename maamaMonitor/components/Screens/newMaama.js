import {
    View,
    StyleSheet,
    Text,
    Dimensions,
} from 'react-native';


import Background from '../helpers/background';
import Field from '../helpers/Field'
import Btn from '../helpers/Btn';
import { useState } from 'react';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height;

const maamaInfo = (props) => {

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
        <Background>
            <View style={styles.container}>
                <Text style={styles.text}>Help us understand you.</Text>
                <Text>We want to know more about you.</Text>
                <View style={styles.innerView}>
                    <Field placeholder="Your Full name" onChange={functions.handleName}/>
                    <Field placeholder="Age" onChange={functions.handleAge}/>
                    <Field placeholder="LNMP" onChange={functions.handleLnmp}/>
                    <Field placeholder="Next of Kin" onChange={functions.handleNok}/>
                    <Field placeholder="NOK's Phone number" onChange={functions.handleNokPhoneNumber}/>
                    <Btn Width="90%" textColor="white" bgColor="#4b6043" btnLabel="Submit" Press={functions.pressBtn}/>
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
        color:'white'
    },
})


export default maamaInfo;

// import { TextInput, View, StyleSheet, Button } from "react-native"

// const MaamaInfor = ()=>{
//     return(
//         <View style={styles.container}>
//             <TextInput style={styles.textInput} passwordRules={true} placeholder="Your name"/>
//             <TextInput style={styles.textInput} placeholder="Age"/>
//             <TextInput style={styles.textInput} placeholder="LNMP"/>
//             <TextInput style={styles.textInput} placeholder="Next of kin"/>
//             <Button title="Submit" color={'green'} style={{width: '50%'}}/>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container:{
//         padding:40,
//         width:"100%",
//         height:'100%',
//     },

//     textInput:{
//         width:"90%",
//         height:40,
//         borderColor:'green',
//         borderWidth:1,
//         borderRadius: 5,
//         margin:5,
//         fontSize:15,

//     }
// });

// export default MaamaInfor;