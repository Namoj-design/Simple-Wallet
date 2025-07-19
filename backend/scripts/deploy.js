const hre = require("hardhat");

async function main() {
  const Wallet = await hre.ethers.getContractFactory("SimpleWallet");
  const wallet = await Wallet.deploy();

  // Wait until the contract is actually deployed
  await wallet.waitForDeployment();

  const address = await wallet.getAddress();
  console.log(`✅ Wallet deployed at: ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
