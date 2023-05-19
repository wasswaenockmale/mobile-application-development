import * as React from 'react';
import {View, Button} from 'react-native';

export default function HomeScreen({navigation}) {
    return(
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Button title='Start' onPress={()=>{
                navigation.navigate('Guess');
            }}/>
        </View>
    )
}