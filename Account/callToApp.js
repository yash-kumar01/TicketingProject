import algosdk from 'algosdk';
import { lora } from './loraClient';

// Alice creates ticket
export async function createTicket(applicationId, senderAccount) {
  const params = await lora.algodClient.getTransactionParams().do();

  // Create ApplicationCall txn
    const appCallTxn = algosdk.makeApplicationNoOpTxnFromObject({
    from: senderAccount.addr,
    appIndex: applicationId,
    appArgs: [new Uint8Array(Buffer.from("create_ticket"))],
    suggestedParams: params,
  });

  const signedTxn = appCallTxn.signTxn(senderAccount.sk);
  const { txId } = await lora.algodClient.sendRawTransaction(signedTxn).do();
  console.log('Ticket creation TxID:', txId);

  // Optional: Wait for confirmation
  await algosdk.waitForConfirmation(lora.algodClient, txId, 3);
}
