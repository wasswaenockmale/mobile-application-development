import React from "react";
import {View, Text,StyleSheet} from 'react-native';
import Background from "../helpers/background";

const History = (props) => {
    return(
       <Background>
             <View style={styles.contain}>
                <Text style={{color:'white'}}>No records yet, new app</Text>
            </View>
       </Background>
    )
}

const styles = StyleSheet.create({
    contain:{
        padding:40,
    }
})

export default History;