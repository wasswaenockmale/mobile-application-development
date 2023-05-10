import Checkbox from "expo-checkbox";
import { StyleSheet } from "react-native";
import { View } from "react-native/types";

function Options(props){
    // handleCheck(){
        
    // }
    return(
        <View style={styles.optionContainer}>
            <Checkbox 
                value={props.value}
                onValueChange={props.handleOption}
                style={styles.checkbox}/>
            <Text style={styles.text}>{props.optionName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    optionContainer:{
        flexDirection: "row",
        width:'70%',
        padding:5,
        margin:5
    },
    checkbox:{
        width:50,
        height:50,
        borderWidth:1,
        borderRadius:'purple',
    },
    text:{
        color:'purple',
        fontSize:20,
    }
});

export default Options;