async function main() {
    const hre = require("hardhat");
    const { ethers } = hre;
  
    const address = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  
    const balance = await ethers.provider.getBalance(address);
    console.log(`Balance of ${address}: ${ethers.formatEther(balance)} ETH`);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  