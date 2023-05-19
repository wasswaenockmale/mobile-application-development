import * as React from 'react';
import {View, Text} from 'react-native';

export default function Settings({navigation}) {
    return(
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Text style={{
                fontSize:20,
                fontWeight:'bold'
            }}>Settings</Text>
        </View>
    )
}