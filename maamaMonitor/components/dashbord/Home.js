import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import Box from "./Box";
import InfoCard from "./informationCard";
function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Hi, Maama</Text>
            <View style={styles.boxContainer}>
                <Box text="Records"/>
                <Box text="Near by Hospital"/>
                <Box text="Ambulances"/>
                <Box text="Take BP"/>
            </View>
            <View style={styles.info}>
                <InfoCard text="Weeks of anuration"/>
                <InfoCard text="Key dates"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        padding:10,
        flexDirection:'column',
    },
    header:{
        height:'5%',
        padding:10,
    },

    boxContainer:{
        width:"100%",
        height: '50%',
        flexDirection: 'row',
        justifyContent:'space-around',
        flexWrap:'wrap',
        padding:5,
        // borderWidth:1,
    },
    info:{
        width:'100%',
        height:'30%',
        padding:10
    }
});

export default Home;