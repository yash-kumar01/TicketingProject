import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './navStyles/styles';
import Icon from 'react-native-vector-icons/Ionicons'; // 👈 Import Ionicons

export default function NavBar({ currentScreen, setCurrentScreen }) {
  const tabs = [
    { name: 'MetricsScreen', icon: 'bar-chart-sharp' },   // Better Metrics icon
    { name: 'HomeScreen', icon: 'home-sharp' },            // Better Home icon
    { name: 'CreateScreen', icon: 'add-circle-sharp' },      // Better Create icon
  ];

  return (
    <View style={styles.navBar}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={[styles.navButton, currentScreen === tab.name && styles.activeTab]}
          onPress={() => setCurrentScreen(tab.name)}
        >
          <Icon
            name={tab.icon}
            size={24} // Matching size for button
            color={currentScreen === tab.name ? '#0ff' : '#888'} // Active = neon cyan
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
