## Purpose
Simple contract and TS script to test ChainLink data feeds


## Build 
yearn install
npm run compile

## Deploy 
npx hardhat run scripts/deploy.js --network ropsten
--> Contract address: 0xd14Cbfc492C1f43B0E0212B0AcDe3DB24e5c1122
0xd84a93ad5E5DFf13E1Bde7a4102293f5d530d933

npx hardhat run scripts/deploy.js --network kovan
Contract address: 0x20fCA1A81b79182f4ecc7D34279aF6E8e3421060

## Use contract
npx ts-node queryConsumerContract.ts
