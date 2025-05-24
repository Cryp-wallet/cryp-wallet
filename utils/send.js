// ✅ Stage 3: Send ETH (Mocked)
// This function simulates sending ETH from one address to another

export async function sendEth(senderAddress, recipientAddress, amount) {
  // ⚠️ This is a mock — no real ETH is sent
  console.log(`Mock sending ${amount} ETH from ${senderAddress} to ${recipientAddress}`);

  // Simulated transaction hash
  return {
    status: "success",
    txHash: "0xfake123abc456tx789",
    from: senderAddress,
    to: recipientAddress,
    amount: amount
  };
}