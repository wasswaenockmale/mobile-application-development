import React from "react";
import {View, Text,StyleSheet, StatusBar} from 'react-native';
import { Table, TableWrapper, Row,Rows, Col, Cols, Cell } from "react-native-table-component";
import { AntDesign } from "@expo/vector-icons";

const History = (props) => {

    // Pick data from the database about a patient's medical history.
    const tableData = {
        tableHead: ['Head', 'Head', 'Head', 'Head'],
        tabledb: [
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '456\n789'],
            ['a', 'b', 'c', 'd']
        ]
    }
    return(
       <>
             <View style={styles.contain}>
                <View style={styles.header}>
                        <AntDesign name="left" size={24} color="white" style={{}} onPress={() => {
                            props.navigation.navigate('Home');
                        }}/>
                        <Text style={styles.text_heading}>Your medical history</Text>
                    {/* <View style={styles.left}>
                    </View> */}
                </View>
                <View style={{padding:10}}>
                    <Text style={{color:'purple'}}>No records yet, new app</Text>
                    <Table>
                        <Row data={tableData.tableHead} style={styles.head} textStyle={styles.text} />
                        <Rows data={tableData.tabledb} style={styles.text} textStyle={styles.text}/>
                    </Table>
                </View>
                <StatusBar style="auto" />
            </View>
       </>
    )
}

const styles = StyleSheet.create({
    contain:{
        padding:0,
        height:'100%',
        width: '100%',
    },
    header:{
        backgroundColor:'purple',
        width:'100%',
        height:'10%',
        flexDirection:"row",
        alignItems:"center"
    },
    left:{
        width:'90%',
        alignSelf:'stretch',
    },
    head:{
        color:'purple',
        fontSize: 30
    },
    text:{
        color:'purple',
        fontSize: 15
    },
    text_heading:{
        color:'white',
        fontSize: 15,
        marginLeft:20,
        textAlign:'center'
    }
})

export default History;