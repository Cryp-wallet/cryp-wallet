import {
  generateSeedPhrase,
  createWalletFromPhrase,
  getReceiveAddress
} from "./utils/wallet.js";

console.log("Loading modules... ✅");

const mnemonic = generateSeedPhrase();
console.log("Generated Seed Phrase:", mnemonic);

const wallet = createWalletFromPhrase(mnemonic);
const address = getReceiveAddress(wallet);

console.log("Receive Address:", address);