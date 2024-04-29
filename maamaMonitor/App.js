import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthContext, { AuthProvider } from './src/components/contexts/authContext';
import AppStacks, { UnAuthorized } from './src/components/navigation/appStacks';


export default function App() {
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <AuthProvider>
      <NavigationContainer>
        {
          isLoggedIn ? <AppStacks /> : <UnAuthorized />
        }
      </NavigationContainer>
    </AuthProvider>
    
  );
}