import {
    View,
    StyleSheet,
    Statusbar,
} from 'react-native';

export default function SplashScreen(){
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Maama Monitor</Text>
                <View>
                    <View style={styles.dot}></View>
                    <View style={styles.dot}></View>
                    <View style={styles.dot}></View>
                    <View style={styles.dot}></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'purple',
        justifyContent:'center',
        alignContent:'center'
    },
    dot:{
        width:10,
        height:10,
        backgroundColor:'white',
        padding:2
    },
    text:{
        color:'white',
        textAlign:'center',
    }
})