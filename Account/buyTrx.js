// Bob buys ticket
export async function buyTicket(applicationId, buyerAccount, contractAddress, price) {
    const params = await lora.algodClient.getTransactionParams().do();
  
    // 1. Payment transaction (from buyer to smart contract)
    const paymentTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: buyerAccount.addr,
      to: contractAddress, // Smart Contract Address
      amount: price, // Microalgos (1 ALGO = 1e6 microalgos)
      suggestedParams: params,
    });
  
    // 2. Application call to "buy_ticket"
    const appCallTxn = algosdk.makeApplicationNoOpTxnFromObject({
      from: buyerAccount.addr,
      appIndex: applicationId,
      appArgs: [new Uint8Array(Buffer.from("buy_ticket"))],
      suggestedParams: params,
    });
  
    // Group transactions
    const txns = [paymentTxn, appCallTxn];
    algosdk.assignGroupID(txns);
  
    // Sign transactions
    const signedPaymentTxn = paymentTxn.signTxn(buyerAccount.sk);
    const signedAppCallTxn = appCallTxn.signTxn(buyerAccount.sk);
  
    // Send group
    const signedGroup = [signedPaymentTxn, signedAppCallTxn];
    const { txId } = await lora.algodClient.sendRawTransaction(signedGroup).do();
    console.log('Ticket purchase TxID:', txId);
  
    // Optional: Wait for confirmation
    await algosdk.waitForConfirmation(lora.algodClient, txId, 3);
  }
  