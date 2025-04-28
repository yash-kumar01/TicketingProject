import React from "react";
import RNPickerSelect from "react-native-picker-select";
import styles from '../navStyles/styles';
import { Text, View } from "react-native";
import pickerData from '../DataBase/Data.json'; // Import JSON file

const AvailableDatePicker = ({ selectedValue, onValueChange }) => {
    return (
        <View style={styles.eventPicker}>
            <RNPickerSelect
                placeholder={{ label: "Select Date", value: null }}
                onValueChange={onValueChange}
                value={selectedValue}
                useNativeAndroidPickerStyle={false}
                style={{ inputAndroid: styles.pickerInput, inputIOS: styles.pickerInput }}
                Icon={() => <Text style={styles.pickerIcon}>⌵</Text>}
                items={pickerData.availableDates} // Use JSON data
            />
        </View>
    );
};

export default AvailableDatePicker;
