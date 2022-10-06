const HDWalletProvider = require("@truffle/hdwallet-provider");
const INFURA_API_KEY = "<INFURA_API_KEY>";
const fs = require("fs");
const MNEMONIC = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },

    goerli: {
      networkCheckTimeout: 1000000000,
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://goerli.infura.io/v3/${INFURA_API_KEY}`
        ),
      network_id: 5,
      gas: 6000000,
      gasPrice: 10000000000,
      skipDryRun: true,
    },

    mainnet: {
      network_id: 1,
      // networkCheckTimeout: 1000000000,
      provider: () =>
        new HDWalletProvider(
          MNEMONIC,
          `https://mainnet.infura.io/v3/${INFURA_API_KEY}`
        ),
      // gas: 15000000,
      skipDryRun: true,
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: "ETHERSCAN_API_KEY",
  },

  mocha: {},

  compilers: {
    solc: {
      version: "0.8.9",
    },
  },
};
