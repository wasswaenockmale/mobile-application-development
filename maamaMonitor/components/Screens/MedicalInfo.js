// Each year, 2.6 million children die before they are one month old. 
// A further 200,000 women die during pregnancy or childbirth. 
// Most of these deaths can be easily prevented if the women know how to minimise their risks, 
// and if infants and mothers get the right healthcare at the right time.
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
} from 'react-native';


import React, { useState } from 'react';
import Field from '../helpers/Field';
import Checkbox from 'expo-checkbox';
import {Opt} from '../helpers/select/OptionSelect';
import Btn from '../helpers/Btn';
import * as Location from 'expo-location';


const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height;

const MedicalInfo = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [loc, setLoc] = useState({});

    // Function for picking the location of the medication center so that it can be stored in the database for future use.
    async function getLocation() {
        const status = await Location.requestForegroundPermissionsAsync();

        if(status == 'granted'){
            alert('Permision granted');
            return;
        }

        const location = await Location.getCurrentPositionAsync({});
        setLoc(location);
    }


    const services = [
        {
            id: 1,
            service: "first"
        },
        {
            id: 2,
            service: "first"
        },
        {
            id: 3,
            service: "first"
        },
        {
            id: 4,
            service: "first"
        },
        {
            id: 5,
            service: "first"
        }
    ]
    return(
        <>
            <View style={styles.container}>
                <View style={styles.loginHeader}>
                    <Text style={styles.text}>Tell us more about the Medical center</Text>
                </View>
                <View style={styles.innerView}>
                    <View>
                        <Text>Where is the medical center located?</Text>
                        <Field />
                   </View>
                   <View>
                        <Text>What Meservices does the medical center offer</Text>
                        <View>
                            <Opt value={false} optionName="First" handleOption/>
                            <Opt value={false} optionName="Second" handleOption/>
                            <Opt value={false} optionName="Third" handleOption/>
                            <Opt value={false} optionName="Fourth" handleOption/>
                            <Opt value={false} optionName="Yeah" handleOption/>
                        </View>
                   </View>
                   <View>
                        <Text>How many medical personels does the Center rely on?</Text>
                        <Field placeholder="Number of medical personal"/>
                   </View>
                   <View>
                        <Text>Does the medical center have an Ambulance?</Text>
                        <Checkbox 
                                style={styles.checkbox}
                                value={isChecked}
                                onValueChange={setIsChecked} />
                   </View>
                   {isChecked && 
                   <View>
                        <Text>Can you provide the number of the Ambulance attendant?</Text>
                        <Field placeholder="Ambulance attendant's name"/>
                        <Field placeholder="Ambulance attendant's phonenumber"/>
                   </View>
                   }

                   <View>
                        <Text>Allow us pick your location coordinates</Text>
                        <Btn btnLabel="Get Coordinates" backgroundColor="purple" width="90%" textColor="white" Press={() => alert('submit button')}/>
                   </View>

                   <Btn btnLabel="submit" backgroundColor="white" width="90%" textColor="purple" Press={() => alert('Submit button')}/>
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
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        alignItems:'center'
    },
    text:{
        fontSize:20,
        marginVertical:10,
        color:'purple'
    },
});


export default MedicalInfo;