import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [username, setUsername] = useState('');
    const [isSplashScreen, setIsSplashScreen] = useState(false);
    return(
        <AuthContext.Provider value={{
            username, 
            isSplashScreen,
            
        }}>
            {children}
        </AuthContext.Provider>
    )
}