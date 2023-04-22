import {
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
import { useState } from 'react';
import { useContext } from 'react';
const Sign = ()=>{
    const [] = useState('');
    const [] = useState('');
    const [] = useState('');
    const [] = useState('')
    const [] = useState('');
    const {
        name,
        username,
        email,
        phonenumber,
        password
    } = useContext({});
    return(
        <View style={styles.container}>
            <View style={styles.heading}>
                <Image style={{width:70, height:70}} source={require('../../assets/icon.png')} />
                {/* <Text style={{textAlign:'center', fontSize:25, color:'green'}}>Sign up</Text> */}
            </View>
            <View style={styles.content}>
                {/* <Text style={{textAlign:'center', fontSize:25, color:'green'}}>Sign up</Text> */}
                <TextInput placeholder="Enter your name" style={styles.textInput}/>
                <TextInput placeholder="Enter username" style={styles.textInput}/>
                <TextInput placeholder="Enter phonenumber" style={styles.textInput}/>
                <TextInput placeholder="Enter your email" style={styles.textInput}/>
                <TextInput placeholder="Enter password" style={styles.textInput}/>
                <TextInput placeholder="Confirm password" style={styles.textInput}/>
                <TouchableOpacity style={styles.btn} onPress={() => alert('sign in button clicked')}>
                    <Text style={{textAlign: 'center',color: 'white',}}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"95%",
        height:'90%',
        flexDirection:'column',
        // backgroundColor:'green'
    },
    heading:{
        flex:1,
        width:"99%",
        // borderWidth:1,
        flexDirection: 'column',
        alignItems:'center'
    },
    textInput:{
        width:"90%",
        height:40,
        borderWidth:1,
        borderColor:'green',
        borderRadius:5,
        padding:5,
        margin:5,
        outline:'none',
        color:'green',
    },
    btn:{
        width:'80%',
        height: 40,
        backgroundColor:'green',
        borderWidth: 1,
        borderColor:'green',
        borderRadius:5,
        padding:5,
        margin:5,
    },
    content:{
        flex:5,
        width:"99%",
        alignItems:'center'
    }
});

export default Sign;