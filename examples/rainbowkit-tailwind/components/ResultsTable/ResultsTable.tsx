import Image from "next/image";

const ResultsTable = (props: any) => {
    const {results, setFocus} = props;

    const getImageSrc = (score: number) => {
        console.log("SCORE", score)
        if (score == 1) {
            return "/scores/1.jpeg"
        }
        if (score > 0.8) {
            return "/scores/2.jpeg"
        }
        if (score > 0.5) {
            return "/scores/3.jpeg"
        }
        return "/scores/4.png"
    }

    return (
        <table className="table-auto w-full text-left">
            <thead className="text-left">
                <tr>
                    <th>Metadata Format</th>
                    <th>Score</th>
                    <th>Compatibility</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result: any) => (
                    <tr key={result.name}>
                        <td>{result.name}</td>
                        <td className="cursor-pointer" onClick={() => setFocus(["MATCHING", ...result?.matching, "MISSING", ...result?.missing])}>
                            {`${result?.matching?.length} / ${result?.matching?.length + result?.missing?.length} (${((result?.score || 0) * 100).toFixed(0)}%)`}
                        </td>
                        <td className="cursor-pointer text-center" onClick={() => setFocus(result?.missing)}>
                            {result?.score && <Image height={50} width={50} src={getImageSrc(result?.score)} alt="compatible" />}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ResultsTable