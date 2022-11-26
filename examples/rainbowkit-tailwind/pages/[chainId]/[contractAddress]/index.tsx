import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import ContractPage from "../../../components/ContractPage"
import {index} from "music-nft-inspect"

const Page = () => {
    const router = useRouter()
    const {contractAddress, chainId} = router.query
    const [metadata, setMetadata] = useState({})

    useEffect(() => {
        const init = async () => {
            const address = contractAddress ? String(contractAddress) : undefined;
            const result = await index(address, Number(chainId))
            setMetadata(result)
        }

        init()
    }, [contractAddress, chainId])

    return <ContractPage contractAddress={contractAddress} chainId={chainId} metadata={metadata} />
}

export default Page