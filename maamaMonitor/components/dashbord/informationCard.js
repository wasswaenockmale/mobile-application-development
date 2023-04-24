import { View, StyleSheet, Text } from "react-native"

const InfoCard = props =>{
    return(
        <View style={styles.container}>
           <View style={styles.icon}>
                {/* <Text>Icon here</Text> */}
           </View>
            <Text>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '90%',
        height: 40,
        borderLeftWidth: 2,
        borderLeftColor: 'green',
        flexDirection: 'row',
        alignItems:'center',
        marginTop:10,
        borderRadius:5
    },
    icon:{
        width:50,
        height:50,
        margin: 5,
    }
});

export default InfoCard;