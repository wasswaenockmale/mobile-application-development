import { View, StyleSheet} from "react-native";

import LoginCard from './LoginCard';
export default function Login(){
    return(
        <View style={styles.container}>
            <LoginCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#25292e'
    }
})