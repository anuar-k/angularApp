const { ethers } = require('hardhat');
const { compile } = require('./_util');
const fs = require('fs');
const mongoose = require('mongoose');

export default async function handler(req, res) {
  const { targets, values, callcontracts, calldatas, description, tokenAddress, tokenName, tokenAbi, userAddress, contractAddress, contractName, contractAbi } = req.body;

  // Compile and deploy Example.js ?
  const fileBuf = fs.readFileSync('contracts/Example.sol');
  const [exAbi, exBytecode] = compile(fileBuf.toString('utf8'), 'Example.sol');

  // const Example = await ethers.getContractFactory(exAbi, exBytecode);
  const Example = await ethers.getContractAt(exAbi, exBytecode); //abi, address
  const example = await Example.deploy();
  await example.deployed();

  // call contract and call data from user input
  // const callContractName = `"${callcontracts}"`;
  // const callContractAddr = `"${targets}"`;
  // const Dao = mongoose.model('Dao');
  // const dao = Dao.find().where({ tokenAddress });

  // delegate msg.sender w/ Token contract
  const token = await ethers.getContractAt(tokenAbi, tokenAddress);
  await token.delegate(userAddress);
  const callContract = await ethers.getContractAt(exAbi, example.address);

  // format call data
  const calldata = callContract.interface.encodeFunctionData(calldatas);

  // propose proposal w/ GovernorAlpha contract
  const govAlpha = await ethers.getContractAt(contractAbi, contractAddress);
  // govAlpha.on('');
  // const tx = await govAlpha.propose([targets], [values], [calldata], description);
  const tx = await govAlpha.propose(["example.address"], ["0"], [calldata], description);
  const receipt = await tx.wait();

  // store receipt on mongodb
  console.log(receipt, 'receipt');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ name: 'prop created', receiptId: receipt.id });
};
