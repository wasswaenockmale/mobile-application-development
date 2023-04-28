import {
    View,
    StyleSheet,
    Text,
    Dimensions,
} from 'react-native';


import Background from '../helpers/background';
import Field from '../helpers/Field'
import Btn from '../helpers/Btn';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height;

const maamaInfo = (props) => {

    return(
        <Background>
            <View style={styles.container}>
                <Text style={styles.text}>Help us understand you.</Text>
                <Text>We want to know more about you.</Text>
                <View style={styles.innerView}>
                    <Field placeholder="Your Full name"/>
                    <Field placeholder="Age"/>
                    <Field placeholder="LNMP"/>
                    <Field placeholder="Next of Kin"/>
                    <Field placeholder="NOK's Phone number"/>
                    <Btn Width="90%" textColor="white" bgColor="#4b6043" btnLabel="Submit"/>
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