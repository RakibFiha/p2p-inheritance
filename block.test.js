const Block = require("./block");

describe("Block", () =>{
	let data, lastBlock, block;

	beforeEach(() => {
		data = "Random";
		lastBlock = Block.genesis();
		block = Block.mineBlock(lastBlock, data);
	});

	it("Matching the `data` with the input", () => {
		expect(block.data).toEqual(data);
	});

	it("Matching the `lastHash` with the previous hash", () => {
		expect(block.lastHash).toEqual(lastBlock.hash);
	});
});