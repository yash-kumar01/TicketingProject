import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './navStyles/styles';

export default function NavBar({ currentScreen, setCurrentScreen }) {
  const tabs = [
    { name: 'MetricsScreen', label: 'Metrics' },
    { name: 'HomeScreen', label: 'Home' },
    { name: 'CreateScreen', label: 'Create' },
  ];

  return (
    <View style={styles.navBar}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={[styles.navButton, currentScreen === tab.name && styles.activeTab]}
          onPress={() => setCurrentScreen(tab.name)}
        >
          <Text style={styles.navButtonText}>{tab.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
