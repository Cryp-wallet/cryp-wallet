// ✅ Stage 2: Mock getEthBalance
export async function getEthBalance(walletAddress) {
  // ⚠️ This is a mock function — since faucets aren't working
  // it returns a fake ETH balance just for UI testing
  console.log("Mocking ETH balance for:", walletAddress);
  return "0.015 ETH";
}
