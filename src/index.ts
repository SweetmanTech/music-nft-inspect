import { evaluate as evaluateCatalog20220202 } from "./evaluators/catalog-20220222";
import { evaluate as evaluateZora20221126 } from "./evaluators/zora-20221126";
import { evaluate as evaluateManifold20221127 } from "./evaluators/manifold-20221127";
import { evaluate as evaluateSoundEdition20220930 } from "./evaluators/sound-edition-20220930";
import { evaluate as evaluateStandard20220222 } from "./evaluators/standard-20220222";

import {index as indexDecent20221126} from "./indexers/decent-20221126";

const evaluate = (metadata: any) => {
  const musicMetadata = evaluateStandard20220222(metadata)
  const zoraScore = evaluateZora20221126(metadata)
  const manifoldScore = evaluateManifold20221127(metadata)
  const soundScore = evaluateSoundEdition20220930(metadata)
  const catalogScore = evaluateCatalog20220202(metadata)
  const parsedScores = [
    {...zoraScore, name: "Zora Creator"},
    {...manifoldScore, name: "Manifold"},
    {...catalogScore, name: "Catalog"},
    {...soundScore, name: "Sound.xyz"},
    {...musicMetadata, name: "Music Metadata Standard"}
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
  evaluateManifold20221127,
  evaluateSoundEdition20220930,
  evaluateStandard20220222,
  evaluateZora20221126
};
