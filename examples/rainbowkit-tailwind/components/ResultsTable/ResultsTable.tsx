const ResultsTable = (props: any) => {
    const {results, setFocus} = props;
    console.log("RESULTS TABLE PROPS", results)

    return (
        <table className="table-auto">
            <thead className="text-left">
                <tr>
                    <th>Metadata Format</th>
                    <th>Matching</th>
                    <th>Missing</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result: any) => (
                    <tr key={result.name}>
                        <td>{result.name}</td>
                        <td className="cursor-pointer" onClick={() => setFocus(result?.matching)}>{result?.matching?.length}</td>
                        <td className="cursor-pointer" onClick={() => setFocus(result?.missing)}>{result?.missing?.length}</td>
                        <td>{(result?.score || 0) * 100}%</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ResultsTable