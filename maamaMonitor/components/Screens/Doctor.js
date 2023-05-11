import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import { SafeAreaView, StyleSheet, View } from "react-native"

const Doctor = ({navigation}) => {
    const [number, setNumber] = useState(0)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Ionicons name="menu-outline" size={24} color="white" />
                    <Text>Doctor</Text>
                </View>
                <View>
                    <Ionicons name="notifications-outline" size={24} color="white" />
                    <Text style={styles.notificationNumber}>{number}</Text>
                </View>
            </View>
            <View style={styles.container}>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:0,
        height:'100%',
        width:'100%'
    },
    header:{
        backgroundColor:'purple',
        width:'100%',
        height:'10%',
        flexDirection:"row",
        justifyContent:'space-between'

    }
})