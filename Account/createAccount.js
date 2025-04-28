

import algosdk from 'algosdk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Buffer } from 'buffer';

global.Buffer = Buffer;

export const createAccount = async () => {
  try {
    const account = algosdk.generateAccount();
    const publicKey = Buffer.from(account.sk.slice(32)).toString('hex');
    const secretKey = Buffer.from(account.sk).toString('base64');
    
    await AsyncStorage.multiSet([
      ['accountAddress', String(account.addr)],
      ['accountPublicKey', String(publicKey)],
      ['accountSecretKey', String(secretKey)],
    ]);

    console.log("✅ New account created");
    return account;
  } catch (err) {
    console.error("❌ Error creating account:", err);
  }
};

export const getStoredAccount = async () => {
  try {
    const [addr, pkHex, skBase64] = await AsyncStorage.multiGet([
      'accountAddress',
      'accountPublicKey',
      'accountSecretKey',
    ]).then(results => results.map(r => r[1]));

    if (!addr || !pkHex || !skBase64) {
      throw new Error('❌ Account not found in storage');
    }

    const sk = new Uint8Array(Buffer.from(skBase64, 'base64'));

    // Optional: Recalculate public key to verify
    const derivedPk = Buffer.from(sk.slice(32)).toString('hex');
    if (derivedPk !== pkHex) {
      console.warn('⚠️ Stored public key does not match derived one');
    }

    return {
      addr,
      sk,
    };
  } catch (err) {
    console.error('❌ Error restoring account:', err);
    return null;
  }
};

export const getOrCreateAccount = async () => {
  const existing = await getStoredAccount();
  if (existing) {
   return existing;
  }
  return await createAccount();
};

export const createNewAccountFormatted = () => {
  try {
    const account = algosdk.generateAccount();
    return {
      addr: String(account.addr),      // <-- MUST be a string
      sk: account.sk,          // <-- secret key Uint8Array
    };
  } catch (err) {
    console.error('❌ Error creating new account:', err);
    return null;
  }
};

