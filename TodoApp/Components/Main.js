import React, { useEffect, useState } from "react";
import {View, Text, Image, ScrollView,StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const NagivationBar = ()=>{
    return(
        <View style={styles.navBar}>
            <Image source={require('')} />
            <Text>Tasks</Text>
            <Image source={require('')}/>
        </View>
    );
}
const Main = ()=>{
    const [tasks, setTasks] = useState(['first', 'second']);
    

    // Fetch from the database here.
    useEffect(()=>{
        setTasks([]);
    },[])
    return(
        <View>
            <NagivationBar />
            {/* FlatList is better than ScrollView  */}
            <FlatList 
            data={tasks}
            renderItem={({task})=>(
                <View>
                    <TouchableOpacity onPress={()=>alert(task.title)}><Text>{task.title}</Text></TouchableOpacity>
                </View>
            )}
            />
        {/* <ScrollView>
                {
                    tasks.map((task) => {
                        return(
                            <View key={task.id}>
                                <Text style={styles.title}>{task.title}</Text>
                                <Text style={styles.showText}>{task.text}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },

    title:{

    },
    showText: {

    }
})