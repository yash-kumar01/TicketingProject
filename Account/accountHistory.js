import algosdk from 'algosdk';
import { getStoredAccount } from './createAccount';

// export const accountHistory = async () => {
//   try {
//     // Step 1: Retrieve stored account
//     const acct = await getStoredAccount();

//     // Step 2: Setup AlgoD client
//     const algodToken = 'a'.repeat(64);
//     const algodServer = 'http://10.0.2.2'; // Android emulator loopback
//     const algodPort = 4001;
//     const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

//     // Step 3: Get account information
//     const accountInfo = await algodClient.accountInformation(acct.addr).do();
//     // console.log('Account Balance:', accountInfo.amount / 1e7, 'Algos');
//     const indexerClient = new algosdk.Indexer('', 'http://10.0.2.2', 8980); // Adjust port if needed
//     const response = await indexerClient.searchForTransactions().address(acct.addr).do();
    
//     const transactions = response.transactions;
    
//     if (!transactions || transactions.length === 0) {
//       console.log('No transactions found.');
//       return;
//     }
    
//     transactions.forEach((txn, index) => {
//       console.log(`\n🔹 Transaction #${index + 1}`);
//       console.log(`   ID               : ${txn.id || 'N/A'}`);
//       console.log(`   Type             : ${txn['tx-type'] || 'N/A'}`);
//       console.log(`   Sender           : ${txn.sender || 'N/A'}`);
    
//       if (txn['payment-transaction']) {
//         const payTxn = txn['payment-transaction'];
//         console.log(`   Payment Receiver : ${payTxn.receiver || 'N/A'}`);
//         console.log(`   Amount           : ${(payTxn.amount || 0) / 1e6} Algos`);
//       }
    
//       if (txn['asset-transfer-transaction']) {
//         const assetTxn = txn['asset-transfer-transaction'];
//         console.log(`   Asset ID         : ${assetTxn['asset-id'] || 'N/A'}`);
//         console.log(`   Asset Receiver   : ${assetTxn.receiver || 'N/A'}`);
//         console.log(`   Asset Amount     : ${assetTxn.amount || 0}`);
//       }
    
//       if (txn['created-asset-index']) {
//         console.log(`   Created Asset ID : ${txn['created-asset-index']}`);
//       }
    
//       console.log(`   Confirmed Round  : ${txn['confirmed-round'] || 'Pending'}`);
//       const timestamp = txn['round-time']
//         ? new Date(txn['round-time'] * 1000).toLocaleString()
//         : 'Pending';
//       console.log(`   Timestamp        : ${timestamp}`);
//     });
    
//     // Step 4: Print created assets (if any)
//     if (accountInfo['created-assets'] && accountInfo['created-assets'].length > 0) {
//       console.log('Created Assets:');
//       accountInfo['created-assets'].forEach(asset => {
//         console.log(`Asset ID: ${asset.index}, Name: ${asset.params.name}`);
//       });
//     }

//     // Step 5: Print assets the account holds
//     if (accountInfo.assets && accountInfo.assets.length > 0) {
//       console.log('Asset Holdings:');
//       accountInfo.assets.forEach(asset => {
//         console.log(`Asset ID: ${asset.assetId}, Amount: ${asset.amount}`);
//         console.log(`Asset From: ${asset}, Asset To: ${asset}`);
//         // console.log(`Asset ID: ${asset['asset-id']}, Amount: ${asset.amount}`);
//       });
//     }

//   } catch (error) {
//     console.error('Error retrieving account history:', error);
//   }
// };
export const accountHistory = async (structured = false) => {
    try {
      const acct = await getStoredAccount();
      const algodToken = 'a'.repeat(64);
      const algodServer = 'http://10.0.2.2';
      const algodPort = 4001;
      const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
      const indexerClient = new algosdk.Indexer('', 'http://10.0.2.2', 8980);
        
      const accountInfo = await algodClient.accountInformation(acct.addr).do();
      const response = await indexerClient.searchForTransactions().address(acct.addr).do();
      const transactions = response.transactions || [];
  
      if (structured) {
        return { transactions, accountInfo };
      }
  
      // fallback: log everything
      transactions.forEach(/* ... existing console logs ... */);
    } catch (error) {
      console.error('Error retrieving account history:', error);
      if (structured) throw error;
    }
  };
  
  
