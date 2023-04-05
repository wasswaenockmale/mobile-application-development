 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import { ScrollView, StyleSheet,Text,TextInput, View } from 'react-native';
import Splash from './Components/SplashScreen';
import Login from './Components/Login'

const Greeting = props => {
  return (
    <View>
      <Text>This is {props.name}'s component.</Text>
    </View>
  );
}

const LotsOfGreetings = () => {
  return (
    <View>
      <Greeting name="Enock"/>
      <Greeting name="Elijah"/>
      <Greeting name="Joel"/>
      <Greeting name="Jeminah" />
    </View>
  );
}

function App(){
  const [value, setValue] = useState('');
  const [valArr, setValArr] = useState([]);

  const handleChange = (val)=>{
    // Here, set the using useState;
    setValue(val);
  }
  return (
  // <ScrollView>
  //   <Text style={{
  //     textAlign: 'center',
  //   }}>Enock's React Native application</Text>
  //   <View style={{
  //     backgroundColor: 'blue',
  //     margin: 15
  //   }}>
  //     <Text style={{
  //       color: 'white',
  //       textAlign: 'center'
  //     }}>Image here</Text>
  //   </View>
  //   <View>
  //     <Text>Hello world</Text>
  //     <TextInput style={{
  //       height: 50,
  //       borderRadius: 5,
  //       borderColor: 'blue',
  //       borderWidth:1,
  //       margin: 10,
  //     }}
  //     defaultValue={value}
  //     onChangeText={text => handleChange(text)}
  //     />
  //     <Text style={styles.valueText}>{value}</Text>
  //  </View>
  // </ScrollView>
  <Login />
);

}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  valueText: {
    margin: 10,
    color: 'blue',
    textAlign: 'center'
  }
});

export default App;
