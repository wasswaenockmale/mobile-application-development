import {
    TextInput,
    StyleSheet,
} from 'react-native'

const Field = props => {
    return (
        <TextInput
        {...props} placeholderTextColor={'green'} style={styles.inputStyle}
        ></TextInput>
    )
}

const styles = StyleSheet.create({
    inputStyle:{
        borderRadius:100,
        color: 'green',
        paddingHorizontal:10,
        width:"90%",
        height:50,
        marginTop:20,
        marginBottom:10,
        backgroundColor:'rgb(220,220,220)',
    }
})

export default Field;