const Web3 = require("Web3");
const rpcURL = "https://ropsten.infura.io/v3/fa46fd160fd847c39ce43273c683de53";
const account = "0x579a84923cB461E5a130B1Bfd28480834781C470";

const web3 = new Web3(rpcURL);
fullBalance = async () => {
    try {
        const balance = await web3.eth.getBalance(account);       
        console.log("Balance of Account is (wei) ", balance);        
        const balance1ether = await web3.utils.fromWei(balance, 'ether');    
        console.log("Balance of Account is (Ether) ", balance1ether);
    }catch(err) {
        console.log(err);
    }
}
fullBalance();


