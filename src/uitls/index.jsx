import { useEffect, useState } from "react";
export const isFalsy = (val) => (val === 0 ? false : !!!val);

export const cleanObjEmptyKey = (obj) => {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    if (isFalsy(result[key])) {
      delete result[key];
    }
  });
  return result;
};


// custom hook
export const useMount = (fn) => {
  useEffect(fn,[])
}


export const useDebounce = (val,delay) => {
  let [debounceVal, setDebounceVal] = useState(val)
  useEffect(()=>{
    let timer = setTimeout(()=> setDebounceVal(val),delay)
    return () => clearTimeout(timer)
  },[val])
  return debounceVal
}
