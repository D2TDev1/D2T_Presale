const { deployProxy } = require("@openzeppelin/truffle-upgrades");

const Presale = artifacts.require("Presale");

module.exports = async function (deployer) {
  const currentTime = Math.round(+new Date() / 1000);

  //!PLEASE UPDATE THE BELOW VALUES BEFORE RUNNING THE SCRIPT
  const instance = await deployProxy(
    Presale,
    [
      "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e", // Chainlink Oracle address for ETH / USD price feed
      "0x0a51be88A092E2d577e3e0d336979543a101724C", // USDT token contract address
      currentTime + 300, // Update the sale start time
      currentTime + 6000, // Update the sale end time
    ],
    { deployer }
  );
  console.log("Deployed", instance.address);
};
