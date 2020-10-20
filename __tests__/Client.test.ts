import { LocalKeyStore, LocalMemoryStore, LocalUserAccountProvider, Client, NEOONEProvider } from '@neo-one/client';
import { common, crypto, scriptHashToAddress } from '@neo-one/client-common'

const address = scriptHashToAddress('0x7c2958a69d04f7b336e9a3e16618e9aa545934ef')

describe('Client Tests', () => {
  const createUserAccountProvider = async () => {
    const keystore = new LocalKeyStore(new LocalMemoryStore());
    await keystore.addUserAccount({
      network: 'testnet',
      privateKey: 'L4sEvTq6RDL42XGoGRQJjhLwfZ4BbwiStks9zrbLuG7yF3dXdpBZ',
      name: 'sender',
    });

    await keystore.addUserAccount({
      network: 'testnet',
      privateKey: 'L4qhHtwbiAMu1nrSmsTP5a3dJbxA3SNS6oheKnKd8E7KTJyCLcUv',
      name: 'receiver',
    });

    return new LocalUserAccountProvider({
      keystore,
      provider: new NEOONEProvider([
        {
          network: 'testnet',
          rpcURL: 'https://staging.neotracker.io/rpc',
        },
      ]),
    });
  };

  const setupClient = async () => {
    const accountProvider = await createUserAccountProvider();

    return new Client({ local: accountProvider });
  };

  let client: Client;
  beforeEach(async () => {
    client = await setupClient();
  });

  test('getAccount', async () => {
    const result = await client.getAccount({ network: 'testnet', address });

    expect(result.address).toEqual(address);
    expect(result.balances).toEqual({});
  });
});
