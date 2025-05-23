# cryp-wallet
📁 Folder Structure (after unzip or cloning)

/src
  └── utils
        └── wallet.js        ← All wallet logic (seed, create, receive)
wallet-test.mjs              ← Test script for backend logic

✅ Step-by-Step Instructions
1. Set Up the Project

    Install Node.js (if not already)

    In the root folder, open terminal and run:

npm init -y
npm install ethers

2. Test the Wallet Logic

To check if everything is working:

    In terminal, run:

node src/wallet-test.mjs

    You should see:

        ✅ Wallet test starting

        🔐 A 12-word seed phrase

        🏦 A wallet address (Receive address)

3. Using the Logic in UI

In your React app or extension:

    Import the functions:

import {
  generateSeedPhrase,
  createWalletFromPhrase,
  getWalletAddress,
  getReceiveAddress
} from "../utils/wallet";

    Use in your Receive page like this:

const mnemonic = generateSeedPhrase();
const wallet = createWalletFromPhrase(mnemonic);
const address = getReceiveAddress(wallet);

// Now display this address or generate a QR code from it

🧾 QR Code Suggestion (Frontend)

Use this React package to generate a QR code:

npm install qrcode.react

In your component:

import QRCode from "qrcode.react";

<QRCode value={address} />

// ✅ Stage 2 – ETH Balance (Mocked)

// ---
// 📁 File Location
// src/utils/balance.js
// This file is new — it only contains one function: getEthBalance()

// ---
// 📦 What This Does
// ✅ Takes a wallet address
// ✅ Returns a fake ETH balance like "0.015 ETH"
// ✅ This is used to show balance on the home screen

// ---
// 📥 How to Use in UI

import { getEthBalance } from "../utils/balance";

const balance = await getEthBalance(wallet.address);
setBalance(balance); // show this in Home screen

// ---
// 🧪 Output Expected

Balance: 0.015 ETH

// ---
// ❗ No real ETH is used. This is just for showing how the home page will work visually.
