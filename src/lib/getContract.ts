import {ethers} from "ethers"
import {getDefaultProvider} from "./getDefaultProvider";

const getContract = (address: string, abi: any, chainId: number) => {
    const provider = getDefaultProvider(chainId);
    const contract = new ethers.Contract(address, abi, provider)
    return contract
}

export default getContract;