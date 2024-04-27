import {AntDesign} from "@expo/vector-icons";
import {StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import useBLE from "../../hooks/useBLE";


// use this command eas build --profile development --platform all
export default function BP(props) {
  const navigation = useNavigation();
  const {
    scanForPeripherals,
    requestPermissions,
    allDevices,
    connectToDevice,
    connectedDevice,
    bloodPressure, 
    disconnectFromDevice
  } = useBLE();
  const res = '';
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const scanForDevices = async () => {
    const isPermissionEnabled = await requestPermissions();
    if (isPermissionEnabled) {
      scanForPeripherals();
    }
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const openModal = async () => {
    scanForDevices();
    setIsModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="left" size={32} color='white' onPress={() => {
          props.navigation.navigate('Home');
        }} />
        <Text style={styles.headerText}>Take your blood pressure.</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('History', {
          screenName: 'BP'
        })} style={styles.bpHistoryBtn}>
          <Text style={{ color: 'white' }}>BP history</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Make sure your bluetooth is turned on for the application to be able to read your BP</Text>
        <TouchableOpacity style={styles.takeBP} onPress={() => {
          alert("Machine not connected")
        }}>
          <Text style={styles.BPBtnText}>Take BP</Text>
        </TouchableOpacity>
        <View style={styles.BPDisplay}>
          {
            isChecking ? <Waiting /> :
              <View style={styles.BPView}>
                {
                  bloodPressure.isHigh ? <Text style={styles.highBP}>{res}</Text> : <Text style={styles.lowBP}>{res}</Text>
                }
              </View>
          }
        </View>
      </View>
      <StatusBar barStyle="light-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    backgroundColor: 'purple',
    justifyContent: "space-between"
  },
  headerText: {
    color: 'white'
  },

  bpHistoryBtn: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 5,
    borderRadius: 5
  },

  content: {
        
    flexDirection: 'column',
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  takeBP: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'purple',
    padding: 5,
    margin: 20,
  }
});