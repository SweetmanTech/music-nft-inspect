import getContract from "../lib/getContract"
import abi from "../abi/decent721a.json"
import rendererAbi from "../abi/decentMetadataRenderer.json"
import { supportedChains } from "../lib/getDefaultProvider"
import getIpfsLink from "../lib/getIpfsLink"

export const index = async (contractAddress?: string, chainId?: number, onPendingIndex?: any) => {
    if (!contractAddress) return {}
    const chainIdInt = chainId || 1;

    let metadata;
    if (chainId) {
        onPendingIndex?.("Decent", chainId)
        metadata = await getMetadata(contractAddress, chainIdInt)
    } else {
        metadata = await checkAllChains(contractAddress, onPendingIndex)
    }
    return metadata
}

const checkAllChains = async(contractAddress: string, onPendingIndex?: any) => {
    let metadata
    for (let i = 0; i < supportedChains.length; i++) {
        let chainId = supportedChains[i]
        try {
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

    let metadata 
    try {
        metadata = await onchainMetadata(contract, chainId)
    }catch (err) {
        console.error(err) 
    }
    console.log("ONCHAIN", metadata)
    console.log("trigger?", !Boolean(metadata))
    if (!Boolean(metadata)) {
        metadata = await offchainMetadata(contract)
    }
    if (metadata) {
        metadata.contractAddress = contractAddress
        metadata.chainId = chainId
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
    console.log("BASE URI OFFCHAIN", baseUri)
    const ipfsLink = getIpfsLink(baseUri);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", ipfsLink, false ); // false for synchronous request
    xmlHttp.send( null );
    const metadata = xmlHttp.responseText;
    const json = JSON.parse(metadata)
    console.log("OFFCHAIN metadata", json)
    return json
}