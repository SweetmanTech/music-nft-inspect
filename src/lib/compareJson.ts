export const compareJson = (input: any, expected: any) => {
    console.log("COMPARING JSON...")
    console.log("input", input)
    console.log("expected", expected)
    let expectedSet = new Set(Object.keys(expected))
    let actualSet =  new Set(Object.keys(input)) 
    const difSet = difference(actualSet, expectedSet)
    const dif = Array.from(difSet);
    console.log("deepCompare(input,expected)", dif)
    const match = Array.from(difference(difSet, expectedSet));
    console.log("deepCompare(difSet,expectedSet)", match)
    return {missing: dif, matching: match}
}

const difference = (actualSet: any, expectedSet: any) => {
    let _difference = new Set(expectedSet)
    for (let elem of actualSet) {
        // TODO: handle recursive call for nested objects
        _difference.delete(elem)
    }
    return _difference
}
  
