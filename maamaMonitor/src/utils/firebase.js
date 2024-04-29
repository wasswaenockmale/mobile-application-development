import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const auth = getAuth();
function signUp(email, password) {
  try {
    const data = createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log("This is the user: ",user)
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    if (data) {
      return {
        data,
        error: null
      }
    } else {
      return {
        data: null,
        error: 'Failed to login'
      }
    }
  } catch (error) {
    return {
      data: null,
      error: error
    }
  }
}

async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Login successful. User:', user);
    
    return {
      data: user,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error: error.message // Return error message instead of error object
    };
  }
}

export {
  login,
  signUp
}