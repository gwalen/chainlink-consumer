/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 import { HardhatUserConfig } from "hardhat/types";

 import "@nomiclabs/hardhat-waffle";
 import "hardhat-typechain";

 const ALCHEMY_API_KEY = "check in .secret file"
 const ACCOUNT_PRIVATE_KEY = "check in .secret file"
 
 const config: HardhatUserConfig = {
     defaultNetwork: "hardhat",
     solidity: {
         compilers: [{ version: "0.7.3", settings: {} }],
       },
     networks: {
       hardhat: {},
       ropsten: {
         url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
         accounts: [ACCOUNT_PRIVATE_KEY],
       },
       kovan: {
         url: `https://eth-kovan.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
         accounts: [ACCOUNT_PRIVATE_KEY]
       }
     },  
 };
 export default config;
 
 
 
 