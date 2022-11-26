import { useRouter } from "next/router";
import { useState } from "react"
import ContractPage from "../../../components/ContractPage/ContractPage"

const Page = () => {
    const router = useRouter()
    const {contractAddress, chainId} = router.query
    const [metadata, setMetadata] = useState({})

    return <ContractPage contractAddress={contractAddress} chainId={chainId} metadata={metadata} />
}

export default Page