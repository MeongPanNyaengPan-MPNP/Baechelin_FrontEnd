import { useEffect, useState } from 'react';

function UseDebounce<T>(value: T, delay: number) {
  const [debounceVal, setDebounceVal] = useState(value);
  const [bool, setbool] = useState(false);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(value);
      setbool(false);
    }, delay);
    return () => {
      clearTimeout(handler);
      setbool(true);
    };
  }, [value, delay]);
  return {
    debounceVal,
    bool,
  };
}

export default UseDebounce;
