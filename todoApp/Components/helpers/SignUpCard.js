import {View, TextInput, StyleSheet, Button, Text} from 'react-native';

const SignUpCard = ()=> {
    return(
        <View style={styles.container}>
            <Text style={styles.sText}>Sign Up</Text>
            <TextInput style={styles.textInput} placeholder='email' placeholderTextColor='#fff'/>
            <TextInput style={styles.textInput} placeholder='name' placeholderTextColor='#fff'/>
            <TextInput style={styles.textInput} placeholder='number' placeholderTextColor='#fff'/>
            <TextInput style={styles.textInput} placeholder='password' placeholderTextColor='#fff'/>
            <TextInput style={styles.textInput} placeholder='confirm password' placeholderTextColor='#fff'/>
            <Button title='create' onPress={()=>alert('clicked the create button.')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        // alignContent:'space-between',
        justifyContent:'space-between',
        height:'70%',
        width: '70%',
        // borderWidth:1,
        margin: 5,
        padding:5,
    },
    img:{
        alignSelf:'center'
    }
    ,
    textInput:{
        borderBottomWidth:1,
        borderBottomColor:'#fff',
        color:'#fff',
        padding:10,
        marginTop:10
    },
    sText:{
        fontSize:30,
        textAlign: 'center',
         color:'#fff'
    }
});

export default SignUpCard;