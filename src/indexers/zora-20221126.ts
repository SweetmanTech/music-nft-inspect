import getContract from "../lib/getContract"
import abi from "../abi/zoraErc721Drop.json"

export const index = async (contractAddress?: string, chainId?: number, onPendingIndex?: any) => {
    if (!contractAddress) return {}
    const chainIdInt = chainId || 1;

    let metadata;

    onPendingIndex?.("Zora", chainIdInt)
    metadata = await getMetadata(contractAddress, chainIdInt)

    return metadata
}

const getMetadata = async(contractAddress: string, chainId: number) => {
    const contract = getContract(contractAddress, abi, chainId)
    const metadata = await onchainMetadata(contract)
    return metadata
}

const onchainMetadata = async (contract: any) => {
    const base64 = await contract.tokenURI(1);
    const encoded = base64.substring(base64.indexOf(",") + 1)
    const decoded = atob(encoded)
    const json = JSON.parse(decoded)
    return json
}