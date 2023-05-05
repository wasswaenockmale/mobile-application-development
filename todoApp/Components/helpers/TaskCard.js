import { StyleSheet, View, Text, Image } from "react-native";
const TaskCard = (props)=>{
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.image}/>
            <Text style={styles.heading}>{props.task.title}</Text>
            {/* <Image source={require("../../assets/icon.png")} style={styles.image}/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'95%',
        height:70,
        backgroundColor:'#9bedff',
        borderRadius:5,
        margin:10,
        flexDirection: 'row',
        alignItems:'center',
        padding:10,
        opacity:0.7
    },
    heading:{
        fontSize: 25,
    },
    cont:{
        fontSize:15
    },
    image:{
        height:50,
        width: 50,
    }
});

export default TaskCard;