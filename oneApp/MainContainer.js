import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// import the screens
import HomeScreen from "./screens/HomeScreen";
import Details from "./screens/DetailScreen";
import Settings from "./screens/Settings";

// create the screens to use
const homeName = 'Home';
const detailsName = 'Details';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon:({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if(rn === homeName){
                            iconName = focused ? 'home' : 'home-outline';
                        }else if(rn === detailsName){
                            iconName = focused ? 'list' : 'list-outline';
                        }else if(rn === settingsName){
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        return <Ionicons name={iconName} color={color} size={size} />
                    },
                })}
                // tabBarOptions={{
                // }}
            >
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={detailsName} component={Details} />
                <Tab.Screen name={settingsName} component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}