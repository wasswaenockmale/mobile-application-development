import { 
    createUserWithEmailAndPassword, 
    sendEmailVerification, 
    signInWithEmailAndPassword, 
    signOut,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../Firebase/Config";

export async function handleLogin(...args){
    const [email, password, navigation, screenName] = args;
    if(!email) return alert("Please fill in the email");
    if(!password) return alert("Please fill in the password");

    
    await signInWithEmailAndPassword(auth,email, password).then((response) => {
        
        response.user.getIdToken().then((res)=>{
            AsyncStorage.setItem('userToken',res.toString());
        }).catch((error)=>{
            console.log("error occured", error);
        })
        navigation.navigate(screenName);
    }).catch(()=>{
        alert('Not a user')
    })
}

export async function handleLogout(){
    try{
        // Perform logout with Firebase Authentication.
        signOut(auth);

        // remove user token from asyncStorage.
        await AsyncStorage.removeItem('userToken');
    }catch(error){
        Alert.alert('Error occured.', error);
    }
}

export async function handleSignUp(...args){

    const [name, email,phonenumber, password, navigation, screenName] = args;
    if(!name) return alert("Please fill in the Name");
    // if(!username) return alert("Please fill in the username");
    if(!email) return alert("Please fill in the email");
    if(!phonenumber) return alert("Please fill in your number");
    if(!password) return alert("The password is empty");

     createUserWithEmailAndPassword(auth,email, password).then((user)=>{
        // store the userCredentials to asyncStorage for automatic login.
        sendEmailVerification().then((onfullfilled) => {
            return true;
        }).catch(error => {
            alert("You need to verify your email.")
        })
        alert("Registration is successfull");
        if(user){
            alert(user.user.displayName);
            navigation.navigate(screenName);
        }
    }).catch((error)=>{
        console.log(error)
        console.log("Registration has failed");
    })
}


// export function emailRegex(str){
//     return `${str}`.match("[/\S+@\S+\]")
// }

export function saveNewMaama(){
    
}