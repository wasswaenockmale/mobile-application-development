import { StyleSheet, Text, View } from "react-native"
import { Icon } from "react-native-vector-icons/Icon"

export default function LogoTitle(){
    return(
        <View style={styles.header}>
            <Icon name="ios-chevron-back" size={32} color="white"/>
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