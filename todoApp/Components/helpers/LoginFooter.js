import { StyleSheet,View, Text, Pressable } from "react-native";

const LoginFooter = (props)=>{
    return(
        <View>
            <Text style={{textAlign:'center',fontSize:12,color:'#fff'}}>If you don't have an account!</Text>
            <Pressable style={styles.press} onPress={()=> props.navigation.navigate('SignUp', {name: 'register'})}>
                <Text style={styles.tpress}>Sign Up</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    press:{
        backgroundColor:'#25292e',
        padding:2,
        margin: 5,
        borderWidth:1,
        borderColor:'#fff',
        width:'29%',
        alignSelf:'center'
    },
    tpress:{
        color:'#fff',
        textAlign:'center',
    }
})
export default LoginFooter;