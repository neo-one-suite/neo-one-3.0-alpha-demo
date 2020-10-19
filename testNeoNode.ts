import { neoThreeTestNetProvider, neoMainNetProvider } from './providers';

neoThreeTestNetProvider.getBlock(1).then((res) => {
  console.log(res);
});

// neoThreeTestNetProvider.getBlock(2).then((res) => {
//   console.log(res);
// });

// neoMainNetProvider.getBlock(1).then((res) => {
//   console.log(res);
// });
