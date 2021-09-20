require('dotenv').config()

module.exports = {
  deployments: {
    netId1: {
      avax: {
        instanceAddress: {
          '0.1': '',
          '100': '',
          '1000': '',
          '5000': '',
          '100000': ''
        },
        symbol: 'AVAX',
        decimals: 18
      }
    }
  }
}
