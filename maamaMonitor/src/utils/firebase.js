import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const auth = getAuth();
function signUp(email, password) {
  try {
    const data = createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
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

function login(email, password) {
  try {
    const data = signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    return user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    if (data) {
      return {
        data,
        error
      }
    } else {
      return {
        data: null, 
        error: 'failed to login'
      }
    }
  } catch (error) {
    return {
      data: null,
      error
    }
  }
}

export {
  login,
  signUp
}