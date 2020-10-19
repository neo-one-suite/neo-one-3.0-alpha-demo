import { NEODataProvider, NEOONEDataProvider } from '@neo-one/client-core';

export const neoProvider = new NEODataProvider({
  network: 'main',
  rpcURL: 'http://seed1.ngd.network:10332',
});

export const neoMainNetProvider = new NEODataProvider({
  network: 'main',
  rpcURL: 'http://seed3.ngd.network:10332',
});

export const neoOneTestNetProvider = new NEOONEDataProvider({
  network: 'test',
  rpcURL: 'https://testnet.neotracker.io/rpc',
});

export const neoOneMainNetProvider = new NEOONEDataProvider({
  network: 'main',
  rpcURL: 'https://neotracker.io/rpc',
});

export const localResyncedProvider = new NEOONEDataProvider({
  network: 'main',
  rpcURL: 'http://localhost:8080/rpc',
});

export const neoThreeTestNetProvider = new NEOONEDataProvider({
  network: 'test',
  rpcURL: 'http://seed1t.neo.org:20332/',
});
