import { View, Modal, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const Dialog = ({isVisible, title, displayText, noPress, yesPress, yes,no}) => {
    return(
        <Modal visible={isVisible} animationType="fade" transparent={true}>
            <View style={styles.modalView}>
                <View style={styles.alert}>
                    <Text style={styles.alertTitle}>{title}</Text>
                    <Text style={styles.alertMessage}>{displayText}</Text>
                <View style={styles.alertButtonGroup}>
                    <TouchableOpacity onPress={noPress} style={styles.alertButton}>
                        <Text>{no}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={yesPress} style={styles.alertButton}>
                        <Text>{yes}</Text>
                    </TouchableOpacity>
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
        // marginLeft:24,
        padding:20,
        width:'100%',
        display:"flex",
        flexDirection:'row',
        justifyContent:"space-between",
        // borderWidth:1
    },
});

export default Dialog;