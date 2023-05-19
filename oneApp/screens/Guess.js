import * as React from 'react';
import {View, Text, StatusBar, TextInput, } from 'react-native';
import Header from './Header';
// import { TextInput } from 'react-native-gesture-handler';

export default function Guess({navigation}){
    function press(){
        navigation.navigate('Home');
    }
    return(
        <View>
            <Header text="Guess a number" Press={press}/>
            <View>
                <Text>Guess a number between 1 to 10</Text>
                <TextInput 
                    style={styles.inputNumber}
                    
                />
            </View>
            <StatusBar style="auto" />
        </View>
    )
}