// 👇 must come at the very top before algosdk or anything using crypto
import 'react-native-get-random-values';
import {createAccount,debugAsync} from './Account/createAccount';
import React, { useState, useEffect } from 'react';
import { AppState } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './navigation/HomeScreen';
import MetricsScreen from './navigation/MetricsScreen';
import CreateScreen from './navigation/CreateScreen';
import styles from './navStyles/styles';
import NavBar from './NavBar';
import CreateEventForm from './create/CreateEventForm';
import CreateTicketForm from './create/CreateTicketForm';
// import Result from './home/Result';
import ResultHome from './exploreResult/ResultHome';
import { getOrCreateAccount } from './Account/createAccount'; // 👈 updated import
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('HomeScreen'); // Default screen is Home
  const [account, setAccount] = useState(null); // ⬅️ new state

  useEffect(() => {
    const loadAppData = async () => {
      try {
        // Try to get or create Algorand account
        const loadedAccount = await getOrCreateAccount();
        console.log("LOADED ACCT=",loadedAccount);
        setAccount(loadedAccount);

        // Load last screen
        const lastScreen = await AsyncStorage.getItem('lastScreen');
        if (lastScreen) setCurrentScreen(lastScreen);
      } catch (err) {
        console.error('❌ Error initializing app:', err);
      }
    };

    loadAppData();
  }, []);
  // Load the last screen from AsyncStorage on app startup
  useEffect(() => {
    const loadLastScreen = async () => {
      try {
        const lastScreen = await AsyncStorage.getItem('lastScreen');
        if (lastScreen) {
          setCurrentScreen(lastScreen);
        }
      } catch (error) {
        console.error('Error loading last screen:', error);
      }
    };
    loadLastScreen();
  }, []);


  // Save the current screen to AsyncStorage whenever it changes
  useEffect(() => {
    const saveCurrentScreen = async () => {
      try {
        await AsyncStorage.setItem('lastScreen', currentScreen);
      } catch (error) {
        console.error('Error saving current screen:', error);
      }
    };
    saveCurrentScreen();
  }, [currentScreen]);

  // Handle App State changes for debugging
  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      console.log('App moved to state:', nextAppState);
      console.log('Current Screen:', currentScreen);
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => subscription.remove();
  }, [currentScreen]);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'HomeScreen' :
        return <HomeScreen setCurrentScreen={setCurrentScreen}  />;
      case 'MetricsScreen':
        return <MetricsScreen />;
      case 'CreateScreen':
          return <CreateScreen setCurrentScreen={setCurrentScreen} />;
      case 'event':
        return <CreateEventForm setCurrentScreen={setCurrentScreen} />;
      case 'ticket':
        return <CreateTicketForm setCurrentScreen={setCurrentScreen} />;
      case 'result':
        // return <Result setCurrentScreen={setCurrentScreen} />;
        return <ResultHome setCurrentScreen={setCurrentScreen} />;
      default:
        return <HomeScreen />;
    }
};
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>{renderScreen()}</View>
      <NavBar currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </View>
  );
};



