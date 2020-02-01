require('dotenv').config()

const Web3 = require('web3')
const web3 = new Web3( new Web3.providers.HttpProvider(process.env.PROVIDER_URL) )

var filter = web3.eth.filter("latest",function(error, blockHash) {
    if (!error) {
        var block = web3.eth.getBlock(blockHash, true);        
        if (block.transactions.length > 0) {
            console.log("found " + block.transactions.length + " transactions in block " + blockHash);
            //console.log(JSON.stringify(block.transactions));
        } else {
            console.log("no transaction in block: " + blockHash);
        }
    }
});
