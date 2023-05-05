import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, } from "react-native";
import TaskCard from "../helpers/TaskCard";
import { TextInput } from "react-native-gesture-handler";

export default function DashBoard({ navigation, route }){

    const [tasks, setTasks] = useState([]);
    // const {fname} = route.params;
    const { email, password } = route.params;
    useEffect(()=>{
        setTasks([
            {
                id: 1,
                title: "First",
                content: "This is the first thing to do",
                time: "02/02/24"
            },
            {
                id:2,
                title: "Second",
                content: "Do competitive programming",
                time: "02/02/24"
            },
            {
                id:3,
                title: "Third",
                content: "This contains content",
                time: "02/02/24"
            },
            {
                id:4,
                title: "First",
                content: "This is the first thing to do",
                time: "02/02/24"
            },
            {
                id:5,
                title: "First",
                content: "This is the first thing to do",
                time: "02/02/24"
            },
        ])
    },[]);

    return(
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Text>{email.charAt(0).toUpperCase() + email.slice(1)}</Text>
                <Text style={styles.navbarText}>These are today's task</Text>
            </View>
            <View style={styles.previewTasks}>
                <FlatList data={tasks} 
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity onPress={() => {
                            navigation.setOptions({title: `Dashboard ${item.title}`})
                        }}>
                            <TaskCard task={item}/>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={task=>task.id}/>
            </View>

            <View>
                <TextInput></TextInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
    },
    navbar:{
        backgroundColor:'white',
        height:'10%',
        width:"100%",
        flexDirection: 'row',
        justifyContent:'space-between',
        alignContent:'center',
        padding:5,
        borderWidth:1,
        borderColor:'white',
    },

    previewTasks:{
        flex:9,
        backgroundColor:'white',
    },
    img:{
        height:30,
        width:30,
        borderWidth:1,
        // borderColor:'white',
        marginTop:20
    },
    navbarText:{
        marginTop:15,
        fontSize: 20,
        padding:10
    }
});