import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
} from 'react-native'
import Box from "../helpers/dashbord/Box";
import InfoCard from "../helpers/dashbord/informationCard";
import Dialog from "../dialog/Dialog";

function Home(props){
    const [isHospitalVisible, setIsHospitalVisible] = useState(false);
    const [isAmbulanceVisible, setIsAmbulanceVisible] = useState(false);

    const toggleHospitalVisibility = () => {
        setIsHospitalVisible(!isHospitalVisible);
    }

    const toggleAmbulanceVisibility = () => {
        setIsAmbulanceVisible(!isAmbulanceVisible);
    }
    
    // Function for picking the location of the expectant mother so that the nearest medical center can be determined.
    // In the radius of 3KM
    async function getLocation() {
        const status = await Location.requestForegroundPermissionsAsync();

        if(status == 'granted'){
            alert('Permision granted');
            return;
        }

        const location = await Location.getCurrentPositionAsync({});
        setLoc(location);
    }

    return(
        <>
           <View style={styles.contain}>
                <View style={styles.header}>
                    <Text>Health is Wealth</Text>
                </View>
                <View style={styles.innerContain}>
                    <Box text="Your health history" Press={() => {
                        // alert("Checking your health records");
                        props.navigation.navigate('History');
                    }}/>
                    <Box text="Nearby health centers" Press={() => toggleHospitalVisibility()}/>
                    <Dialog isVisible={isHospitalVisible} displayText="We currently don't have any health service" Press={() => toggleHospitalVisibility()}/>
                    <Box text="Ambulancies" Press={() => toggleAmbulanceVisibility()}/>
                    <Dialog isVisible={isAmbulanceVisible} displayText="We currently don't have any Ambulance services" Press={() => toggleAmbulanceVisibility()}/>
                    <Box text="+"/>
                </View>
                <View style={styles.containInf}>
                    <InfoCard text="Key dates"/>
                    <InfoCard text="Weeks of pegnancy"/>
                    <InfoCard text="Weeks of pegnancy"/>
                </View>
                <StatusBar style="auto" />
           </View>
        </>
    )
}

const styles = StyleSheet.create({
    contain:{
        width: "100%",
        height:'100%',
    },
    header:{
        backgroundColor:'purple',
        width:'100%',
        height:'10%',
        flexDirection:"row",
        padding:20
    },
    innerContain:{
        width:'100%',
        flex:2,
        backgroundColor:'#F9F8F8',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:20,
        borderRadius:10,
    },
    containInf:{
        flex:1,
        
    },
    left:{
        width:'90%',
        alignSelf:'stretch',
    },
    text:{
        color:'purple',
        fontSize: 15
    },
    text_heading:{
        color:'white',
        fontSize: 15,
        textAlign:'center'
    }
});

export default Home;