import {View, StyleSheet, Text} from 'react-native';
import ImageView from '../helpers/ImageView';

const image = require('../assets/logo_1.png');

export default function SplashScreen(){
    return(
    <View style={styles.container}>
        <ImageView imageURL={image}/>
        <Text style={styles.todo}>Todo App</Text>
        <Text style={styles.schedule}>Schedule your daily activities</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    todo:{
        color:'#fff',
        fontSize:40
    },
    schedule:{
        color:'#fff',
        fontSize:10
    }
  });