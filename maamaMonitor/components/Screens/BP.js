import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import Waiting from "../helpers/WaitingBP";

export default function BP(props){
    const res = '';
    const bluetoothPermision = () =>{
        // ask for the bluetooth permision
        
    }
    const establishDeviceConnection = () => {
        // the adrino board has to connect to the mobile application.
    }
    return (
        <View>
            <View>
                <AntDesign name="left" size={32} color='white'/>
                <Text>Take your blood pressure.</Text>
                <TouchableOpacity onPress={props.navigation.navigator('History', {
                    // This is a route parameter.
                    screen: 'BP',
                })}>
                    <Text>BP history</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Make sure your bluetooth is turned on for the application to be able to read your BP</Text>
                <TouchableOpacity>
                    <Text></Text>
                </TouchableOpacity>
                <View>
                    {
                        isChecking ? <Waiting /> : 
                        <View style={styles.BPView}>
                            {
                                isHigh ? <Text style={styles.highBP}>{res}</Text> : <Text style={styles.lowBP}>{res}</Text>
                            }
                        </View>
                     }
                </View>
            </View>
        </View>
    )
}