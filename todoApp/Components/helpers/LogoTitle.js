import { AntDesign } from "@expo/vector-icons"
import { Image, StyleSheet, Text, View } from "react-native"


export default function LogoTitle(){
    return(
        <View style={styles.header}>
            <AntDesign name="left" size={24} color="black" />
            <Text>This is what I want</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:'20%',
        width:'100%',
        padding:5,

    }
})