import { toast } from 'react-toastify';
import {evaluateCatalog20220202} from "music-nft-inspect"

const SubmitButton = () => {
    const className = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    const buttonText = "Submit";

    const handleClick = () => {
        toast.success("⏳ reading your metadata.", {autoClose: 3000})
        const response = evaluateCatalog20220202({})
        console.log("response evaluateCatalog20220202", response)
    }

    return (
        <button type="button" className={className} onClick={handleClick}>{buttonText}</button>
    )
}

export default SubmitButton