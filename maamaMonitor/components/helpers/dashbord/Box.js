import { TouchableOpacity, StyleSheet, View, Text } from "react-native"
// props = {text,Press}
 const Box = (props)=>{
    return(
        <View style={styles.container}>
           <TouchableOpacity style={styles.touchable} onPress={props.Press}>
                <Text style={styles.text}>{props.text}</Text>
           </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'40%',
        height: '40%',
        backgroundColor: 'green',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin:10,
    },
    text:{
        color: 'white',
        fontSize: 20,
    },
    touchable:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
    }
});

export default Box;