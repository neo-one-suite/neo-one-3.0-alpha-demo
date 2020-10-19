import { neoOneTestNetProvider, neoProvider } from './providers';

const provider = neoOneTestNetProvider;

const blocks = [
  1271700,
  //   1271701,
  //   1271702,
  //   1271703,
  //   1271704,
  //   1271705,
  //   1271706,
  //   1271707,
  //   1271708,
  //   1271709,
  //   1271710,
];

// blocks.forEach((blockIn) => {
//   provider.getBlock(blockIn).then((block) => {
//     block.transactions
//       .filter(({ type }) => type !== 'InvocationTransaction')
//       .forEach((trans) => {
//         // const verScripts = trans.scripts.map((tx) => tx.verification);
//         // verScripts.forEach((script) => provider.getInvocationData(script));
//         console.log(trans);
//       });
//   });
// });

// Look at RawInvocationData interface in client-common/types.ts

provider.getAccount('AdxqBsPdoNMdqttGDEkQCSBTPqXujSiAYz').then((account) => {
  console.log(account);
  console.log(
    account.balances[
      '0x602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7'
    ].toNumber(),
  );
  console.log(
    account.balances[
      '0xc56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b'
    ].toNumber(),
  );
});
