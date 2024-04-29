import {AntDesign} from "@expo/vector-icons";
import {Alert, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import useBLE from "../../hooks/useBLE";
import {PulseIndicator} from '../helpers/PulseIndicator';
import DeviceModal from '../helpers/DeviceConnectionModal'

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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const scanForDevices = async () => {
    const isPermissionEnabled = await requestPermissions();
    if (isPermissionEnabled) {
      scanForPeripherals();
    } else {
      Alert.alert('Bluetooth connection', 'Turn on your bluetooth', [
        {
          text: 'ok',
          onPress: () => { },
          style: 'cancel'
        }
      ], { cancelable: true, onDismiss: () => { } });
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
        <AntDesign
          name="left"
          size={20}
          color='white'
          onPress={() => {
          navigation.goBack();
          }}
        />
        <Text style={styles.headerText}>Take Your Blood Pressure</Text>
        <TouchableOpacity onPress={() => navigation.navigate('History', {
          screenName: 'BP'
        })}
          style={styles.bpHistoryBtn}>
          <Text style={{color: 'white'}}>BP history</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.heartRateTitleWrapper}>
        {connectedDevice ? (
          <>
            <PulseIndicator />
            <Text style={styles.heartRateTitleText}>Your Blood Pressure Is:</Text>
            <Text style={styles.heartRateText}>{bloodPressure} Hg/ml</Text>
          </>
        ) : (
          <Text style={styles.heartRateTitleText}>
            Please Connect to a BP Monitor
          </Text>
        )}
      </View>

      <TouchableOpacity
        onPress={connectedDevice ? disconnectFromDevice : openModal}
        style={styles.ctaButton}
      >
        <Text style={styles.ctaButtonText}>
          {connectedDevice ? "Disconnect" : "Connect"}
        </Text>
      </TouchableOpacity>
      <DeviceModal
        closeModal={hideModal}
        visible={isModalVisible}
        connectToPeripheral={connectToDevice}
        devices={allDevices}
      />
      <StatusBar barStyle="light-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    backgroundColor: 'purple',
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 10, 
    alignItems: 'center',
    justifyContent:'space-between'
  },
  heartRateTitleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heartRateTitleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 20,
    color: "black",
  },
  heartRateText: {
    fontSize: 25,
    marginTop: 15,
  },
  ctaButton: {
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});