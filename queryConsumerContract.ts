const ethers = require('ethers');

import {ChainlinkConsumer} from './typechain/ChainlinkConsumer';
import {ChainlinkConsumer__factory} from './typechain/factories/ChainlinkConsumer__factory';
// const {ChainlinkConsumer} = require('./ChainlinkConsumer');

const KOVAN_CHAINLINK_CONSUMER_CONTRACT = '0x20fCA1A81b79182f4ecc7D34279aF6E8e3421060'

async function main() {
    let provider = ethers.getDefaultProvider('kovan');

    const chainlinkConsumer = ChainlinkConsumer__factory.connect(KOVAN_CHAINLINK_CONSUMER_CONTRACT, provider);

    const ethPrice = await chainlinkConsumer.getEthPrice();
    console.log(ethPrice.toNumber());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  });