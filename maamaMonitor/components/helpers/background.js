import React from "react";
import { View, ImageBackground } from "react-native";

const Background = ({children})=>{
    return(
        <View>
            <ImageBackground source={require('../../assets/army-green-vector.png')} style={{height:'100%', width:'100%'}} />
            <View style={{position:'absolute'}}>
                {children}
            </View>
        </View>
    )
}

export default Background;