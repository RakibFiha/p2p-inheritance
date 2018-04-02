const Block = require("./block");

class Blockchain{
	constructor(){
		this.chain = [Block.genesis()]; 
	}
	
	addBlock(data){
		const block = Block.mineBlock(this.chain[this.chain.length-1], data);//first arg is the lastBlock
		this.chain.push(block);

		return block;
	}
}

module.exports = Blockchain;