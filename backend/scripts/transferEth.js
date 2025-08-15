const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const [sender, receiver] = await ethers.getSigners();

  console.log("Before transfer:");
  console.log(
    "Sender:",
    ethers.formatEther(await ethers.provider.getBalance(sender.address))
  );
  console.log(
    "Receiver:",
    ethers.formatEther(await ethers.provider.getBalance(receiver.address))
  );

  const tx = await sender.sendTransaction({
    to: receiver.address,
    value: ethers.parseEther("1.0")
  });
  await tx.wait(); // Wait for transaction to be mined

  console.log("After transfer:");
  console.log(
    "Sender:",
    ethers.formatEther(await ethers.provider.getBalance(sender.address))
  );
  console.log(
    "Receiver:",
    ethers.formatEther(await ethers.provider.getBalance(receiver.address))
  );
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });