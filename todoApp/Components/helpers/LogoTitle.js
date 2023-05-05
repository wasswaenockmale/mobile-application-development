import { Ionicons } from "@expo/vector-icons"
import { Image, StyleSheet, Text, View } from "react-native"


export default function LogoTitle(props){
    return(
        <View style={styles.header}>
            <Ionicons name="chevron-back-outline=" size={32} color="black"/>
            <Text>This is what I want</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:'5%',
        width:'100%',
        padding:5,

    }
})