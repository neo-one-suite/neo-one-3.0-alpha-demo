# NEO•ONE v3.0-alpha release Client demonstration scripts

To test the NEOONEDataProvider:

- Run `npm install`
- Run `npx jest __tests__/NEOONEDataProvider.test.ts`

The `NEOONEDataProvider` is one layer of abstraction above the actual RPC calls being made
to the NEO•ONE Node. So the tests in `__tests__/NEOONEDataProvider.test.ts` demonstrate
the current data-fetching capabilities of the NEO•ONE client-side code, which provides the data
that is ultimately is used by the NEO•ONE Client and NEO•ONE CLI. Thus, this demonstrates that
the NEO•ONE Client can read from a NEO•ONE v3.0 Node. More APIs are being debugged and added now.

To test the Client:

- Run `npx jest __tests__/Client.test.ts`

To run a NEO•ONE node:

- Run `npm install`
- Edit the config file at `config.json` if necessary
- Run `EDGE_USE_CORECLR=1 EDGE_APP_ROOT="node_modules/@neo-one/node-vm/lib/Debug/netcoreapp3.0 yarn neo-one-node --config <path/to/config.json>`
