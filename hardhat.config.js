require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/rGsBvJIvvFJYAvCiPc3-Ls_bW5zvwLWt",
      accounts: [
        `0x90dd98e24d269a50a5e61e1cccb6fa4e446308e42c189bc1f715a9cc7d15f549`,
      ],
    },
  },
};
// defaultNetwork: "ropsten",
// networks: {
//   hardhat: {
//   },
//   ropsten: {
//     url: ["ALCHEMY URL"],
//     accounts: ['METAMASK/OTHER WALLET PRIVATE KEY'],
//   }
// },

// };
