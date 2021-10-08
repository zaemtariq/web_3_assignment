const Web3 = require('web3');
const rpcurl = "https://ropsten.infura.io/v3/fa46fd160fd847c39ce43273c683de53";
const web3 = new Web3(rpcurl);
const utilitiesFunction = async () => {
    try {
        const gasprice = await web3.eth.getGasPrice();
        console.log(gasprice);
        const gasPriceConvert = web3.utils.fromWei(gasprice, 'ether');
        console.log("Gas Price in Ether :" + gasPriceConvert);
        console.log(web3.utils.sha3("Zaeem Tariq"));
        console.log(web3.utils.keccak256("Zaeem Tariq"));
        console.log(web3.utils.sha3("20"));
        console.log(web3.utils.keccak256("20"));
        console.log(web3.utils.randomHex(12));
    }catch(err) {
        console.log(err);
    }
}
utilitiesFunction();
