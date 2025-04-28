import React from "react";
import RNPickerSelect from "react-native-picker-select";
import styles from '../navStyles/styles';
import { View } from "react-native";
import pickerData from '../DataBase/Data.json'; // Import JSON file


const PlacePicker = ({ selectedCountry, onCountryChange, selectedCity, onCityChange, selectedLocal, onLocalChange }) => {
    return (
        <View style={styles.pickerRow}>
            <View style={styles.placePicker}>
                <RNPickerSelect
                    placeholder={{ label: "Country", value: null }}
                    onValueChange={onCountryChange}
                    value={selectedCountry}
                    useNativeAndroidPickerStyle={false}
                    style={{ inputAndroid: styles.pickerInput, inputIOS: styles.pickerInput }}
                    items={pickerData.countries} // Use JSON data
                />
            </View>

            <View style={styles.placePicker}>
                <RNPickerSelect
                    placeholder={{ label: "City", value: null }}
                    onValueChange={onCityChange}
                    value={selectedCity}
                    useNativeAndroidPickerStyle={false}
                    style={{ inputAndroid: styles.pickerInput, inputIOS: styles.pickerInput }}
                    items={pickerData.cities} // Use JSON data
                />
            </View>

            <View style={styles.placePicker}>
                <RNPickerSelect
                    placeholder={{ label: "Local", value: null }}
                    onValueChange={onLocalChange}
                    value={selectedLocal}
                    useNativeAndroidPickerStyle={false}
                    style={{ inputAndroid: styles.pickerInput, inputIOS: styles.pickerInput }}
                    items={pickerData.locations} // Use JSON data
                />
            </View>
        </View>
    );
};

export default PlacePicker;
