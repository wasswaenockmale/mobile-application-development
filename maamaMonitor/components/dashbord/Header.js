import React from "react";
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Welcome maama</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        
    }
})