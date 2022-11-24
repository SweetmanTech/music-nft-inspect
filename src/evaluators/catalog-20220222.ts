export const evaluator = (metadataJson: any) => {
    console.log("metadataJson", metadataJson)
    return {
        matching: [],
        score: 100,
        missing: []
    }
}