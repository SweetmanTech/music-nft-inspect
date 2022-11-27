import { compareJson } from "../lib/compareJson"
import schema from "../schemas/manifold-20221127.json"

export const evaluate = (metadata: any) => {
    const {matching, missing} = compareJson(metadata, schema)
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