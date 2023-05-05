import { StyleSheet, Text, View } from "react-native"
// import { SafeAreaView } from "react-native"
import Back from "../helpers/Back"
import { SafeAreaView } from 'react-native-safe-area-context'

const Questions = ({ navigation }) =>{
    const back_function = () => {
        navigation.navigate('Landing');
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.headerQtn}>
                <Back onPress={() => back_function()}/>
                <Text style={styles.text}>Questions</Text>
            </View>
            <View style={styles.Qtn}>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:"100%",
        padding:10,
        margin:10
    },
    headerQtn:{
        flexDirection:'row',
        width:'100%',
        height:'10%',
        backgroundColor:'blue'
    },
    text:{
        color:'white',
        fontSize:20,

    }
})
export default Questions;