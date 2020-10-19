import {
  neoOneMainNetProvider,
  neoMainNetProvider,
  localResyncedProvider,
} from './providers';
import { disassembleByteCode } from '@neo-one/node-core';

// neoOneMainNetProvider
//   .getInvocationData(
//     '0xc8c9696476091fd63f4b0214715abe3eb10f4882a2959d4592c1f3cace800c24',
//   )
//   .then((data) => {
//     console.log(data);
//   });

// RPX
// neoOneMainNetProvider.getBlock(1444840).then((data) => {
//   const perf = data.transactions.filter(
//     (trans) =>
//       trans.hash ===
//       '0xc8c9696476091fd63f4b0214715abe3eb10f4882a2959d4592c1f3cace800c24',
//   )[0];

//   console.log(perf);

//   data.transactions.forEach((trans) => {
//     if (
//       trans.hash ===
//       '0xc8c9696476091fd63f4b0214715abe3eb10f4882a2959d4592c1f3cace800c24'
//     ) {
//       console.log(trans);
//       console.log(trans.receipt.globalIndex.toNumber());
//       console.log((trans as any).invocationData.contracts);
//     }
//   });
// });

// LONG
// neoOneMainNetProvider.getBlock(5752874).then((data) => {
//   console.log(data);
//   data.transactions.forEach((trans) => {
//     if (
//       trans.hash ===
//       '0x3f2688208983c72d530233df6a171583457805825023d9d19279d7114fea5f48'
//     ) {
//       console.log(trans);
//       console.log(trans.receipt.globalIndex.toNumber());
//       console.log((trans as any).invocationData.contracts);
//     }
//   });
// });

// NNN
neoOneMainNetProvider.getBlock(5785119).then((data) => {
  // console.log(data);x
  data.transactions.forEach((trans) => {
    if (
      trans.hash ===
      '0x11d35fe2115c19937197f6cefa25fc0aaf6cec1e676358918939f356410db2b1'
    ) {
      console.log(trans);
      // console.log(trans.receipt.globalIndex.toNumber());
      // console.log((trans as any).invocationData.contracts);
      console.log(
        disassembleByteCode(Buffer.from((trans as any).script, 'hex')),
      );
      // console.log((trans as any).script);
    }
  });
});

// NNN
// localResyncedProvider.getBlock(5785119).then((data) => {
//   console.log(data);
//   data.transactions.forEach((trans) => {
//     if (
//       trans.hash ===
//       '0x11d35fe2115c19937197f6cefa25fc0aaf6cec1e676358918939f356410db2b1'
//     ) {
//       console.log(trans);
//       // console.log(trans.receipt.globalIndex.toNumber());
//       // console.log((trans as any).invocationData.contracts);
//     }
//   });
// });

// NNN sample transaction
// localResyncedProvider.getBlock(5801535).then((data) => {
//   // console.log(data);
//   data.transactions.forEach((trans) => {
//     if (
//       trans.hash ===
//       '0xc9500171166210459c7b8271dd2d521a81539ae5ab4c7940319bcd81929c3266'
//     ) {
//       console.log(trans);
//       // console.log(trans.receipt.globalIndex.toNumber());
//       // console.log((trans as any).invocationData.contracts);
//     }
//   });
// });

// Random broken contract
// localResyncedProvider.getBlock(5859388 + 1).then((data) => {
//   console.log(data);
// });
