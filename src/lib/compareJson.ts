export const compareJson = (input: any, expected: any) => {
    let expectedSet = new Set(Object.keys(expected))
    let actualSet =  new Set(Object.keys(input)) 
    const difSet = difference(actualSet, expectedSet)
    const dif = Array.from(difSet);
    const match = Array.from(difference(difSet, expectedSet));
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
  
