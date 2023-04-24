import { TextInput, View, StyleSheet, Button } from "react-native"

const MaamaInfor = ()=>{
    return(
        <View style={styles.container}>
            <TextInput style={styles.textInput} passwordRules={true} placeholder="Your name"/>
            <TextInput style={styles.textInput} placeholder="Age"/>
            <TextInput style={styles.textInput} placeholder="LNMP"/>
            <TextInput style={styles.textInput} placeholder="Next of kin"/>

            <Button title="Submit" color={'green'} style={{width: '50%'}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:40,
        width:"100%",
        height:'100%',
    },

    textInput:{
        width:"90%",
        height:40,
        borderColor:'green',
        borderWidth:1,
        borderRadius: 5,
        margin:5,
        fontSize:15,

    }
});

export default MaamaInfor;