import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, Image } from 'react-native';
import styles from '../navStyles/styles';
import { accountHistory as fetchAccountHistory } from '../Account/accountHistory';
import { StatusBar } from 'expo-status-bar';

const MetricsScreen = () => {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [assets, setAssets] = useState([]);
  const senderAddress = transactions.length > 0 ? transactions[0].sender : 'Unknown Sender';

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const { transactions, accountInfo } = await fetchAccountHistory(true); // pass true to get structured data
        setTransactions(transactions || []);
        setAssets(accountInfo.assets || []);

      } catch (error) {
        console.error('Failed to fetch history:', error);
      } finally {
        setLoading(false);
      }
    };

    loadHistory();
  }, []);

  if (loading) {
    return (
      <View style={styles.screenContainer}>
        <ActivityIndicator size="large" color="#0ff" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.screenContainer}>
      <Image source={require('../assets/greeen.png')}
      style={styles.homeImg}
            ></Image>

      <Text style={styles.titleMetrics}>Your transactions</Text>
            <View style={styles.border}>

      <Text style={styles.ticketMetrics}>{senderAddress}</Text>
            </View>
      {transactions.length === 0 ? (
        <Text style={styles.ticketPrice}>No transactions found.</Text>
      ) : (
        transactions.map((txn, index) => (
          <View key={index} style={styles.ticketItemContainer}>
            <View style={styles.content}>
              <Text style={styles.ticketNameMetrics}>ID: {txn.id}</Text>
              <Text style={styles.ticketPrice}>Type: {txn.txType}</Text>
      <Text style={styles.ticketPrice}>
      ⏱ {txn.roundTime ? new Date(Number(txn.roundTime) * 1000).toLocaleString() : 'Pending'}
      </Text>

{txn.paymentTransaction && (
  <>
    <Text style={styles.ticketPrice}>
      ➤ To: {txn.paymentTransaction.receiver}
    </Text>
    <Text style={styles.ticketPrice}>
       Amount: {Number(txn.paymentTransaction.amount) / 1e6} Algos
    </Text>
  </>
)}
            </View>
          </View>
        ))
      )}
  <Image source={require('../assets/algo.png')}
      style={styles.algoImg}
            ></Image>
      <Text style={styles.title}>Asset Holdings</Text>
      {assets.length === 0 ? (
        <Text style={styles.ticketPrice}>No assets held.</Text>
      ) : (
        assets.map((asset, index) => (
          <View key={index} style={styles.ticketItemContainer}>
            <View style={styles.content}>
            <Text style={styles.ticketNameMetrics}>Asset ID: {asset.assetId.toString()}</Text>
            <Text style={styles.ticketPrice}>Amount: {(Number(asset.amount) / 1e6).toLocaleString()} Tokens</Text>
            </View>
          </View>
        ))
      )} 
     
      <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};

export default MetricsScreen;
