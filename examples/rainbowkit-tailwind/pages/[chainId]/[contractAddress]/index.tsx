import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import ContractPage from "../../../components/ContractPage"
import {index} from "music-nft-inspect"
import Head from "next/head";
import HomePage from "../../../components/HomePage";
import styles from '../../../styles/Home.module.css';

const Page = () => {
    const router = useRouter()
    const {contractAddress, chainId} = router.query
    const [metadata, setMetadata] = useState({})

    useEffect(() => {
        const init = async () => {
            const address = contractAddress ? String(contractAddress) : undefined;
            const result = await index({contractAddress: address, chainId: Number(chainId)})
            setMetadata(result)
        }

        init()
    }, [contractAddress, chainId])

    return (
        <div className={styles.container}>
          <Head>
            <title>music nft inspect</title>
            <meta
              name="description"
              content="verify music nfts"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <HomePage initialMetadata={metadata} />
        </div>
      );}


export default Page