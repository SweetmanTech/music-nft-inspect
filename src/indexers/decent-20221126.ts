import getContract from "../lib/getContract"
import abi from "../abi/decent721a.json"
import rendererAbi from "../abi/decentMetadataRenderer.json"

export const index = async (contractAddress?: string, chainId?: number) => {
    if (!contractAddress) return {}
    const chainIdInt = chainId || 1;
    console.log("PASSED CHECK", contractAddress)
    const contract = getContract(contractAddress, abi, chainIdInt)
    
    console.log("INDEX CONTRACT", contract)
    let metadata = await onchainMetadata(contract, chainIdInt)
    if (!Boolean(metadata)) {
        await offchainMetadata(contract)
    }
    return metadata
}

const onchainMetadata = async (contract: any, chainId: number) => {
    const metadataRenderer = await contract.metadataRenderer();
    console.log("metadataRenderer", metadataRenderer)
    const rendererContract = getContract(metadataRenderer, rendererAbi, chainId)
    console.log("rendererContract", rendererContract)
    const base64 = await rendererContract.tokenURITarget(1, contract.address)
    console.log("base64", base64)
    const encoded = base64.substring(base64.indexOf(",") + 1)
    const decoded = atob(encoded)
    console.log("encoded", encoded)
    console.log("atob", )
    const json = JSON.parse(decoded)
    console.log("JSON", json)
    return json
}

const offchainMetadata = async (contract: any) => {
    const baseUri = await contract.baseURI();
    console.log("baseURI", baseUri)
}