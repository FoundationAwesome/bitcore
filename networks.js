var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('71362306'),
  addressVersion: 23,
  privKeyVersion: 151,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('333316d776a1bf1339bce2650ee6ad67670206db339e13044552a0afe05c0000'),
    merkle_root: hex('830a822ca687f35a66acb7fb993b63373859d6eac5cae348c75ff2bcadc7b6e8'),
    height: 0,
    nonce: 36561,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1409097856,
    bits: 486604799,
  },
  dnsSeeds: [
    // 'bitseed.xf2.org'
  ],
  defaultClientPort: 61224
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
