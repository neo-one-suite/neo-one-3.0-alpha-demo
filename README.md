# NEO•ONE v3.0-alpha release Client demonstration scripts

To test the JSONRPCClient:

- Run `npm install`
- Run `npx jest`

The `JSONRPCClient` makes the actual RPC calls to the NEO•ONE Node.
So the tests in `__tests__/JSONRPCClient.test.ts` demonstrate
the current data-fetching capabilities of the NEO•ONE client-side code, which provides the data
that is ultimately is used by the NEO•ONE Client and the NEO•ONE CLI. Thus, this demonstrates that
the NEO•ONE Client can read from a NEO•ONE v3.0 Node. More APIs are being debugged and added now.

To run a NEO•ONE Node from this repo:

- Run `npm install`
- Edit the config file at `config.json` if necessary
- Run `EDGE_USE_CORECLR=1 EDGE_APP_ROOT="node_modules/@neo-one/node-vm/lib/Debug/netcoreapp3.0 yarn neo-one-node --config <path/to/config.json>`

To run a NEO•ONE Node from source:

- Clone NEO•ONE repo (`git clone https://github.com/neo-one-suite/neo-one.git`)
- Install RushJS
- Run `rush install`
- Run `rush build -t @neo-one/node-bin`
- From root run `node packages/neo-one-node-bin/bin/neo-one-node.js --config <path/to/config.json>`
