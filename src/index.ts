import { evaluate as evaluateCatalog20220202 } from "./evaluators/catalog-20220222";

const evaluate = (metadata: any) => {
  const musicMetadata = evaluateCatalog20220202(metadata)
  const parsedScores = [{...musicMetadata, name: "Catalog-20220222"}]
  return parsedScores

}

export {
  evaluate,
  evaluateCatalog20220202,
};
