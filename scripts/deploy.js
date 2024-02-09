// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const NFTToken = await hre.ethers.getContractFactory("ERC20");
  console.log('Deploying MyNFT ERC20 token...');
  const token = await NFTToken.deploy('MYTOKEN', 'MTK', 10000);

  const data = await token.waitForDeployment();
  console.log('Deploying MyNFT ERC20', data)
  const address = await token.getAddress()
  console.log("BadgeToken deployed to2:", address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
