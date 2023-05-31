import { getAuth, onIdTokenChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) =>{
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [tokens, setTokens] = useState(null);
    
    useEffect(()=>{
        return (
            onIdTokenChanged(auth, (user) => {
                if(user){
                    setUser(user);
                }else{
                    setUser(null)
                }
            })
        )
    }, []);

    return(
        <AuthContext.Provider value={{
            isLoading,
            setIsLoading,
            user,
            setUser,
            tokens,
            setTokens
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;