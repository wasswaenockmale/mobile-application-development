import {useMemo, useState} from "react";
import {PermissionsAndroid, Platform} from "react-native";
import {BleManager} from "react-native-ble-plx";
import * as ExpoDevice from 'expo-device';
import base64 from 'react-native-base64';

const BP_UID = "0000180d-0000-1000-8000-00805f9b34fb";
const BP_CHARACTERISTIC = "00002a37-0000-1000-8000-00805f9b34fb";

function useBLE() {
  const bleManager = useMemo(() => new BleManager(), []);

  const [allDevices, setAllDevices] = useState([]);
  const [connectedDevice, setConnectedDevice] = useState(null);
  const [bloodPressure, setBloodPressure] = useState(-1);

  const requestAndroid31Permissions = async () => {
    const bluetoothScanPermissions = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      {
        title: 'Scan Permission',
        message: 'App required bluetooth scanning',
        buttonPositive: 'OK',
      }
    );

    const bluetoothConnectPermissions = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      {
        title: 'Scan Permission',
        message: 'App required bluetooth connecting',
        buttonPositive: 'OK',
      }
    );

    const bluetoothFineLocationPermissions = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Fine Location',
        message: 'App required fine location',
        buttonPositive: 'OK',
      }
    );

    return (
      bluetoothScanPermissions === 'granted' &&
      bluetoothConnectPermissions === 'granted' &&
      bluetoothFineLocationPermissions === 'granted'
    )
  };

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      if ((ExpoDevice.platformApiLevel ?? -1) < 31) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'Bluetooth requires Location',
            buttonPositive: 'OK'
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED
      } else {
        const isAdroid31PermissionGranted =
          await requestAndroid31Permissions();
        return isAdroid31PermissionGranted;
      }
    } else {
      return true
    }
  }

  const isDuplicateDevice = (devices, nextDevice) =>
    devices.findIndex((device_) => nextDevice.id === device_.id) > -1;

  const scanForPeripherals = () => {
    bleManager.startDeviceScan(null, null, (error, device) => {
      // console.log('What happens now!! ');
      if (error) {
        console.log("Error scanning for peripherals:", error);
      }
      if (device) {
        console.log("Discovered device:", device.name, device.id);
        // if (device.name?.includes('CorSense')) {
        // console.log('Comes upto here: ', device.id)
        setAllDevices((prevState) => {
          const isDup = isDuplicateDevice(prevState, device);
          // console.log('Device is dup', isDup);
          if (!isDuplicateDevice(prevState, device)) {
            return [...prevState, device]
          };

          return prevState
        })
        // }
      }
    });
  };

  const connectToDevice = async (device) => {
    try {
      const deviceConnection = await bleManager.connectToDevice(device.id);
      setConnectedDevice(deviceConnection);
      await deviceConnection.discoverAllServicesAndCharacteristics();
      bleManager.stopDeviceScan();
      startStreamingData(deviceConnection)
    } catch (error) {
      console.log('ERRO IN CONNECTION', e);
    }
  }

  const onBloodPressureUpdate = (
    error,
    characteristic
  ) => {
    if (error) {
      console.log(error);
      return -1;
    } else if (!characteristic?.value) {
      console.log("No Data was recieved");
      return -1;
    }

    const rawData = base64.decode(characteristic.value);
    let innerBP = -1;

    const firstBitValue = Number(rawData) & 0x01;

    if (firstBitValue === 0) {
      innerBP = rawData[1].charCodeAt(0);
    } else {
      innerBP =
        Number(rawData[1].charCodeAt(0) << 8) +
        Number(rawData[2].charCodeAt(2));
    }

    setBloodPressure(innerBP);
  };


  const startStreamingData = async (device) => {
    if (device) {
      device.monitorCharacteristicForService(
        BP_UID,
        BP_CHARACTERISTIC,
        onBloodPressureUpdate,
      )
    } else {
      console.log('No device connected. ')
    }
  };

  const disconnectFromDevice = () => {
    if (connectToDevice) {
      bleManager.cancelDeviceConnection(connectedDevice.id);
      setConnectedDevice(null);
      setBloodPressure(0);
    }
  }
  return {
    scanForPeripherals,
    requestPermissions,
    allDevices,
    connectToDevice,
    connectedDevice,
    bloodPressure,
    disconnectFromDevice
  }
};

export default useBLE; 