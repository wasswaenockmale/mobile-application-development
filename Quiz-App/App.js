import Landing from './Components/Screens/Landing';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Questions from './Components/Screens/Questions';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Landing'
              component={Landing}
              />
            <Stack.Screen
              name='Questions'
              component={Questions} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}
