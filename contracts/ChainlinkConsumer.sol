pragma solidity >=0.6.0 <0.8.0;

import "@chainlink/contracts/src/v0.7/interfaces/AggregatorV3Interface.sol";

contract ChainlinkConsumer {

    AggregatorV3Interface internal priceFeed;

    /**
     * Aggreagtor Kovan:
     * ETH/USD : 0x9326BFA02ADD2366b30bacB125260Af641031331
     */
    constructor() {
        priceFeed = AggregatorV3Interface(0x9326BFA02ADD2366b30bacB125260Af641031331);
    }

    function getEthPrice() public view returns(int) {
        ( , int price, , , ) = priceFeed.latestRoundData();
        return price;
    }

}

