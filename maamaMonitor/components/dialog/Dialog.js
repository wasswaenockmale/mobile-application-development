import { View, Modal, Text, StyleSheet, Button } from "react-native";

const Dialog = (props) => {
    return(
        <Modal visible={props.isVisible} animationType="fade" transparent={true}>
            <View style={styles.modalView}>
                <View style={styles.alert}>
                    <Text style={styles.alertTitle}>Sorry!</Text>
                    <Text style={styles.alertMessage}>{props.displayText}</Text>
                    {/* <Field placeholder="try it"/> */}
                <View style={styles.alertButtonGroup}>
                    <View style={styles.alertButton}>
                        <Button title="OK" onPress={() => props.toggleVisibility()} />
                    </View>
                </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'#fff'
    },
    modalContainer:{
        backgroundColor:"#ccc",
        top:0,
        left:0,
        right:0,
        bottom:0,
        position:'absolute',
    },
    modalView:{
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    },
    alert:{
        width:'100%',
        maxWidth:300,
        margin:48,
        elevation:24,
        borderRadius:2,
        backgroundColor:'#fff'
    },
    alertTitle:{
        margin:24,
        fontWeight:"bold",
        fontSize:24,
        color:"#000"
    },
    alertMessage:{
        marginLeft:24,
        marginRight:24,
        marginBottom:24,
        fontSize:16,
        color:"#000"
    },
    alertButtonGroup:{
        marginTop:0,
        marginRight:0,
        marginBottom:8,
        marginLeft:24,
        padding:10,
        display:"flex",
        flexDirection:'row',
        justifyContent:"flex-end"
    },
    alertButton:{
        marginTop:12,
        marginRight:8,
        width:100
    },
});

export default Dialog;