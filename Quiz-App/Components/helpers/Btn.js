import { Pressable, Text } from "react-native"

const Btn = (props) =>{
    return(
        <Pressable style={props.btn}>
            <Text style={props.text1}>{props.text}</Text>
        </Pressable>
    )
}

export default Btn;