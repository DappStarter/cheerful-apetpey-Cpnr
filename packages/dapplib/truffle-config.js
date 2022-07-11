require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain come grace phone bone velvet'; 
let testAccounts = [
"0xf31a359818c5eeff1b391d7aa473bd135491bed5d79a8f00f036b76a7c887707",
"0xb16227c68fd3c97331c8471e2f385e99aec2000ce6e56e10ac0f7e2587dcf30f",
"0x4835077140b845155a0eab49ac890b8280344087edd0d122c5713f8a31eda45a",
"0x5cc1493c9daf20cf299a18ca2839176c312e8a3d1fae3cf3700370c542acc337",
"0xa0daae4eb8df71a66912d3db424882a3c220105154b99f427fecacf3046fb620",
"0xada20cfe4f7d1c6a9b5722c16f368b3f52cdc5e389765fb5f6c8e9db223a016e",
"0x1f5a895b3a0028ab82164d7b0704b3b2a14167926279aaacae3b252236e19708",
"0xdb1fe541261933fd8bc8457702f33fe36fdcdef2cdf4413eb95ae8cdb4295dcf",
"0xc0549eb9b1c72b7a428e30880968141fb270167903dac4fad2b0de2d98723dd5",
"0xa51c44e7f3b81eb3e7b6075bfd2c403f651be774e7a2f1caf70640758fdd435b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

