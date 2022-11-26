import { useState } from "react";
import { evaluate } from "music-nft-inspect"
import FocusSection from "../FocusSection"
import ResultsTable from "../ResultsTable"
import { LensShareButton } from "@infinity-keys/react-lens-share-button";
import '@infinity-keys/react-lens-share-button/dist/style.css'

const ContractPage = (props: any) => {
    const [focus, setFocus] = useState();
    const {metadata, chainId, contractAddress} = props
    const results = evaluate(metadata)

    return (
        <div className="flex flex-col gap-4 grid-cols-1 w-full pt-5">
            <h1 className="text-center text-4xl text-[#0d76fc] p-5">
                <a rel="noreferrer" target="_blank" href="https://github.com/SweetmanTech/music-nft-inspect">
                    music nft inspect
                </a>
            </h1>
            <div className="flex grid justify-around grid-cols-5 p-3">
                <div className="col-span-5 lg:col-span-2 truncate text-ellipsis">
                    <LensShareButton 
                        postBody={`music nft score: 98.6%`}
                        url={`https://musicnftinspect.xyz/${chainId}/${contractAddress}`}
                        preview={true}
                    />
                    <p className="text-xl">Metadata</p>
                    <pre>{JSON.stringify(metadata, null, 4)}</pre>
                </div>
                <div className="text-center border border-500-red col-span-5 lg:col-span-3">
                    <ResultsTable setFocus={setFocus} results={results}/>
                    <FocusSection focus={focus} />
                </div>
            </div>
        </div>
    )
}

export default ContractPage