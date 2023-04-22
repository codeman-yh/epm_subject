export const isFalsy = (val) => val === 0 ? false : !!!val

export const cleanObjEmptyKey = (obj) => {
    const result = {...obj}
    Object.keys(result).forEach(key=>{
        if(isFalsy(result[key])){
            delete result[key]
        }
    })
    return result
}