import React, { useState } from 'react'
import styles from '../navStyles/styles';
import { View, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { createAssetTransaction } from '../Account/assetTrx';
import {handleTrx} from '../Account/connectAccount';
const MetricsScreen = () => {
    const [loading, setLoading] = useState(false)

  const handleTrxButton = async () => {
    setLoading(true)
    try {
      await handleTrx()
      Alert.alert('Success', 'Transaction successfully!')
    } catch (error) {
      console.error(error)
      Alert.alert('Error', 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }
    return (
        <View style={styles.layout}>
        <Text style={styles.title}>Simple Transaction</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0ff" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleTrxButton}>
        <Text style={styles.buttonText}>Trx</Text>
      </TouchableOpacity>
        )}
      </View>
    );
};

export default MetricsScreen;
