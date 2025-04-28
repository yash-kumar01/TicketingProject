import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image,ActivityIndicator } from 'react-native';
import styles from '../navStyles/styles';
import CategoryPicker from '../home/CategoryPicker';
import EventPicker from '../home/EventPicker';
import PlacePicker from '../home/PlacePicker';
import AvailableDatePicker from '../home/AvailableDatePicker';
import FormInput from '../home/FormInput';
import { createAssetTransaction } from '../Account/assetTrx';
import { Alert } from 'react-native';

const CreateTicketForm = ({ setCurrentScreen }) => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    category: '',
    event: '',
    Country:'',
    City:'',
    Local:'',
    availableDate: '',
    time: '',
    seat: '',
    price: '',
    managerAddress: '',
  });
  
  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  
  const handleSubmit = async () => {
    
    console.log("Ticket created with data:", formData);
    
    try {
      setLoading(true)
      await createAssetTransaction()
      Alert.alert('Success', 'Asset created successfully!')
    } catch (error) {
      console.error(error)
      Alert.alert('Error', 'Something went wrong while creating the asset.')
    } finally {
      setLoading(false)
    }
 
  };

  return (
    <ScrollView>
      <View style={styles.layout}>
      <Image source={require('../assets/ticketimg.png')}
      style={styles.homeImg}
            ></Image>
        <Text style={styles.title}>CREATE TICKET</Text>
        
        <CategoryPicker
          selectedValue={formData.category}
          onValueChange={(value) => handleInputChange('category', value)}
        />

        <EventPicker
          selectedValue={formData.event}
          onValueChange={(value) => handleInputChange('event', value)}
        />

        <AvailableDatePicker
          selectedValue={formData.availableDate}
          onValueChange={(value) => handleInputChange('availableDate', value)}
        />

        <PlacePicker
            Country={formData.Country}
            onCountryChange={(value) => handleInputChange('Country', value)}
            City={formData.City}
            onCityChange={(value) => handleInputChange('City', value)}
            Local={formData.Local}
            onLocalChange={(value) => handleInputChange('Local', value)}
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
          placeholder="Price"
        />

        <FormInput
          value={formData.managerAddress}
          onChangeText={(value) => handleInputChange('managerAddress', value)}
          placeholder="Manager Address"
        />
  {loading ? (
          <ActivityIndicator size="large" color="#0ff" />
        ) : (
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>CREATE</Text>
        </TouchableOpacity>)}

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCurrentScreen('CreateScreen')}
        >

          <Text style={styles.buttonText}>BACK</Text>
      
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
};

export default CreateTicketForm;
