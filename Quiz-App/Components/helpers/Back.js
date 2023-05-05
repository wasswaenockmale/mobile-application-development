import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native"
import { TouchableOpacity } from "react-native/types"

const Back = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Ionicons name="chevron-back-outline" size={32} color="white"/>
        </TouchableOpacity>
    )
}

export default Back;