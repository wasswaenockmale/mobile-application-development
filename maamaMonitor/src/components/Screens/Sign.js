import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';


import Field from '../helpers/Field';
import Btn from '../helpers/Btn';
import {useState} from 'react';
// import { db } from '../../src/Firebase/firebase';
import {getDatabase, ref} from 'firebase/database';
import {app} from '../../Firebase/Config';
import {handleSignUp} from '../../utils/functions';
import { useNavigation } from '@react-navigation/native';


const Sign = (props) => {

  const navigation = useNavigation();
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    pConfirm: "",
    hasFocus: false
  });

  const _onBlur = () => {
    setState({ hasFocus: false });
  }

  const _onFocus = () => {
    setState({ hasFocus: true });
  }


  const db = getDatabase(app);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [pConfirm, setPConfirm] = useState('')

  // For saving date to the database
  function create(pId, name, username, email, phone, password) {
    set(ref(db, 'pregnant/' + pId), {
      name: name,
      username: username,
      email: email,
      phone: phone,
      password: password,
      // More is to be saved to this user.
    }).then(() => {
      alert('Data submitted');
    }).catch((error) => {
      alert(error);
    });
  }

  const storeTextInput = {
    getName: text => {
      setName(text);
    },
    getUsername: text => {
      setUsername(text);
    },
    getEmail: text => {
      setEmail(text);
    },
    getPhone: text => {
      setPhone(text);
    },
    getPassword: text => {
      setPassword(text);
    },
    getPConfirm: text => {
      setPConfirm(text)
    }
  }

    
  return (
    <View style={styles.container}>
      <View style={styles.loginHeader}>
        <Text style={styles.text}>Register</Text>
        <Text style={{textAlign: 'center'}}>Create your account</Text>
      </View>
                
      <View style={styles.innerView}>
        <Field placeholder="Your name" onChange={storeTextInput.getName} />
        {/* <Field placeholder="Username" onChange={storeTextInput.getUsername}/> */}
        <Field placeholder="Email" keyboardType={"email-address"} onChange={storeTextInput.getEmail} />
        <Field placeholder="Phonenumber" onChange={storeTextInput.getPhone} keyboardType="numeric" />
        <Field placeholder="Password" secureTextEntry={true} onChange={storeTextInput.getPassword} />
        <Field placeholder="Confirm Password" secureTextEntry={true} onChange={storeTextInput.getPConfirm} />

        <Btn Width="90%" textColor="white" bgColor="purple" btnLabel="Sign up" Press={() => {
          if (password === pConfirm) {
            // from here, send data to the database.
            // props.navigation.navigate('Login');
            // handleSignUp(name, email,phone, password, { navigation } = props, 'Login')
            navigation.navigate('Login');
          } else {
            alert('Your passwords don\'t much ');
          }
        }} />

        <View style={styles.forget}>
          <Text>Already have an account ?</Text>
          <TouchableOpacity onPress={() => {
            // alert("Registered");
            navigation.navigate('Login')
          }}>
            <Text style={{ color: 'purple' }}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginHeader: {
    flex: 1,
    paddingTop:10,
    justifyContent:'center'
  },
  innerView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    // borderWidth: 1,
    flex: 5,
    paddingVertical:20
  },
  text: {
    fontSize: 50,
    color: 'purple',
    textAlign: 'center'
  },
  forget: {
    flexDirection: 'row',
  }
});

export default Sign;