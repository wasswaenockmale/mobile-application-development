import { AntDesign } from "@expo/vector-icons";
import {
    View,
    Text,
    TouchableOpacity,
    Alert,

} from 'react-native';
export default function ForgotPassword(){
    return(
        <View>
            <View>
                <AntDesign name="left" size={32} color="purple" />
                <Text>Reset Password</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.btn} onPress={()=>Alert.alert("password reset")}>
                    <Text>Get code</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}