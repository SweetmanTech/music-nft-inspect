import { evaluate as evaluateCatalog20220202 } from "./evaluators/catalog-20220222";
import { evaluate as evaluateZora20221126 } from "./evaluators/zora-20221126";
import {index as indexDecent20221126} from "./indexers/decent-20221126";

const evaluate = (metadata: any) => {
  const musicMetadata = evaluateCatalog20220202(metadata)
  const zoraScore = evaluateZora20221126(metadata)
  const parsedScores = [
    {...musicMetadata, name: "Music Metadata Standard"}, 
    {...zoraScore, name: "Zora Creator"}
  ]
  return parsedScores
}

const index = (contractAddress?: any, chainId?: number) => {
  const metadata = indexDecent20221126(contractAddress, chainId)
  return metadata
}

export {
  index,
  indexDecent20221126,
  evaluate,
  evaluateCatalog20220202,
  evaluateZora20221126
};
