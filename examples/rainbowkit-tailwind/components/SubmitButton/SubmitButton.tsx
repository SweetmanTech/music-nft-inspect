import { toast } from 'react-toastify';
import {evaluate, index} from "music-nft-inspect"
import { useMemo, useState } from 'react';
import Image from 'next/image';

const SubmitButton = (props: any) => {
    const {metadata, onSuccess, setMetadata} = props
    const [loading, setLoading] = useState("")
    const isDisabled = useMemo(() => metadata.length === 0 || Boolean(loading), [loading, metadata.length])
    const backgroundColor = !isDisabled ? `focus:ring-4 focus:ring-blue-300 bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-700` : "bg-blue-200 hover:bg-blue-200 dark:bg-blue-200"
    const className = `text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ${backgroundColor}`
    const buttonText = "Submit";

    const indexContract = async() => {
        const metadataJson = await index({ contractAddress: metadata, onPendingIndex});
        setMetadata(JSON.stringify(metadataJson, false, 4))
        onSuccess?.(evaluate(metadataJson))
    }

    const indexJson = () => {
        let metadataJson = {};
        try {
            metadataJson = JSON.parse(metadata)
            toast.success("⏳ reading your metadata.", {autoClose: 3000})
        } catch(err) {
            toast.error("error parsing JSON")
        }
        
        onSuccess?.(evaluate(metadataJson))
    }

    const handleClick = async () => {
        setLoading("Indexing...");
        if (metadata.indexOf("0x") === 0) {
            await indexContract();
        } else {
            indexJson()
        }
        setLoading("")
    }

    const onPendingIndex = (name: string, chain: number) => {
        setLoading(`Indexing ${name} on chain id ${chain}`)
    }

    return (
        <button 
            type="button" 
            disabled={isDisabled} 
            className={className} 
            onClick={handleClick}>
                {
                    loading ? 
                    <div className="flex items-center gap-5">
                        <Image 
                            src="/loading.gif" 
                            alt="loading"
                            height={25}
                            width={25}
                        />
                        {loading}
                    </div> : 
                    buttonText
                }
        </button>
    )
}

export default SubmitButton