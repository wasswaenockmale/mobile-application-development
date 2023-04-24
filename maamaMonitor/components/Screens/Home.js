import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native'
import Box from "../helpers/dashbord/Box";
import InfoCard from "../helpers/dashbord/informationCard";
import Background from "../helpers/background";

function Home(props){
    return(
        <Background>
           <View style={styles.contain}>
                <Text style={{color:'white',fontSize:20, margin:10,}}>Health is Wealth</Text>
                <View style={styles.innerContain}>
                    <Box text="Your health history" Press={() => {
                        alert("Checking your health records");
                        props.navigation.navigate('History');
                    }}/>
                    <Box text="Nearby health centers"/>
                    <Box text="Ambulancies"/>
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
        flexDirection:'column',
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