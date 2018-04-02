const Block = require("./block");

const testBlock = Block.mineBlock(Block.genesis(), "test");
console.log(testBlock.toString());