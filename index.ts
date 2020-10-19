import { NEOONEDataProvider } from '@neo-one/client-core';

(async () => {
  const rpcURL = 'https://staging.neotracker.io/rpc';
  const dataProvider = new NEOONEDataProvider({
    network: 'test',
    rpcURL
  })

  // Set RPC URL


  // Get unclaimed GAS available


  // Get data from a block
  const latestBlock = await dataProvider.getBlockCount();
  const block = await dataProvider.getBlock(latestBlock);

  console.log(block);

  // Get account and its balances
  const account = await dataProvider.getAccount('AdxqBsPdoNMdqttGDEkQCSBTPqXujSiAYz');
})()