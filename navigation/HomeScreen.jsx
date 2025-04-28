import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Image,ScrollView } from 'react-native';
import styles from '../navStyles/styles';
import CategoryPicker from '../home/CategoryPicker';
import EventPicker from '../home/EventPicker';
import PlacePicker from '../home/PlacePicker';
import DateTimePicker from '@react-native-community/datetimepicker';

const HomeScreen = ({ setCurrentScreen }) => {

    // State management for pickers and date
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedLocal, setSelectedLocal] = useState(null);
    const [date, setDate] = useState(null);
    const [showPicker, setShowPicker] = useState(false);

    // Date change handler
    const onChange = (event, selectedDate) => {
        setShowPicker(false); // Hide picker after selection
        if (selectedDate) {
            setDate(selectedDate); // Set selected date
        }
    };

    // Navigate to result screen
    const showResult = () => {
        console.log("Result tickets pressed");
        console.log("Selected Category:", selectedCategory);
        console.log("Selected Event:", selectedEvent);
        console.log("Selected Country:", selectedCountry);
        console.log("Selected City:", selectedCity);
        console.log("Selected Local:", selectedLocal);
        console.log("Selected Date:", date ? date.toLocaleDateString() : "None");
        setCurrentScreen('result');
    };

    return (
        <ScrollView>
        <View style={styles.layout}>
            <Image source={require('../assets/2).png')}
      style={styles.homeImg}
            ></Image>
            <Text style={styles.homescreenHeader}>Search Tickets</Text>

            {/* Display the date or "Choose Date" text */}
            <TouchableOpacity onPress={() => setShowPicker(true)}>
                <Text style={styles.dateText}>
                    {date ? date.toLocaleDateString() : "SELECT DATE"}
                </Text>
            </TouchableOpacity>

            {/* Show DateTimePicker only if showPicker is true */}
            {showPicker && (
          
                <DateTimePicker
                    value={date || new Date()} // If no date is selected, default to today
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    minimumDate={new Date()} // Set the minimum date as today
                />
               
            )}

            {/* Updated Pickers with state and onValueChange */}
            <CategoryPicker
                selectedValue={selectedCategory}
                onValueChange={(value) => setSelectedCategory(value)}
            />
            <EventPicker
                selectedValue={selectedEvent}
                onValueChange={(value) => setSelectedEvent(value)}
            />
            <PlacePicker
                selectedCountry={selectedCountry}
                onCountryChange={(value) => setSelectedCountry(value)}
                selectedCity={selectedCity}
                onCityChange={(value) => setSelectedCity(value)}
                selectedLocal={selectedLocal}
                onLocalChange={(value) => setSelectedLocal(value)}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={showResult}
            >
                <Text style={styles.buttonText}>E X P L O R E</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
         </ScrollView>
    );
};

export default HomeScreen;
