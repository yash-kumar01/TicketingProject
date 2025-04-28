// CreateTicketForm.js
import React, { useState } from 'react';
import { Text, View, TouchableOpacity,ScrollView,Image } from 'react-native';
import styles from '../navStyles/styles';
import CategoryPicker from '../home/CategoryPicker';
import FormInput from '../home/FormInput';
import PlacePicker from '../home/PlacePicker';
import {createAccount,getStoredAccount} from '../Account/createAccount';
import {handleTrx} from '../Account/connectAccount';
import { Button, Alert, ActivityIndicator } from 'react-native';
import { createAssetTransaction } from '../Account/assetTrx';


// 👇 must come at the very top before algosdk or anything using crypto
import 'react-native-get-random-values';

const CreateEventForm = ({ setCurrentScreen }) => {
  const [loading, setLoading] = useState(false)

  const handleCreateAsset = async () => {
    setLoading(true)
    try {
      await createAssetTransaction()
      Alert.alert('Success', 'Asset created successfully!')
    } catch (error) {
      console.error(error)
      Alert.alert('Error', 'Something went wrong while creating the asset.')
    } finally {
      setLoading(false)
    }
  }

  // const [selectedCountry, setSelectedCountry] = useState('');
  // const [selectedCity, setSelectedCity] = useState('');
  // const [selectedLocal, setSelectedLocal] = useState('');
  const [formData, setFormData] = useState({
    price: '',
    managerAddress: '',
    Country:'',
    City:'',
    Local:'',
    eventName: '',
    date: '',
    time: '',
    seat: '',
    quantity:'',
  });

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    console.log("Event created with data:", formData);
    handleCreateAsset()
  };
  const handleAccountCreation = () => {
    createAccount()
    console.log("Creating account");

  }
  const handleDebugAsync = () => {
    getStoredAccount()
    console.log("Creating account");

  }
  const handleTrxButton = () => {
    handleTrx()
    console.log("handleTrx pressed")
  }

  return (
    <ScrollView>

    <View style={styles.layout}>
      <Text style={styles.title}>CREATE EVENT</Text>
      <View>
      <CategoryPicker
            selectedValue={formData.category}
            onValueChange={(value) => handleInputChange('category', value)}
          />

        <FormInput
          value={formData.eventName}
          onChangeText={(value) => handleInputChange('eventName', value)}
          placeholder="Event Name"
        />
        <FormInput
          value={formData.managerAddress}
          onChangeText={(value) => handleInputChange('managerAddress', value)}
          placeholder="Manager Address"
        />
          <PlacePicker
            Country={formData.Country}
            onCountryChange={(value) => handleInputChange('Country', value)}
            City={formData.City}
            onCityChange={(value) => handleInputChange('City', value)}
            Local={formData.Local}
            onLocalChange={(value) => handleInputChange('Local', value)}
          />

<Image source={require('../assets/robodate.png')}
      style={styles.homeImg}
            ></Image>

          <FormInput
            value={formData.date}
            onChangeText={(value) => handleInputChange('date', value)}
            placeholder="Date"
          />
          <FormInput
            value={formData.time}
            onChangeText={(value) => handleInputChange('time', value)}
            placeholder="Time"
          />
          <FormInput
            value={formData.seat}
            onChangeText={(value) => handleInputChange('seat', value)}
            placeholder="Seat"
          />
        <FormInput
          value={formData.price}
          onChangeText={(value) => handleInputChange('price', value)}
          placeholder="Ticket Price"
          keyboardType="numeric"
        />
        <FormInput
          value={formData.quantity}
          onChangeText={(value) => handleInputChange('quantity', value)}
          placeholder="Number of Tickets"
          keyboardType="numeric"
        />
      </View>
      {loading ? (
          <ActivityIndicator size="large" color="#0ff" />
        ) : (

      // <TouchableOpacity style={styles.button} onPress={handleCreateAsset}>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>CREATE</Text>
      </TouchableOpacity>)}


      <TouchableOpacity style={styles.button} onPress={handleTrxButton}>
      {/* <TouchableOpacity style={styles.button} onPress={handleSubmit}> */}
        <Text style={styles.buttonText}>TRX</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setCurrentScreen('CreateScreen')}
      >
        <Text style={styles.buttonText}>BACK</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>

  );
};

export default CreateEventForm;
