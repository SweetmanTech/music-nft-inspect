const FocusSection = (props: any) => {
    const {focus} = props

    return (
        <div>
            {focus ? focus.map((item: string) => <p key={item}>{item}</p>) : ""}
        </div>
    )
}

export default FocusSection