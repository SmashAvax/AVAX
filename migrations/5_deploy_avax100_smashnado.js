/* global artifacts */
require('dotenv').config({ path: '../.env' })
const AVAXSmashnado = artifacts.require('AVAXSmashnado')
const Verifier = artifacts.require('Verifier')
const hasherContract = artifacts.require('Hasher')


module.exports = function(deployer, network, accounts) {
  return deployer.then(async () => {
    const { MERKLE_TREE_HEIGHT, ETH_AMOUNT_H } = process.env
    const verifier = await Verifier.deployed()
    const hasherInstance = await hasherContract.deployed()
    await AVAXSmashnado.link(hasherContract, hasherInstance.address)
    const smashnado = await deployer.deploy(AVAXSmashnado, verifier.address, ETH_AMOUNT_H, MERKLE_TREE_HEIGHT, accounts[0])
    console.log('AVAX Smashnado\'s address ', smashnado.address)
  })
}
