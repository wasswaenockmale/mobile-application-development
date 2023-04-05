import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const Splash = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.topText}>Todo List</Text>
            <View style={styles.smallerView}>
                <Text style={styles.smallerView}>Organise your day schedule well</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent:'center',
        justifyContent: 'center',
    },
    topText: {
        fontFamily:'san-serif',
        fontSize: 40,
        color: 'blue',
        textAlign: 'center',
    },
    smallerView:{
        fontSize: 15,
        opacity:0.5,
        textAlign:'center'
    }
});

export default Splash;