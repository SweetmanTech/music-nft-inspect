const FocusSection = (props: any) => {
    const {focus} = props
    const {matching, missing} = focus
    console.log("MATCHING", matching)
    console.log("missing", missing)
    return (
        <div>
            {focus ? focus.map((item: string) => <p key={item}>{item}</p>) : ""}
        </div>
    )
}

export default FocusSection