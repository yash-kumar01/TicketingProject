import algosdk from 'algosdk';
import { getStoredAccount } from './createAccount';

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
  
  
