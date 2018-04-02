const Blockchain = require("./blockchain");
const Block = require("./block");

describe("Blockchain", () => {
	let blockchain;

	beforeEach(() => {
		blockchain = new Blockchain();
	});

	it("Checking genesis block", () => {
		expect(blockchain.chain[0]).toEqual(Block.genesis());
	});

	it("Checking whether a new block added with correct data", () => {
		const data = "testing";
		blockchain.addBlock(data);

		expect(blockchain.chain[blockchain.chain.length-1].data).toEqual(data);
	});
});