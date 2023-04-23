import { useEffect, useState } from "react";
export const isFalsy = (val: any) => (val === 0 ? false : !!!val);

export const cleanObjEmptyKey = (obj: object) => {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    if (isFalsy(result[key])) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

// custom hook
export const useMount = (fn: () => void) => {
  useEffect(fn, []);
};

export const useDebounce = (val: object, delay: number) => {
  let [debounceVal, setDebounceVal] = useState(val);
  useEffect(() => {
    let timer = setTimeout(() => setDebounceVal(val), delay);
    return () => clearTimeout(timer);
  }, [val]);
  return debounceVal;
};
