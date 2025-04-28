import React from "react";
import RNPickerSelect from "react-native-picker-select";
import styles from '../navStyles/styles';
import { View } from "react-native";
import pickerData from '../DataBase/Data.json'; // Import JSON file

const CategoryPicker = ({ selectedValue, onValueChange }) => {
    return (
        <View style={styles.eventPicker}>
            <RNPickerSelect
                placeholder={{ label: "Select Category", value: null }}
                onValueChange={onValueChange}
                value={selectedValue}
                useNativeAndroidPickerStyle={false}
                style={{ inputAndroid: styles.pickerInput, inputIOS: styles.pickerInput }}
                items={pickerData.categories} // Use data from JSON
            />
        </View>
    );
};

export default CategoryPicker;
