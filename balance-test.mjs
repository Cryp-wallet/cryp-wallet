import { getEthBalance } from "../utils/balance";

const balance = await getEthBalance(wallet.address);
setBalance(balance); // show this in Home screen