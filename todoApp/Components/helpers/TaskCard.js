import { StyleSheet, View, Text, Image } from "react-native";
const TaskCard = (props)=>{
    return(
        <View style={styles.container}>
            <Image source={require('../assets/logo')} style={styles.image}/>
            <Text style={styles.heading}>{props.task.title}</Text>
            <Image source={require("../assets/icon.png")} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'95%',
        backgroundColor:'#9bedff',
        borderRadius:5,
        margin:10
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