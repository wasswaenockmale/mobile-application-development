import SignUpCard from "./SignUpCard";
import { StyleSheet, View } from "react-native";

const SignUp = ()=>{
    return(
        <View style={styles.container}>
            <SignUpCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#25292e',
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',

    }
})
export default SignUp;