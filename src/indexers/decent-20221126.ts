import getContract from "../lib/getContract"
import abi from "../abi/decent721a.json"
import rendererAbi from "../abi/decentMetadataRenderer.json"
import { supportedChains } from "../lib/getDefaultProvider"

export const index = async (contractAddress?: string, chainId?: number, onPendingIndex?: any) => {
    if (!contractAddress) return {}
    const chainIdInt = chainId || 1;
    console.log("INDEXING DECENT")

    let metadata;
    if (chainId) {
        console.log("Decent", chainId)
        onPendingIndex?.("Decent", chainId)
        metadata = await getMetadata(contractAddress, chainIdInt)
    } else {
        metadata = await checkAllChains(contractAddress, onPendingIndex)
    }
    return metadata
}

const checkAllChains = async(contractAddress: string, onPendingIndex?: any) => {
    console.log("checkAllChains DECENT")
    let metadata
    for (let i = 0; i < supportedChains.length; i++) {
        let chainId = supportedChains[i]
        try {
            console.log("CHECKING DECENT", chainId)
            onPendingIndex?.("Decent", chainId)
            metadata = await getMetadata(contractAddress, chainId);
        } catch (err) {
            console.error(err)
        }
        if (metadata) return metadata
    }
}

const getMetadata = async(contractAddress: string, chainId: number) => {
    const contract = getContract(contractAddress, abi, chainId)

    let metadata = await onchainMetadata(contract, chainId)
    if (!Boolean(metadata)) {
        await offchainMetadata(contract)
    }
    return metadata
}

const onchainMetadata = async (contract: any, chainId: number) => {
    const metadataRenderer = await contract.metadataRenderer();
    const rendererContract = getContract(metadataRenderer, rendererAbi, chainId)
    const base64 = await rendererContract.tokenURITarget(1, contract.address)
    const encoded = base64.substring(base64.indexOf(",") + 1)
    const decoded = atob(encoded)
    const json = JSON.parse(decoded)
    return json
}

const offchainMetadata = async (contract: any) => {
    const baseUri = await contract.baseURI();
    return baseUri
}