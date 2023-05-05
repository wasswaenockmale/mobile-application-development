import { View, StyleSheet} from "react-native";

import LoginCard from '../helpers/LoginCard';

export default function Login({navigation}){
    return(
        <View style={styles.container}>
            <LoginCard navigation={navigation}/>
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