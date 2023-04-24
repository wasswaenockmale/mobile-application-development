import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native'
import Box from "../helpers/dashbord/Box";
import InfoCard from "../helpers/dashbord/informationCard";
import Background from "../helpers/background";
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
    
    return(
        <Background>
           <View style={styles.contain}>
                <Text style={{color:'white',fontSize:20, margin:10,}}>Health is Wealth</Text>
                <View style={styles.innerContain}>
                    <Box text="Your health history" Press={() => {
                        alert("Checking your health records");
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
           </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    contain:{
        width: Dimensions.get('screen').width,
        height:Dimensions.get('window').height,
        padding:30,
    },
    innerContain:{
        width:'100%',
        flex:2,
        backgroundColor:'#87ab69',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:20,
        borderRadius:10,
    },
    containInf:{
        flex:1,
        
    }
});

export default Home;