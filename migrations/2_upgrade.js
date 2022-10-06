const { upgradeProxy } = require("@openzeppelin/truffle-upgrades");

const Presale = artifacts.require("Presale");
const PresaleV2 = artifacts.require("Presale");

module.exports = async function (deployer) {
  const existing = await Presale.deployed();
  const instance = await upgradeProxy(existing.address, PresaleV2, {
    deployer,
  });
  console.log("Upgraded", instance.address);
};
