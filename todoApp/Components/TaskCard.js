import { StyleSheet, View, Text } from "react-native";
const TaskCard = (props)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>{props.task.title}</Text>
            <Text style={styles.cont}>{props.task.content}</Text>
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
    }
});

export default TaskCard;