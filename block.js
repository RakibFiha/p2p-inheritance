const SHA256 = require("crypto-js/sha256");

class Block{
  constructor(timestamp, lastHash, hash, data){
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }
  toString(){
    return `Block - 
      Timestamp: ${this.timestamp}
      Last Hash: ${this.lastHash.substring(0, 10)}
      Hash     : ${this.hash.substring(0, 10)}
      Data     : ${this.data}`;
  }
  
  static genesis(){
    return new this("1522634807158", "16f98c2c38ab245e3ef6f72ea4015ac5", "52435f10c02dc34a4b245a49c92c3b9d", []);
  }
  static  mineBlock(lastBlock, data){
    const timestamp = Date.now();
  }

  static mineBlock(lastBlock, data){
    const timestamp = Date.now();
    const lastHash =lastBlock.hash;
    const hash = Block.hash(timestamp, lastHash, data);

    return new this(timestamp, lastHash, hash, data);
  }

  static hash(Timestamp, lastHash,  data) {
    return SHA256(`${Timestamp}${lastHash}${data}`).toString();
  }
}


module.exports = Block;