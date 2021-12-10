require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth pave pull hunt merry flock gate'; 
let testAccounts = [
"0xa55a0d26f04817fd952090f0afa2427cfada8b7a87c82ff42043ab0b08231eaa",
"0xfa3db5850137ae8a5651225c6b1b8757b721094f4bed55b16130ea5fe07bdfef",
"0x91172aefadb53567fa8f1ccbfcfc6aa13b484d8770b74554a9f6bdf4ab60ebb5",
"0x768bc7e03fe0e1b3437320adb4150ef73745ca93f1f0bfe4d9158706a8f8c4be",
"0x816b5f6d6791e944d43c2ad8d598526293100f300530c3609314f3b5e2071002",
"0x6c3df939552d6d9b9f821bffc3d87abc811cd1c61d311f66ff6d524f0c295963",
"0x3e4281095444403c4b69bc236bd4e3adcfa2c02ee9692997921eebdb9595c57d",
"0xf7aefe4ac5a1b1b2c64246fded3bcdc9bdf8fc0f096fea7ae0157231d5899dfa",
"0x6e989d22b0a4da6c09c6755a961b9e5876be08b9a488fec370eda7b0aef7116c",
"0x6bfa653590e953776a107476baadbf497ea4c2d2618c38676176e7fb01c9a8bb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


