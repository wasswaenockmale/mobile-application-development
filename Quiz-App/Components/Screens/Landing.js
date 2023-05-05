import {  StyleSheet, Text, View } from "react-native"
import Btn from "../helpers/Btn"

const Landing = ({navigation}) => {
    const onpress = ()=>{
        navigation.navigate('Questions')
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome to the Quiz App</Text>
            </View>
            <View style={styles.content}>
                <View style={{
                            flex:1,
                            justifyContent:'center',
                            alignItems:'center',
                            }}>
                    <Btn text="Start Quiz" text1={styles.text1} btn={styles.btn} onpress={onpress()}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        padding:20,
        margin: 'auto',
        flexDirection:'column'
    },
    header:{
        // margin:5,
        padding:10,
        height:'10%',
        width:'100%',
        // borderWidth:1
    },
    btn:{
        padding:5,
        borderRadius: 10,
        width: '90%',
        backgroundColor: 'blue',
    },
    text1:{
        color: 'white',
        fontSize: 15,
        textAlign:'center',
    },
    headerText:{
        textAlign:'center',
        alignSelf:'center',
        fontSize:20
    },
    content:{
        width:'100%',
        height:'90%',
        // borderWidth:1,
    }
});

export default Landing;