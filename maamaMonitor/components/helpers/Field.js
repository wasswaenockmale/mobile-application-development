import {
    TextInput,
    StyleSheet,
} from 'react-native'

const Field = props => {
    const handleInput = text => {
        props.onChange(text)
    }
    return (
        <TextInput
        {...props} placeholderTextColor={'purple'} style={styles.inputStyle}
        onChange={ text => handleInput(text)}
        ></TextInput>
    )
}

const styles = StyleSheet.create({
    inputStyle:{
        borderRadius:100,
        color: 'purple',
        paddingHorizontal:10,
        width:"90%",
        height:50,
        marginTop:0,
        marginBottom:20,
        backgroundColor:'rgb(220,220,220)',
    }
})

export default Field;