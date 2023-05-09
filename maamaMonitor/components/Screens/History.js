import React from "react";
import {View, Text,StyleSheet} from 'react-native';
import Background from "../helpers/background";
import { Table, TableWrapper, Row,Rows, Col, Cols, Cell } from "react-native-table-component";

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
       <Background>
             <View style={styles.contain}>
                <Text style={{color:'white'}}>No records yet, new app</Text>
                <Table>
                    <Row data={tableData.tableHead} style={styles.head} textStyle={styles.text} />
                    <Rows data={tableData.tabledb} style={styles.text} textStyle={styles.text}/>
                </Table>
            </View>
       </Background>
    )
}

const styles = StyleSheet.create({
    contain:{
        padding:40,
    },
    head:{
        color:'white',
        fontSize: 30
    },
    text:{
        color:'white',
        fontSize: 15
    }
})

export default History;