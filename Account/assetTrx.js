import algosdk from 'algosdk';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { getOrCreateAccount,getStoredAccount } from './createAccount'; 

export async function createAssetTransaction() {
  const algodToken = 'a'.repeat(64)
  const algodServer = 'http://10.0.2.2'
  const algodPort = 4001

  const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort)

  // 🔓 Step 1: Retrieve stored keys
    const acct = await getStoredAccount();
  console.log("ADD=",acct.addr);
  const params = await algodClient.getTransactionParams().do()
  
  const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
    sender: acct.addr,
    total: 10_000_000, // Total units
    decimals: 6,
    defaultFrozen: false,
    unitName: 'MYA',
    assetName: 'My Asset',
    manager: acct.addr,
    event_date: '10-01-2024',
    // reserve: account.addr,
    // freeze: account.addr,
    // clawback: account.addr,
    suggestedParams: params,
  })

  // Sign with account's secret key
  const signedTxn = txn.signTxn(acct.sk);
  
  // Send the transaction
  const sendTrx  = await algodClient.sendRawTransaction(signedTxn).do();
  const txId = sendTrx.txid 
  console.log('Transaction ID:', txId);

  // Wait for confirmation
  const confirmedTxn = await algosdk.waitForConfirmation(algodClient, txId, 4);
  console.log('Asset Created:', confirmedTxn);
  console.log('Asset Created:', confirmedTxn['asset-index']);
}

