import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Btn = props =>{
    return(
        <TouchableOpacity
            onPress={props.Press}
            style={{
                backgroundColor: props.bgColor,
                borderRadius:100,
                alignItems: 'center',
                width: props.Width,
                borderWidth: props.borderWidth,
                borderColor: props.borderColor,
                paddingVertical: 5,
                marginBottom:20,
            }}>
                <Text style={{
                    color: props.textColor,
                    fontSize:25,
                    fontWeight: 'bold'
                }}>{props.btnLabel}</Text>
        </TouchableOpacity>
    )
}

export default Btn;
