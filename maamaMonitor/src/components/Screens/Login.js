import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import Field from '../helpers/Field'
import Btn from '../helpers/Btn';
import React, {useContext, useState} from 'react';
import AuthContent from '../contexts/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../../utils/firebase';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('window').height;

const Login = (props) => {
    
  const {user, setUser, setTokens, setIsLoggedIn} = useContext(AuthContent);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = text => {
    setEmail(text);
  };

  const handlePassword = text => {
    setPassword(text);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.loginHeader}>
          <Text style={styles.text}>Welcome Back</Text>
        </View>
        <View style={styles.innerView}>
          {/* <Text style={styles.text}>Login</Text> */}
          <Image source={require('../../../assets/pregnant.png')} style={styles.logo} />
          <Text style={{ fontSize: 20, color: 'purple', marginTop: 10 }}>Login to your account</Text>
          <Field placeholder="Email" keyboardType={"email-address"} onChange={handleEmail} />
          <Field placeholder="Password" secureTextEntry={true} onChange={handlePassword} />
          <Btn Width="90%" textColor="white" bgColor="purple" btnLabel="Login" Press={async () => {
            if (email && password) {
              const response = await login(email, password);
              if (response.data) {
                setIsLoggedIn(true);
                setUser(response.data);
              }
            } else {
              alert('One of the fields are empty');
            }
          }} />

          <TouchableOpacity
            style={
              {
                ...styles.forget,
                alignSelf: 'center',
                marginBottom: 10
              }}
            onPress={() => alert('set new password')}
          >
            <Text style={{ color: 'purple' }}>Forgot password ?</Text>
          </TouchableOpacity>
          <View style={styles.forget}>
            <Text>Don't have an account ?</Text>
            <TouchableOpacity onPress={() => {
              Alert.alert("Signing in")
              props.navigation.navigate('Sign')
            }}>
              <Text style={{ color: 'purple' }}> Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  innerView: {
    backgroundColor: 'white',
    height: windowHeight,
    width: windowWidth,
    paddingTop: 100,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    marginVertical: 10,
    color: 'purple'
  },
  forget: {
    flexDirection: 'row',
  },
  loginHeader: {
    height: '15%',
    justifyContent: 'center'
  },
  logo: {
    width: 70,
    height: 70,
    top: 30,
    position: 'absolute',
    borderRadius: 50,
  }
});


export default Login;