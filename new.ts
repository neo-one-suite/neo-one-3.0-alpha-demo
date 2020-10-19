import { privateKeyToPublicKey, wifToPrivateKey } from '@neo-one/client-common';

// Get public key from private key
console.log(privateKeyToPublicKey(wifToPrivateKey('')));
