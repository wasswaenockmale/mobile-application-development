import {
    View,
    TextInput,
    StyleSheet,
    Image,
} from 'react-native'

const InputLogin = props => {
    return (
        <View style={styles.inputSection}>
            <Image style={styles.smallIcon} source={require('../../assets/icon.png')}/>
            <TextInput placeholder={props.showText} style={styles.textEdit} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputSection: {
        width:'95%',
        padding:2,
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        flexDirection:'row',
        borderRadius:10
    },
    smallIcon:{
        width:40,
        height:40,
        margin:1,
    },

    textEdit:{
        width:"80%",
        height:50,
        borderWidth:0,
        outline: 'none',
        color:'green',
        margin:1,
        padding:2,
        fontSize:20
    }
})

export default InputLogin;