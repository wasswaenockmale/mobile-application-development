import {View, Text, StyleSheet } from 'react-native';
import { AntDesign } from "@expo/vector-icons"
const Header = (props) => {
    return(
        <View style={styles.head}>
            <AntDesign name="left" size={24} color="white" onPress={props.Press}/>
            
            <View style={styles.header}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    head:{
        width: '100%',
        backgroundColor:'blue',
        flexDirection:'row',
        padding:10,
    },
    header:{
        marginLeft: 20,
        width:'70%',
    },
    text:{
        color:'white',
        textAlign:'center',
    }
});

export default Header;