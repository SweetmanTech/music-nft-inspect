import { ethers } from 'ethers'

const ethereumRpc = 'https://rpc.ankr.com/eth'

export const supportedChains = [1, 5, 137, 80001]

export const getDefaultProvider = (chainId: number) => {
    const goerliRpc = 'https://rpc.ankr.com/eth_goerli'
    const polygonRpc = 'https://polygon-rpc.com'
    const mumbaiRpc = 'https://rpc-mumbai.maticvigil.com'

    if (chainId === 1) {
        return ethers.getDefaultProvider(ethereumRpc)
    }
    if (chainId === 5) {
        return ethers.getDefaultProvider(goerliRpc)
    }
    if (chainId === 137) {
        return ethers.getDefaultProvider(polygonRpc)
    } 
    if (chainId === 80001) {
        return ethers.getDefaultProvider(mumbaiRpc)
    }
    return ethers.getDefaultProvider(ethereumRpc)
}

export default getDefaultProvider