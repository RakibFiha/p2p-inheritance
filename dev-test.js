const Block = require("./block");

const block = new Block("p2p", "inheritance", "blockchain", "dpos");
console.log(block.toString());
console.log(Block.genesis().toString());