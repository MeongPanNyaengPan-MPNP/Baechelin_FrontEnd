import { useEffect, useState } from 'react';

function UseDebounce<T>(value: T, delay: number) {
  const [debounceVal, setDebounceVal] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debounceVal;
}

export default UseDebounce;
