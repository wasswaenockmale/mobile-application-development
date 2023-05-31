
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/components/contexts/authContext';
import AppStacks from './src/components/navigation/appStacks';


export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppStacks />
      </NavigationContainer>
    </AuthProvider>
    
  );
}