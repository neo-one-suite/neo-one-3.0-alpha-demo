import { ReadClient } from '@neo-one/client-full-core';
import { NEOONEDataProvider } from '@neo-one/client-core';

const client = new ReadClient(
  new NEOONEDataProvider({
    network: 'main',
    rpcURL: 'http://localhost:8080/rpc',
  }),
);

client.getBlock(1444840).then((data) => {
  const perf = data.transactions.filter(
    (trans) =>
      trans.hash ===
      '0xc8c9696476091fd63f4b0214715abe3eb10f4882a2959d4592c1f3cace800c24',
  )[0];
  console.log(perf);
});
