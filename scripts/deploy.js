const { ethers } = require("hardhat");

export async function main() {


  const Token = await ethers.getContractFactory("ERC20Token");

  const token = await ethers.deployContract("Dragon Year", "DRGN", "100000000000");
  const deployedToken = await token.deployed();

  console.log("Token deployed to address:", deployedToken.address);

  const name = await token.name();
  console.log("Token name:", name);
} 

