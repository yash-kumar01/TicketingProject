import * as React from 'react';
import { useState,useContext } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles from '../navStyles/resultStyles';
import data from '../DataBase/result.json'; // Import JSON file
import { HomeData } from '../navigation/HomeScreen' 
import { ResultHomeContext } from './ResultHome';
import { StatusBar } from "expo-status-bar";
// Ticket Details Screen
const TicketDetails = () => {
    const {selectedTicket, handleBack,handleBuy} = useContext(ResultHomeContext);

    return (
    <View>
      <Image source={require('../assets/buy.png')}
      style={styles.emojiImage} ></Image>
      <View style={styles.layout}>
        <Image style={styles.image} source={{ uri: selectedTicket.metadata.image_url }} />
        <View style={styles.content}>
          <Text style={styles.title}>{selectedTicket.metadata.event}</Text>
          <Text style={styles.date}>{selectedTicket.metadata.date}</Text>
          <Text style={styles.description}>{selectedTicket.metadata.description}</Text>
          <Text style={styles.date}>Location: {selectedTicket.metadata.location}</Text>
          <Text style={styles.date}>Time: {selectedTicket.metadata.time}</Text>
          <Text style={styles.date}>Seat: {selectedTicket.metadata.seat}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleBuy}>
        <Text style={styles.buttonText}>BUY</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleBack}>
        <Text style={styles.buttonText}>BACK</Text>
      </TouchableOpacity>
      <StatusBar style="auto"/>
    </View>
)
    };

  export default TicketDetails;
