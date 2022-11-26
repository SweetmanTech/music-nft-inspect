import { useState } from "react";
import { evaluate } from "../../../../dist"
import FocusSection from "../FocusSection"
import ResultsTable from "../ResultsTable"
import { LensShareButton } from "@infinity-keys/react-lens-share-button";
import '@infinity-keys/react-lens-share-button/dist/style.css'

const ContractPage = (props: any) => {
    const [focus, setFocus] = useState();
    const {metadata, chainId, contractAddress} = props
    const results = evaluate(metadata)

    return (
        <div>
            <ResultsTable setFocus={setFocus} results={results}/>
            <FocusSection focus={focus} />
            <LensShareButton 
                postBody={`music nft score: 98.6%`}
                url={`https://musicnftinspect.xyz/${chainId}/${contractAddress}`}
                preview={true}
            />
        </div>
    )
}

export default ContractPage