import { ethers, Mnemonic, HDNodeWallet } from "ethers";

// ✅ Stage 1: Wallet Logic (already done)
export function generateSeedPhrase() {
  const wallet = ethers.Wallet.createRandom();
  return wallet.mnemonic.phrase;
}

export function createWalletFromPhrase(mnemonic) {
  try {
    const phrase = Mnemonic.fromPhrase(mnemonic);
    const wallet = HDNodeWallet.fromMnemonic(phrase);
    return wallet;
  } catch (err) {
    console.error("Invalid seed phrase:", err);
    return null;
  }
}

export function getWalletAddress(wallet) {
  return wallet.address;
}

// ✅ Stage 2: Mock getEthBalance
export async function getEthBalance(walletAddress) {
  // ⚠️ This is a mock function — since faucets aren't working
  // it returns a fake ETH balance just for UI testing
  console.log("Mocking ETH balance for:", walletAddress);
  return "0.015 ETH";
}