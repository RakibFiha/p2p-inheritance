const Blockchain = require("./blockchain");
const Block = require("./block");

describe("Blockchain", () => {
	let blockchain;

	beforeEach(() => {
		blockchain = new Blockchain();
		blockchain_2 = new Blockchain();
	});

	it("Checking genesis block", () => {
		expect(blockchain.chain[0]).toEqual(Block.genesis());
	});

	it("Checking whether a new block added with correct data", () => {
		const data = "fox";
		blockchain.addBlock(data);

		expect(blockchain.chain[blockchain.chain.length-1].data).toEqual(data);
	});
	it("Validating the chain", () => {
		blockchain_2.addBlock("butterfly");

		expect(blockchain_2.isValidChain(blockchain_2.chain)).toBe(true);
	});

	it("Rejecting fake chain with a wrong genisis block", () => {
		blockchain_2.chain[0].data = "corrupt data";

		expect(blockchain_2.isValidChain(blockchain_2.chain)).toBe(false);
	})

	it("Rejecting a fake chain", () => {
		blockchain_2.addBlock("fox");
		blockchain_2.chain[1].data = "1st block corrupt data";

		expect(blockchain_2.isValidChain(blockchain_2.chain)).toBe(false);
	});

	it("Validating the longest chain", () =>{
		blockchain_2.addBlock("tiger");
		blockchain.replaceChain(blockchain_2.chain);

		expect(blockchain.chain).toEqual(blockchain_2.chain);
	});

	it("Chain's replacement failed due to shorter new chain length", () => {
		blockchain.addBlock("cow");
		blockchain.replaceChain(blockchain_2.chain);

		expect(blockchain.chain).not.toEqual(blockchain_2.chain);
	})
});