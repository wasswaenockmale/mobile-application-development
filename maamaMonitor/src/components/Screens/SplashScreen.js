import {
    View,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';

export default function SplashScreen(){
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Maama Monitor</Text>
                <ActivityIndicator size="small" color="white" shouldRasterizeIOS/>
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
    text:{
        color:'white',
        textAlign:'center',
    }
})