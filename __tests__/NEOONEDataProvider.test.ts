import { NEOONEDataProvider } from '@neo-one/client';
import { addressToScriptHash, crypto, common, ScriptBuilder, FeelessTransactionModel } from '@neo-one/client-common'

describe('NEOONEDataProvider Tests', () => {
  const provider = new NEOONEDataProvider({ network: 'testnet', rpcURL: 'https://staging.neotracker.io/rpc' });

  // Substitute address here with an address that's known to have token balances
  const address = 'NTZJ91cwZWiad8uj8sLMF7X6j8Ed41Cim6';

  test('Can get a block', async () => {
      const block = await provider.getBlock(1);

      expect(block).toBeDefined();
      expect(block.hash).toEqual('0x8f30c34a8a8ef997155aa4a0ef6664d872a127ecc3bb6a85b7bbc55d6d9912f5');
      expect(block.nextConsensus).toEqual('NgPkjjLTNcQad99iRYeXRUuowE4gxLAnDL');
      expect(block.transactions).toEqual([]);
  })

  test('Can iter blocks as they are persisted', async () => {
      const iterable = provider.iterBlocks({ indexStart: 1 });
      expect(iterable).toBeDefined();
  });

  test('Can get best Block hash', async () => {
      const hash = await provider.getBestBlockHash();

      expect(hash).toBeDefined();
      expect(common.isUInt256(common.stringToUInt256(hash))).toBeTruthy();
  });

  test('Can get current blockchain height', async () => {
      const height = await provider.getBlockCount();

      expect(height).toBeGreaterThan(343361);
  });

  test('Can get the mempool', async () => {
      const mempool = await provider.getMemPool();

      expect((mempool as any).height).toBeGreaterThan(343360);
      expect((mempool as any).verified).toBeDefined();
  });

  test('Can get connected peers', async () => {
      const peers = await provider.getConnectedPeers();

      expect(peers.length).toBeGreaterThan(0);
      expect(peers[0]).toBeDefined();
      expect(peers[0].port).toEqual(20333);
  });

  test('Can get account balances', async () => {
      const account = await provider.getAccount(address);

      expect(account.address).toEqual(address);
      expect(account.balances).toEqual({});
  });
});
