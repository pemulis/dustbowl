module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
    /*
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/");
      },
      network_id: '4',
    },
    development: {
      provider: function() {
        new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/");
      },
      network_id: "*" // Match any network id
    }
    */
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 500
    }
  }
};
