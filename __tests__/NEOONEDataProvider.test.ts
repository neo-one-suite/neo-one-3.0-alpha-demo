import { NEOONEDataProvider, scriptHashToAddress } from '@neo-one/client';
import { addressToScriptHash, crypto, common, ScriptBuilder } from '@neo-one/client-common'

describe('NEOONEDataProvider Tests', () => {
  let provider: NEOONEDataProvider;
  beforeEach(async () => {
    provider = new NEOONEDataProvider({ network: 'testnet', rpcURL: 'https://staging.neotracker.io/rpc' });
  });

  // const address = 'NSuX7PdXJLwUB7zboGor3X2C2eHswdM3t9';
  const address = scriptHashToAddress('0x7c2958a69d04f7b336e9a3e16618e9aa545934ef');

  test('Can get the unclaimed GAS available for a specified address', async () => {
    const unclaimedGas = await provider.getUnclaimed(address);

    console.log(`Unclaimed GAS available:`);
    console.log(unclaimedGas);
  });

//   test('Can test invoke a script', async () => {
//       const script = new ScriptBuilder().emitAppCall(common.stringToUInt160(addressToScriptHash(crypto.scriptHashToAddress({ addressVersion: common.NEO_ADDRESS_VERSION, scriptHash: common.nativeHashes.GAS }))), 'balanceOf', [address]);
//       const transaction = new FeelessTransactionModel({script});
//       const receipt = await provider.testInvoke(transaction);

//       console.log(`Invoke receipt:`);
//       console.log(receipt);
//   });

  test('Can get a block', async () => {
      const block = await provider.getBlock(1);

      console.log(`Genesis block:`);
      console.log(block);
  })

  test('Can iter blocks as they are persisted', async () => {
      const currentBlockCount = await provider.getBlockCount();
      const iterable = provider.iterBlocks({ indexStart: currentBlockCount + 1 });

      // Test here
  });

  test('Can get best Block hash', async () => {
      const hash = await provider.getBestBlockHash();

      console.log(`Best block hash is: ${hash}`);
  });

  test('Can get current blockchain height', async () => {
      const height = await provider.getBlockCount();

      console.log(`Current height: ${height}`);
  });

  // test('Can get a contract', async () => {
  //     const contract = await provider.getContract(crypto.scriptHashToAddress({ addressVersion: common.NEO_ADDRESS_VERSION, scriptHash: common.nativeHashes.NEO }));

  //     console.log(`NEO Contract:`);
  //     console.log(contract);
  // });

  test('Can get the mempool', async () => {
      const mempool = await provider.getMemPool();

      console.log(`Current mempool:`);
      console.log(mempool);
  });

//   test('Can get a transaction', async () => {
//       const transaction = await provider.getTransaction()
//   });

  test('Can get connected peers', async () => {
      const peers = await provider.getConnectedPeers();

      console.log(`Peers:`);
      console.log(peers);
  });

  // test('Can get account balances', async () => {
  //     const account = await provider.getAccount(address);

  //     console.log(`Account:`);
  //     console.log(account);
  // });
});
