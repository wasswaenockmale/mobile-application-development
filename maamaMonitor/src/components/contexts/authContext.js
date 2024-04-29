import {createContext, useState} from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => { },
  user: {},
  setUser: () => { },
  isLoading: false, 
  setIsLoading: () => { },
  token: null, 
  setToken: () => {}
});

export const AuthProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [tokens, setTokens] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      setIsLoggedIn,
      isLoading,
      setIsLoading,
      user,
      setUser,
      tokens,
      setTokens
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;