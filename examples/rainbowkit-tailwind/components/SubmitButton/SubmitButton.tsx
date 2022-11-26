import { toast } from 'react-toastify';
import {evaluate} from "music-nft-inspect"

const SubmitButton = (props: any) => {
    const {metadata, onSuccess} = props
    const className = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    const buttonText = "Submit";

    const handleClick = () => {
        let metadataJson = {};
        try {
            metadataJson = JSON.parse(metadata)
            toast.success("⏳ reading your metadata.", {autoClose: 3000})
        } catch(err) {
            toast.error("error parsing JSON")
        }
        
        onSuccess?.(evaluate(metadataJson))
    }

    return (
        <button type="button" className={className} onClick={handleClick}>{buttonText}</button>
    )
}

export default SubmitButton