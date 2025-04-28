
import algosdk from 'algosdk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Buffer } from 'buffer';
import { getOrCreateAccount,getStoredAccount,createNewAccountFormatted } from './createAccount';

export const handleTrx = async () => {
  
  try {
    // 🔓 Step 1: Retrieve stored account
    const acct = await getStoredAccount();
    const acct2 = createNewAccountFormatted();

    // 🧪 Step 2: Setup AlgoD client
    const algodToken = 'a'.repeat(64);
    // const algodServer = 'http://localhost/'; // for Android emulator
    const algodServer = 'http://10.0.2.2'; // for Android emulator
    const algodPort = 4001;
    const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

    // 🏦 Step 3: Check balance
    let acctInfo;
    try {
      acctInfo = await algodClient.accountInformation(acct.addr).do();
      console.log(`💰 Balance for ${acct.addr}: ${acctInfo.amount} microAlgos`);
    } catch (err) {
      throw new Error("❌ Failed to fetch account information: " + err.message);
    }

    // ⚙️ Step 4: Get suggested params
    let suggestedParams;
    try {
      suggestedParams = await algodClient.getTransactionParams().do();
      if (!(suggestedParams.genesisHash instanceof Uint8Array)) {
        suggestedParams.genesisHash = new Uint8Array(suggestedParams.genesisHash);
      }      
       
    } catch (err) {
      throw new Error("❌ Failed to fetch suggested params: " + err.message);
    }

    // 📩 Step 5: Build transaction
    let txn;
   
    
    try {
      console.log("ADD2 =",acct2.addr);
      if (!algosdk.isValidAddress(acct.addr)) {
        throw new Error("Generated sender address is invalid");
      }
      if (!algosdk.isValidAddress(acct2.addr)) {
        console.error("❌ Not a valid address!", acct2.addr);
        console.error("📎 Type:", typeof acct2.addr);
        console.error("🧪 Is string?", typeof acct2.addr === 'string');
        throw new Error("Generated recipient address is invalid");
      }
      console.log("acct.addr:", acct.addr);
      console.log("acct2.addr:", acct2.addr);
      console.log("is acct.addr valid?", algosdk.isValidAddress(acct.addr));
      console.log("is acct2.addr valid?", algosdk.isValidAddress(acct2.addr));

      txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        sender: acct.addr,
        receiver: acct2.addr,
        amount: 100000,
        suggestedParams,
      });
      console.log("📝 Transaction built:", txn);
    } catch (err) {
      // throw new Error("❌ Failed to create transaction: " + err.message);
      console.error("💥 Raw values:", {
        amount: 100000,
        suggestedParams,
      });
      throw new Error("❌ Failed to create transaction: " + err.message);
    }

    // ✍️ Step 6: Sign transaction
    let signedTxn;
    try {
      signedTxn = txn.signTxn(acct.sk);
      console.log("🔐 Transaction signed");
    } catch (err) {
      throw new Error("❌ Failed to sign transaction: " + err.message);
    }


    // BALANCE 
    const acctInfo2 = await algodClient.accountInformation(acct.addr).do();
  console.log(`2 Account balance: ${acctInfo2.amount} microAlgos`); 
  const status = await algodClient.status().do();
  console.log("⛓️  Connected to network:", status);


    // 🚀 Step 7: Submit transaction
    const sendResult = await algodClient.sendRawTransaction(signedTxn).do();
  const txId = sendResult.txid;  // <-- not the object, just the txid string
  console.log("📤 Transaction result, txId:", sendResult);
  console.log("📤 Transaction submitted, txId:", txId);

// ⏳ Step 8: Wait for confirmation
try {
  const confirmedTxn = await algosdk.waitForConfirmation(algodClient, txId, 4);
  console.log("✅ Transaction confirmed!");
  console.log("📦 Transaction Info:", confirmedTxn);
  
  if (confirmedTxn.txn?.txn?.note) {
    console.log("🗒️ Note:", Buffer.from(confirmedTxn.txn.txn.note).toString());
  }
} catch (err) {
  throw new Error("❌ Failed to confirm transaction: " + err.message);
}

  } catch (err) {
    console.error("🚨 Overall Transaction Error:", err);
  }
};
