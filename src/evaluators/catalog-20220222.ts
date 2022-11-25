import { compareJson } from "../lib/compareJson"
import schema from "../schemas/catalog-20220222.json"

export const evaluator = (metadata: any) => {
    console.log("metadata", metadata)
    console.log("schema", schema)
    const {matching, missing} = compareJson(metadata, schema)
    console.log("DIFFENCE IN EVALUATOR", missing)
    const score = calculateScore(matching.length, missing.length)
    return {
        matching: matching,
        score: score,
        missing: missing,
    }
}

const calculateScore = (add: number, sub: number) => {
    return (add / (add + sub)).toFixed(4)
}