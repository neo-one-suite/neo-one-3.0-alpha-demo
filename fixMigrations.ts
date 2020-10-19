import { neoOneMainNetProvider, neoMainNetProvider } from './providers';
import { ConfirmedInvocationTransaction } from '@neo-one/client-common';

const provider = neoOneMainNetProvider;

// 5752874 - block with LONG published
const LONGblock = 5752874;
// 5752946 - block with YIN published
const YINblock = 5752946;

// YIN transaction - c669993281167bfd60882db9ff15714e0cac8f39268df499f4c21eccd8fd57f4
// LONG transaction - 3f2688208983c72d530233df6a171583457805825023d9d19279d7114fea5f48
const yinHash =
  '0xc669993281167bfd60882db9ff15714e0cac8f39268df499f4c21eccd8fd57f4';
const longHash =
  '0x3f2688208983c72d530233df6a171583457805825023d9d19279d7114fea5f48';
const firstLongHash =
  '0x79d6490832288b0565f95051d851d94e5c7173d6540c391ccb213bffa24a3ce7';

// provider.getBlock(LONGblock).then((data) => {
//   console.log(
//     '\nInvocationTransaction from block data from NEO•ONE for LONG:\n',
//   );
//   data.transactions.forEach((trans) => {
//     if (trans.hash === longHash) {
//       console.log(trans);
//       (trans as ConfirmedInvocationTransaction).invocationData.contracts.forEach(
//         (c) => console.log(c),
//       );
//     }
//   });
// });

// neoMainNetProvider.getBlock(5752874).then((data) => {
//   console.log('\nBlock data from Neo for LONG:\n');
//   data.transactions.forEach((trans) => {
//     if (trans.hash === longHash) {
//       console.log(trans);
//     }
//   });
// });

// provider.getBlock(YINblock).then((data) => {
//   console.log(
//     '\nInvocationTransaction from block data from NEO•ONE for YIN:\n',
//   );
//   data.transactions.forEach((trans) => {
//     if (trans.hash === yinHash) {
//       console.log(trans);
//       (trans as ConfirmedInvocationTransaction).invocationData.contracts.forEach(
//         (c) => console.log(c),
//       );
//     }
//   });
// });

// neoMainNetProvider.getBlock(5752946).then((data) => {
//   console.log('\nBlock data from Neo for YIN:\n');
//   data.transactions.forEach((trans) => {
//     if (trans.hash === yinHash) {
//       console.log(trans);
//     }
//   });
// });

// provider
//   .getInvocationData(
//     '0xc669993281167bfd60882db9ff15714e0cac8f39268df499f4c21eccd8fd57f4',
//   )
//   .then((data) => {
//     console.log(data);
//   });

// provider
//   .getInvocationData(
//     '0x3f2688208983c72d530233df6a171583457805825023d9d19279d7114fea5f48',
//   )
//   .then((data) => {
//     console.log(data);
//   });

provider.getInvocationData(firstLongHash).then((data) => {
  console.log(data);
});
