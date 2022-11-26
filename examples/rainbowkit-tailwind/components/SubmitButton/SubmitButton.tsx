import { toast } from 'react-toastify';
import {evaluate, index} from "music-nft-inspect"

const SubmitButton = (props: any) => {
    const {metadata, onSuccess} = props
    const isDisabled = metadata.length === 0
    const backgroundColor = !isDisabled ? `focus:ring-4 focus:ring-blue-300 bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-700` : "bg-blue-200 hover:bg-blue-200 dark:bg-blue-200"
    const className = `text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ${backgroundColor}`
    const buttonText = "Submit";

    const indexContract = async() => {
        const metadataJson = await index(metadata);
        console.log("metadataJson", metadataJson)
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

    const handleClick = () => {
        console.log('metadata.indexOf("0x")', metadata.indexOf("0x"))
        if (metadata.indexOf("0x") === 0) {
            indexContract();
        } else {
            indexJson()
        }
        
    }

    return (
        <button type="button" disabled={isDisabled} className={className} onClick={handleClick}>{buttonText}</button>
    )
}

export default SubmitButton